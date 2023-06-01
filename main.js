var a = document.getElementById('nav');
var b = document.getElementById('menu');

b.onclick = function(){
  a.classList.toggle("slide");
}


b.style.filter = "invert(1)";

var light = document.querySelector(".theme");

light.onclick = function(){
 document.body.classList.toggle("light-theme");
 if(b.style.filter == "invert(1)"){
   b.style.filter = "invert(0)";
   light.style.filter = "invert(0)";
   light.style.backgroundImage = "url(moon.png)";
 }
 else{
   b.style.filter = "invert(1)";
   light.style.filter = "invert(1)";
   light.style.backgroundImage = "url(sun.png)";
 }
   
}
