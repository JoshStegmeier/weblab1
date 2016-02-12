// alert("Hello");

var message = "Hello";

var x = 27;
var temps = [14, 32, 36, 40];
var person = {
    first: "Josh",
    last: "Stegmeier",
    age: 65,
    address: {
        city: "Fort Collins",
        zip: 80521
    },
//    greeting: function greeting(){

//    }
    greeting: greeting
};

//person.greeting();

//if(person.age !== 21)
var name = "nate";
var number = 0;


//if(!name){

//}

greeting("Nate");


function greeting(name) {
    console.log("Hello");
}

//if(person.address.zip === 80521) {
//if(person.age >= 21 && person.age < 65) {
//    console.log("Hello " + person.first);
if(person.age >= 21 && person.age < 65) {
    greeting(person);
} else if (person.age >= 65) {
    console.log("discount time");
}
  else {
     console.log("You must leave");
 }

/*
  Function: greeting

  - Creates a simple greeting for a user

  Arguments:

   name: String

*/

function greeting(name) {
    console.log("Hello " + name);
}

console.log(person.address.city);
