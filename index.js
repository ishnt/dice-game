var randomnumber1=Math.random();
randomnumber1=Math.floor((randomnumber1*6)+1);
console.log(randomnumber1);

var randomnumber2=Math.random();
randomnumber2=Math.floor((randomnumber2*6)+1);
console.log(randomnumber2);

if(randomnumber1==1){
  document.querySelector(".img1").setAttribute("src","dice1.png");


}
else if (randomnumber1==2) {
    document.querySelector(".img1").setAttribute("src","dice2.png ");


}
else if (randomnumber1==3) {
  document.querySelector(".img1").setAttribute("src","dice3.png ");


}
else if (randomnumber1==4) {
  document.querySelector(".img1").setAttribute("src","dice4.png ");


}
else if (randomnumber1==5) {
  document.querySelector(".img1").setAttribute("src","dice5.png ");


}
else{
  document.querySelector(".img1").setAttribute("src","dice6.png");


}
if(randomnumber2==1){
    document.querySelector(".img2").setAttribute("src","dice1.png ");

}
else if (randomnumber2==2) {
    document.querySelector(".img2").setAttribute("src","dice2.png");


}
else if (randomnumber2==3) {
    document.querySelector(".img2").setAttribute("src","dice3.png ");


}
else if (randomnumber2==4) {
    document.querySelector(".img2").setAttribute("src","dice4.png ");


}
else if (randomnumber2==5) {
    document.querySelector(".img2").setAttribute("src","dice5.png ");


}
else{
    document.querySelector(".img2").setAttribute("src","dice6.png ");

}
if(randomnumber1>randomnumber2){
  document.querySelector(".container h1").innerHTML="Player 1 wins";

}
else if(randomnumber1<randomnumber2){
  document.querySelector(".container h1").innerHTML="Player 2 wins";
}

else{
document.querySelector(".container h1").innerHTML="Draw";
}
