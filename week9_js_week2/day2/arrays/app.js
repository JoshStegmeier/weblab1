var fruits = ["apple","kiwi","oranges","strawberry","mango","kumquat"];
var moreFruits = ["raspberry","pineapple","grape"];

var otherFruit = ["Dragon Fruit","Plum"];

var allFruits = fruits.concat(moreFruits);

otherFruit.forEach(function(fruit,i){
    var newLength = allFruits.push(fruit);
});

// console.log(fruits.concat(moreFruits));
console.log(allFruits.sort().reverse());

// allFruits.push(otherFruit);
//
// console.log(fruits.length);
//
// // Alternative Route
//
// console.log(getTheLength(fruits));
//
// function getTheLength(a){
//     return a.length;
// }
//
// // Splice
//
// console.log(fruits.splice(2,3));
//
// //
