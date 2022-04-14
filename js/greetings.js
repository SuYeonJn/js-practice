/* const loginForm = document.querySelector(".login-form");
const button = loginForm.querySelector("button");
const nameResult = document.querySelector(".nameResult");

function getName(){
    const nameSubmit = loginForm.querySelector("input").value;
    if (nameSubmit && nameSubmit.length < 5){
        nameResult.innerHTML = nameSubmit;
    } else {
        nameResult.innerHTML = "please write your name in 4 letters";
    }
}
button.addEventListener("click", getName);
*/

const loginForm = document.querySelector(".login-form");
const nameResult = document.querySelector(".nameResult");
const HIDE_CLASSNAME_HIDDEN = "hidden";
// string 이 반복될 때 변수로 만들어서, 오류발생 시 찾기 좋게 만든다.

function getname(event){
    //form 은 enter나 submit 이후에 리로드 되는 게 default. 그걸 막기 위해 preventDefault 사용, event 는 관습적으로 쓰이는 것
    event.preventDefault();
    const getusername = loginForm.querySelector("input").value;
    //localstorage 에 저장하기
    localStorage.setItem("username", getusername);
    loginForm.classList.add(HIDE_CLASSNAME_HIDDEN);
    paintingGreetings(getusername);
}

function paintingGreetings (username) {
    loginForm.classList.add(HIDE_CLASSNAME_HIDDEN);
    nameResult.innerHTML = `Hello ${username}`
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null){
    loginForm.classList.remove(HIDE_CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", getname);
} else {
   paintingGreetings(savedUsername);

}
