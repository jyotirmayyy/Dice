/************************* For first Image *************************/
var randomNumber1 = Math.floor(Math.random()*6) + 1;  //random number generated between 1 <-> 6
var randomImage1 = "images/dice" + randomNumber1 + ".png"; //source address as string except the number => dice1.png <-> dice6.png
document.querySelector("img.img1").setAttribute("src",randomImage1);
/* we won't put 'randomImage' in "double inverted commas" because then
  the method => setAttribute("src","randomImage") will set 'src' value to randomImage
  =>  <img class="img1" src="randomImage">
*/

/************************ For second Image ***************************/
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src",randomImage2);

/********************************************************************/
if(randomImage1 == randomImage2) {
  document.querySelector("h1").textContent="Draw"
} else if(randomImage1 == "images/dice6.png") {
  document.querySelector("h1").textContent="🚩 Player 1 won";
} else if(randomImage2 == "images/dice6.png") {
   document.querySelector("h1").textContent="🚩 Player 2 won";
}
