const loginInput =document.querySelector("#login-form input");
const loginForm =document.querySelector("#login-form");

const greeting =document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username"; //string을 반복적으로 사용하는 경우 변수로 선언해서 사용하기. -> 오타나면 JS가 지적해줌.

// 로그인 버튼 클릭시 이벤트
function onLoginSubmit(event){
event.preventDefault(); // 페이지 새로고침막기 
loginForm.classList.add(HIDDEN_CLASSNAME); // class="hidden" 추가

const username = loginInput.value;
localStorage.setItem(USERNAME_KEY,username); // username을 localstorage에 저장.

//greeting.innerText="Hello " + username; 위와 같은표현
paintGreetings(username);
}

// greeting을 보이고  인삿말을 저장된 username으로 채워주는 함수
function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting태그의 hidden클래스 제거= greeting을 보임
    greeting.innerText=`Hello ${username}`;
}

const savedUsername=localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername===null){ //local storage에 user정보가 없을때.
      // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 폼태그의 hidden클래스 제거= form을 보임
    loginForm.addEventListener("submit",onLoginSubmit) //로그인 폼 제출시 이벤트 추가 
}
else{
    //show the greetings
    paintGreetings(savedUsername);
}

