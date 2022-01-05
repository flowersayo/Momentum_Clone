const API_key = "67bf346e3b49dcb747a4d1c2d50bf38e";

function onGeoOk(position){
const lat = position.coords.latitude;
const lon = position.coords.longitude;

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
console.log(url); 
fetch(url).then(response => response.json()).then(data => {

    const weather = document.querySelector("#weather span:first-child");
    const city= document.querySelector("#weather span:last-child");
    weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
    city.innerText = data.name;
}); // 서버의 응답을 기다리고난 후 response의 json (데이터) 받기
}

function onGeoError(){
    alert("Can't find you. No Weather for you");
}

// 위치정보 받아오기
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); 