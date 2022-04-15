const todoForm = document.querySelector("#todo");
const todoInput = todo.querySelector("input");
const todoList = document.querySelector("#todoList");
const ul = document.querySelector("ul");
const test = document.querySelector("#test");

let todoArray = []

function removeTodoFromList(event){
    const li = event.target.parentElement;
    li.remove();
    // item을 하나하나 대입해서 true 인 것만 모아서 배열을 새로 만듦.
    todoArray = todoArray.filter(item => item.id !== Number(li.id))
    saveTodo();
}

function showTodo(newTodo){
    const addElement = document.createElement("li");
    addElement.id = newTodo.id;

    const span = document.createElement("span");
    span.innerHTML = newTodo.text;
    
    const button = document.createElement("button");
    button.innerHTML = "delete";
    
    button.addEventListener("click", removeTodoFromList);

    addElement.appendChild(span);
    addElement.appendChild(button);
    ul.appendChild(addElement);   
}

function saveTodo(){
    localStorage.setItem("newTodo", JSON.stringify(todoArray));
}


function getTodo(event){
    event.preventDefault();
    const todoValue = todoInput.value;
    todoInput.value = "";
    const todoObj = {
        text : todoValue,
        id : Date.now()
        //삭제기능 추가를 위해 id값 부여
    }
    todoArray.push(todoObj);
    showTodo(todoObj);
    saveTodo();
}

console.log(todoArray);

todo.addEventListener("submit", getTodo);

const savedTodos = localStorage.getItem("newTodo");


if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todoArray = parsedTodos;
    parsedTodos.forEach((element) => {
        showTodo(element);
    });
}