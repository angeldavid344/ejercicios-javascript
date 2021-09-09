//Manipular matrices con shift ()
var myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray = myArray.shift(["John"]);
console.log(removedFromMyArray);

//Manipular matrices con unshift ()
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log(myArray);