document.addEventListener('DOMContentLoaded', function() {
var header1= document.getElementById("headerID");
console.log(header1);

var image1= document.getElementById("imageID");

header1.style.color = "pink";
header1.style.fontSize= "40px";
header1.style.background= "grey";
header1.style.border= "2px dashed black";

var newParagraph= document.createElement("p")
newParagraph.innerText= "Here is a new paragraph"
document.body.appendChild(newParagraph);

var newHeader= document.createElement("h3")
newHeader.innerText= "I created this with Javascript"
document.body.appendChild(newHeader);

header1.addEventListener("mouseover", function(event) {
  console.log(event);
  event.target.style.color="blue";
  event.target.style.opacity=0.5  ;
})

header1.addEventListener("mouseleave", function(event) {
  console.log(event);
  event.target.style.color="pink";
})


image1.addEventListener("mouseover", function(event) {
  console.log(event);
  // event.target.style.opacity=0.5  ;
  event.target.classList.add('imageOpacity');
})

image1.addEventListener("mouseleave", function(event) {
  console.log(event);
  event.target.classList.remove('imageOpacity');
})


});
