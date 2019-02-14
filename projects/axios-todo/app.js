// let newObject = {
//     title: "Buy kitten",
//     description: "Buy the kitten from the kitten factory on state street",
//     completed: false,
//     imgUrl: "http://placekitten.com/300/350"
//  }
//  let updatedObject = {
//     title: "This is an updated todo",
//     description: "Oh wooow!"
//  }

// dataArray = [];

axios.get("https://api.vschool.io/jessie/todo").then(function(response){
    totallyDisplayDataDudeBro(response.data)
});

function totallyDisplayDataDudeBro(arr){
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
                strikeButton.addEventListener('click', strikeThrough)
                deleteButton.type = "submit"
                deleteButton.innerText = "DELETE"
                deleteButton.addEventListener("click", deleteTodo)
                todoContainer.id = `${arr[i]._id}`
        
        
                if(arr[i].completed === true){
                    // todoContainer.style.textDecoration = "line-through";
                    todoContainer.classList.add("done");
                }
                // else{
                //     todoContainer.style.textDecoration = "none";
                // }
                        

                
                // strikeButton.addEventListener("click", function() {
                //     // console.log(arr[1].completed)
                //     if(event.target["data-completed"] === false){
                //         updateTodoTrue()
                //         console.log("Hi jessie, this is FALSE")
                //     }else if (event.target["data-completed"] === true){
                //         updateTodoFalse()
                //         console.log("hi jess, this is TRUE")
                //     }
                // });
                // function updateTodoTrue(){
                //     // e.preventDefault()
                //     let updatedObject = {
                //         completed : true
                //     } 
                //     axios.put(`https://api.vschool.io/jessie/todo/${arr[1]._id}`, updatedObject).then(function(response){
                //     console.log(response.data)
                //     totallyDisplayDataDudeBro([response.data])
                //     document
                //     }).catch(function(error){
                //         console.log(error)
                //     })
                // };
                // function updateTodoFalse(){
                //     // e.preventDefault()
                //     let updatedObject = {
                //         completed : false
                //     } 
                //     axios.put(`https://api.vschool.io/jessie/todo/${arr[1]._id}`, updatedObject).then(function(response){
                //     console.log(response.data)
                //     totallyDisplayDataDudeBro([response.data])
                //     }).catch(function(error){
                //         console.log(error)
                //     })
                // }; 
        
                title.textContent = arr[i].title
                des.textContent = arr[i].description
                // complete.textContent = `Completed: ${arr[i].completed}`
                image.setAttribute("src",`${arr[i].imgUrl}`);
                
                document.getElementById("name").prepend(todoContainer)
                todoContainer.appendChild(strikeButton);
                todoContainer.appendChild(title);
                todoContainer.appendChild(des);
                // todoContainer.appendChild(complete);
                todoContainer.appendChild(image);
                todoContainer.appendChild(deleteButton);
            }
}

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
    let userObject = {
        title: form.title.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
    };
    axios.post("https://api.vschool.io/jessie/todo",userObject).then(function(response){
        console.log(response.data)
        totallyDisplayDataDudeBro([response.data])
    }).catch(function(error){
        console.log(error)
    })
    form.title.value = ""
    form.description.value = ""
    form.imgUrl.value = ""            
};
// axios.post("https://api.vschool.io/jessie/todo",userObject).then(function(response){
//     console.log(response.data)
// }).catch(function(error){
//     console.log(error)
// })            
// }

// function updateTodoTrue(){
//     // e.preventDefault()
//     let updatedObject = {
//         completed : true
//     } 
//     axios.put(`https://api.vschool.io/jessie/todo/${arr[1]._id}`, updatedObject).then(function(response){
//     console.log(response.data)
//     totallyDisplayDataDudeBro([response.data])
//     }).catch(function(error){
//         console.log(error)
//     })
// }; 
// function updateTodoFalse(){
//     e.preventDefault()
//     let updatedObject = {
//         completed : false
//     } 
//     axios.put(`https://api.vschool.io/jessie/todo/${arr[1]._id}`, updatedObject).then(function(response){
//     console.log(response.data)
//     totallyDisplayDataDudeBro([response.data])
//     }).catch(function(error){
//         console.log(error)
//     })
// }; 

function deleteTodo(e){
    axios.delete(`https://api.vschool.io/jessie/todo/${e.target.parentElement.id}`).then(function(response){
        console.log(response.data)
        e.target.parentElement.remove()
    }).catch(function(error){
        console.log(error)
    })

};

function strikeThrough(e){
    e.target.parentElement.classList.toggle("done");
    console.log(e);
    if(e.target.parentElement.classList.value === "done"){
        axios.put(`https://api.vschool.io/jessie/todo/${e.target.parentElement.id}`, {completed : true}).then(response =>{
            console.log(response.data)
        });
    }else {
        axios.put(`https://api.vschool.io/jessie/todo/${e.target.parentElement.id}`, {completed : false}).then(response =>{
            console.log(response.data)
        });
    }

}


// document.getElementById("mylist").innerHTML=response.data[i].title;  

//
//working strikethru button
// strikeButton.addEventListener("click", function(e) {
//     if(arr[1].completed === false){
//         arr[1].completed = true
//         e.target.parentNode.childNodes[1].style.textDecoration = "line-through";
//     }else if (arr[1].completed === true){
//         arr[1].completed = false;
//         e.target.parentNode.childNodes[1].style.textDecoration = "none";
//     }
// });



/// map over my array of todos and replace the old todo (has same id as new one).
/// check if the current todo has the same id as the old one.  map and filter (filter returns a new array with less items)