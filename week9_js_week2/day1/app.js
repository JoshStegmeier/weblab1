console.log('hello world');

function sayHello(word){
    console.log("hello " + word);
}

sayHello("David");

// Method 1
var o = { };

o.name = "David";
o.address = "123 Main Street";
o.age = 19;
o.age += 5;
o.sayHello = function(){
    console.log("Hello, object method");
};

o.sayHello();


// Method 2

var o2 = {
    name: "David",
    address: "123 Main Street",
    age: 19 + 5,

    sayHello: function(){
        console.log("hello, object method!!");
    },
    fruit: ["Apples", "Oranges", "Kiwi"],
};

o2.sayHello();

o2.age +=5;

o2.name = "Mr. " + o2.name + " Jones";

var myArray = ["dogs", "cats", "birds"];

myArray.forEach(function(element, index){
    console.log(element , index);
});

console.log(myArray);
console.log(o2.fruit);
console.log(o2.fruit[0]);

console.log(o2.name);
console.log(o);
console.log(o2);
