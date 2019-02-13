let newObject = {
    title: "Buy kitten",
    description: "Buy the kitten from the kitten factory on state street",
    completed: false,
    imgUrl: "http://placekitten.com/300/350"
 }
 let updatedObject = {
    title: "This is an updated todo",
    description: "Oh wooow!"
 }

//  axios.get("https://api.vschool.io/jessie/todo").then((response)=>{
//     console.log(response.data)
//     response.data.map(function(item){
//         document.getElementById("newlist").innerHTML += `${item.title}<br>`
//         document.getElementById("newlist").innerHTML += `${item.description}<br>`
//         document.getElementById("newlist").innerHTML += `<img src="${item.imgUrl}"/<br><br>`
// })}).catch(function(error){
//     console.log(error)
// })

axios.get("https://api.vschool.io/jessie/todo").then(function(response){
    var arr = response.data
    for(var i = 0; i < arr.length; i++){
        console.log(arr)
        var todoContainer = document.createElement('div');
        var strikeButton = document.createElement("button");
        var deleteButton = document.createElement("button");
        var title = document.createElement("h3");
        var des = document.createElement("p")
        // var complete = document.createElement("p");
        var image = document.createElement("IMG");
        strikeButton.type = "submit"
        strikeButton.innerText = "Finished"
        deleteButton.type = "submit"
        deleteButton.innerText = "DELETE"
        deleteButton.addEventListener("click", deleteTodo)
        todoContainer.id = `${arr[i]._id}`


        if(arr[i].completed === true){
            todoContainer.style.textDecoration = "line-through";
            // arr[i].completed === true;
        }

        // strikeButton.addEventListener("click", function(e) {
        //     e.target.parentNode.childNodes[1].style.textDecoration = "line-through";
        // }, true)

        strikeButton.addEventListener("click", function(e) {
            if(arr[1].completed === false){
                arr[1].completed = true
                // todoContainer[1].style.textDecoration = "line-through";
                e.target.parentNode.childNodes[1].style.textDecoration = "line-through";
            }else if (arr[1].completed === true){
                arr[1].completed = false;
                // todoContainer[1].style.textDecoration = "none";
                e.target.parentNode.childNodes[1].style.textDecoration = "none";
            }
        });

        title.textContent = arr[i].title
        des.textContent = arr[i].description
        // complete.textContent = `Completed: ${arr[i].completed}`
        image.setAttribute("src",`${response.data[i].imgUrl}`);

        todoContainer.appendChild(strikeButton);
        todoContainer.appendChild(title);
        todoContainer.appendChild(des);
        // todoContainer.appendChild(complete);
        todoContainer.appendChild(image);
        todoContainer.appendChild(deleteButton);
        document.getElementById("name").appendChild(todoContainer)
    }   
})

var form = document.getElementById("newTodo");
form.addEventListener("submit", submitTodo);

// let userObject = {
//     title: form.title.value,
//     description: form.description.value,
//     completed: false,
//     imgUrl: form.imgUrl.value
// };

function submitTodo (e){
    e.preventDefault()
    // var newTitle = form.title.value
    // var newDescription = form.description.value
    // var newImage = form.imgUrl.value
    let userObject = {
        title: form.title.value,
        description: form.description.value,
        completed: false,
        imgUrl: form.imgUrl.value
    };
    axios.post("https://api.vschool.io/jessie/todo",userObject).then(function(response){
        console.log(response.data)
    }).catch(function(error){
        console.log(error)
    })            
}
// axios.post("https://api.vschool.io/jessie/todo",userObject).then(function(response){
//     console.log(response.data)
// }).catch(function(error){
//     console.log(error)
// })            
// }

 
//  axios.put(`https://api.vschool.io/jessie/todo/${}`, updatedObject).then(function(response){
//     console.log(response.data)
//  }).catch(function(error){
//     console.log(error)
//  })
 
function deleteTodo(e){
    axios.delete(`https://api.vschool.io/jessie/todo/${e.target.parentElement.id}`).then(function(response){
        console.log(response.data)
        e.target.parentElement.remove()
    }).catch(function(error){
        console.log(error)
    })

}


// document.getElementById("mylist").innerHTML=response.data[i].title;  