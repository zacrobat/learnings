//how to determine if a variable is an array - since typof returns object
//http://www.w3schools.com/js/js_arrays.asp
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits); // returns object even though it's an array
console.log(Array.isArray(fruits)); // returns true - but only ECMAScript 5 and up
//for older browsers:
function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray(fruits)); // returns true

//objects and arrays from Isa's D3 course http://isakiko.github.io/D3-visualising-data/06-json.html
// also from http://www.w3schools.com/js/js_object_definition.asp
var listOfNnumbers = [30, 2, 5]; // array
console.log(listOfNnumbers);
console.log(listOfNnumbers[2]); // 5
var text = 'D3.js is sweet.';
console.log(text);
// create an object using an object literal:
var studioObjectLiteral = {
  name: 'hotbox',
  beatbox: '808',
  bass: 'moog',
  samples: 'sp-1200',
};
//create an object using an object constructor:
function studioObjectConstructor(studioname, beatbox, bass, samples) {
  this.studioname = studioname;
  this.beatbox = beatbox;
  this.bass = bass;
  this.samples = samples;
}
console.log(new studioObjectConstructor());
// Once you have an object constructor, you can create new objects of the same type:
console.log(new studioObjectConstructor('southsound', '606', 'Prophet', 'MPC'));
var studioObject = {
  name: 'hotbox',
  beatbox: '808',
  bass: 'moog',
  samples: 'sp-1200',
};
console.log(studioObject);
studioObject.keys = 'nord';
console.log(studioObject);
var studioList = [studioObject];
console.log(studioList);
studioList.push({
  name: 'yotown',
  beatbox: 'er-1',
  bass: 'massive',
  samples: "volca sample"
});
console.log(studioList);
studioList.push({
  name: 'lablab'
});
console.log(studioList);

/* How to use the ternary operator:
http://stackoverflow.com/questions/6259982/how-to-use-the-ternary-operator-in-javascript
This is a one-line shorthand for an if-then statement. It is called a ternary operator or a conditional operator.

Here is an example of code that could be shortened with the conditional operator:
*/
if(userIsYoungerThan21) {
  serveGrapeJuice();
}
else {
  serveWine();
}

// This can be shortened with the ?: like so:
userIsYoungerThan21 ? serveGrapeJuice() : serveWine();

// In Javascript conditional operator can evaluate to an expression, not just a statement:
var userType = userIsYoungerThan18 ? "Minor" : "Adult";
serveDrink(userIsYoungerThan21 ? "Grape Juice" : "Wine");

// They can even be chained:
userIsYoungerThan4 ? serveMilk() : userIsYoungerThan21 ? serveGrapeJuice() : serveWine();

// Be careful, though, or you will end up with convoluted code like this:
var k = a ? (b ? (c ? d : e) : (d ? e : f)) : f ? (g ? h : i) : j;

//Return a random number between 1 and 10:
Math.floor((Math.random() * 10) + 1);

console.log('hello replace using regexp');
// regex example - remove the 's' from thend of a string.
// http://www.w3schools.com/jsref/jsref_replace.asp
// http://www.w3schools.com/jsref/jsref_obj_regexp.asp
var string = "boomdrums";
console.log(string);
var removeS = function(input) {
  var changeIt = input.replace(/s$/,""); // remove the s
  return changeIt;
};
console.log(removeS(string));
