function SayHello() {
    console.log("Hello");
}
SayHello();

var SayBye = function() {// function can be assigned to varibles in js
    console.log("Bye");
}

SayBye();

var user = { //This is an object
    name: "John",
    age : 34,
    hobby:"Magic",
    isMarried:false,
    spells : ["abrakadabra","shazam","boo"],
    shout : function(){
        console.log("AHHHHHH!");
    }
}

var list = [// last is an array
    {
        username : "andy",
        password : "secret",
    },
    {
        username : "Andrei",
        password : "why",
    }
]

// WE can create empty objects
var empty_obj = {}
// We can later add values to empty objects
empty_obj.name = "andy"

// We can also create null object
var null_obj = null // Here we cannot add values .


