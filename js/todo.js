const todoForm = document.querySelector("#todo");
const todoInput = todo.querySelector("input");
const todoList = document.querySelector("#todoList");
const ul = document.querySelector("ul");
const test = document.querySelector("#test");

const todoArray = []

function removeTodoFromList(event){
    const li = event.target.parentElement;
    li.remove();
    const todoContent = event.target.parentElement.firstChild.innerText;
    localStorage.removeItem(todoContent);
}

function showTodo(newTodo){
    const addElement = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = newTodo;
    const button = document.createElement("button");
    button.innerHTML = "delete";

    button.addEventListener("click", removeTodoFromList);

    addElement.appendChild(span);
    addElement.appendChild(button);
    ul.appendChild(addElement);

    todoArray.push(newTodo);

    saveTodoList();

    function saveTodoList(){
        localStorage.setItem(localStorage.length, newTodo);
    }

   

    /*function removeTodo(){
        addElement.remove();
        localStorage.removeItem(newTodo);
    }*/
}

function removeTodoFromstroage(num){
    localStorage.removeItem(num);
}

function paintingTodo2(){
    const addElement = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerHTML = "delete";

    for (let i = 1; i <= localStorage.length-1; i++) {
        const todos = localStorage.getItem(`${i}`)    
        span.innerHTML = todos;
        addElement.appendChild(span);
        addElement.appendChild(button);
        ul.appendChild(addElement);
        //button.addEventListener("click", removeTodoFromstroage(`${i}`));

    }

}
paintingTodo2();

function getTodo(event){
    const todoValue = todoInput.value;
    todoInput.value = "";
    showTodo(todoValue);
    //event.preventDefault();

}



todo.addEventListener("submit", getTodo);
