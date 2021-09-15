//Declarar una variable de solo lectura con la palabra clave const
function printManyTimes(str) {
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
  }
  printManyTimes("freeCodeCamp");