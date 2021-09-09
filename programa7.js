var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
myArray[3];
myArray[3][0];
myArray[3][0][2] = 8;
var myData = myArray[3][0][2];
console.log(myData);