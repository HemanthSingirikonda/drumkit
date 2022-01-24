//alert("ok tested");
//alert(document.querySelector("." + "w").innerHTML);
function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom1 = new Audio("tom-2.mp3");
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("tom-3.mp3");
      tom1.play();
      break;
    case "d":
      var tom1 = new Audio("tom-4.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("crash.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("kick-bass.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("snare.mp3");
      tom1.play();
      break;
    default:alert("invalid key");

  }
}/*
var haha=new Audio("sounds/kick-bass.mp3");
haha.play();*/

function bgc(key){
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function() {document.querySelector("." + key).classList.remove("pressed"); },100);
}
document.addEventListener("keydown",function(event){
  makesound(event.key);
  bgc(event.key);
} );
for(var i=0;i<document.querySelectorAll(".drum").length;i++ ){
  //console.log(document.querySelectorAll(".drum")[i].innerHTML);
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    makesound(this.innerHTML);
    bgc(this.innerHTML);
  });
}
/*document.querySelector(".w").addEventListener("click",function(){
  makesound(this.innerHTML);
  bgc(this.innerHTML);
});*/
