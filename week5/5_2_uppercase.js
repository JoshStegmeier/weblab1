var a = upperCaseFirstLetters("something to uppercase"); // "Something to Uppercase"
var b = upperCaseFirstLetters("output"); // "Output"
var c = upperCaseFirstLetters("nathan t white"); // "Nathan T White"
var d = upperCaseFirstLetters("       hello there     "); // "Hello There"

console.log([a,b,c,d].join("\n"));

function upperCaseFirstLetters(aStr){
    var cleaned = aStr.trim();
    var words = cleaned.split(" ");
    var output = [];
    for(var i = 0; i < words.length; i++) {
        var word = words[i];
        var upperCased = word.charAt(0).toUpperCase() + word.substring(1);
        output.push(upperCased);
    }
    // console.log(output.join(" "));
    return output.join(" ");
}
