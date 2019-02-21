axios.get("https://api.vschool.io/jessie/todo").then(function (response) {
    displayData(response.data)
});

function displayData(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr)
        var todoContainer = document.createElement('div');
        var strikeButton = document.createElement("button");
        var deleteButton = document.createElement("button");
        var title = document.createElement("h3");
        var des = document.createElement("p")
        var image = document.createElement("IMG");
        strikeButton.type = "submit"
        strikeButton.innerText = "Finished"
        strikeButton.addEventListener('click', strikeThrough)
        deleteButton.type = "submit"
        deleteButton.innerText = "DELETE"
        deleteButton.addEventListener("click", deleteTodo)
        todoContainer.id = `${arr[i]._id}`

        //This marks the todo item with a line-through upon the initial loading. "Done" does a line-through styling in my css
        if (arr[i].completed === true) {
            todoContainer.classList.add("done");
        };

        title.textContent = arr[i].title
        des.textContent = arr[i].description
        image.setAttribute("src", `${arr[i].imgUrl}`);

        document.getElementById("name").prepend(todoContainer)
        todoContainer.appendChild(strikeButton);
        todoContainer.appendChild(title);
        todoContainer.appendChild(des);
        todoContainer.appendChild(image);
        todoContainer.appendChild(deleteButton);
    }
};

var form = document.getElementById("newTodo");
form.addEventListener("submit", submitTodo);

//this is for submitting new "todos".  The users inputs the data and it is sent to the api and then loaded
function submitTodo(e) {
    e.preventDefault()
    let userObject = {
        title: form.title.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
    };
    axios.post("https://api.vschool.io/jessie/todo", userObject).then(function (response) {
        console.log(response.data)
        displayData([response.data]) //data loaded here with the main loading function
    }).catch(function (error) {
        console.log(error)
    });

    //these are to clear the input boxes after submitting 
    form.title.value = ""
    form.description.value = ""
    form.imgUrl.value = ""
};


function deleteTodo(e) {
    axios.delete(`https://api.vschool.io/jessie/todo/${e.target.parentElement.id}`).then(function (response) {
        console.log(response.data)
        e.target.parentElement.remove()
    }).catch(function (error) {
        console.log(error)
    })

};

//this puts a line-through by using a toggle to add some css.  It also updates the api to mark completed as true or false
function strikeThrough(e) {
    e.target.parentElement.classList.toggle("done");
    console.log(e);
    if (e.target.parentElement.classList.value === "done") {
        axios.put(`https://api.vschool.io/jessie/todo/${e.target.parentElement.id}`, {
            completed: true
        }).then(response => {
            console.log(response.data)
        });
    } else {
        axios.put(`https://api.vschool.io/jessie/todo/${e.target.parentElement.id}`, {
            completed: false
        }).then(response => {
            console.log(response.data)
        });
    }
};