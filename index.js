
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomadd="./images/dice"+randomNumber1+".png";
console.log(randomadd);
var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];
img1.setAttribute("src",randomadd);
var randomNumber2=Math.floor(Math.random()*6)+1;
img2.setAttribute("src",randomadd);
var randomadd2="./images/dice"+randomNumber2+".png";
img2.setAttribute("src",randomadd2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER1 WINS";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
    document.querySelector("h1").innerHTML="ITS A DRAWW";
}
