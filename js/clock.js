const clock = document.querySelector("h2#clock");

clock.innerText="00:00:00";

function getClock(){
    const date = new Date();
    //padStart 를 사용하려면 number -> string 변환필요.
    const hours= String (date.getHours()).padStart(2,"0");
    const mintes=String (date.getMinutes()).padStart(2,"0");
    const seconds=String (date.getSeconds()).padStart(2,"0");

    clock.innerText=`${hours}:${mintes}:${seconds}`
    //text formating 필요
}

getClock();
setInterval(getClock,1000);