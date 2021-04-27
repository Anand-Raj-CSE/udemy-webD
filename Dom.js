console.log(document.getElementById("first"));
console.log(document.get);
console.log(document.querySelector("li"));
console.log(document.querySelectorAll("li"));
a = document.querySelector("li");
console.log(a.getAttribute("random"));
a.setAttribute("random",1000); // NOw the random li has changes to 1000
console.log(document.querySelector("li"));
// Changing the style of any query of CSS using DOM
document.querySelector("h1").style.background = "yellow";
document.querySelector("li").classList.add("done");

// This will change the class of li
document.querySelector("li").classList.add("done");
// THis will toggle between checked and unchecked.
document.querySelector("li").classList.toggle("done");
document.querySelector("li").classList.toggle("done");

// THis would change the h1 tag.
document.querySelector("h1").innerHTML = "<strong>!!!!!!!</strong>"; 

// This would print the parentElement of parentElement of "li"
console.log(document.querySelectorAll("li")[1].parentElement.parentElement);
// We can also childern
console.log(document.querySelectorAll("li")[1].parentElement.children);
 // NOw going to do add some manually
var button =  document.getElementsByTagName("button")[0]; // getElementByTagName returns an array.
button.addEventListener("click",function(){
    console.log("CLICK!!!")
})
//Now whenever the mouse leaves the button the clck is going to be printed
button.addEventListener("mouseleave",function(){
    console.log("CLICK!!!")
})

// Now going to add the items which when clicked gets added to the list
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
button.addEventListener("click",function(){
    console.log("Click is Working"); // To check wheather everything is working fine
    if(input.value.length > 0)
    {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})