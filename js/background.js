const images=["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];


//js에서 이미지를 만들고 html에 추가하기

const bgImage = document.createElement("img"); //img 태그 생성

bgImage.src=`img/${chosenImage}`; //이미지 소스 설정
console.log(bgImage);
document.body.appendChild(bgImage); // 생성한 img노드를 body의 자식으로 추가
