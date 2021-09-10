//Comparaciones con el operador lógico Or
function testLogicalOr(val) {
    
    if (val < 10 ||val > 20) {
      return "Outside";
    }
  
   {
      return "Inside";
    }
  
    return "Inside";
  }
  
  testLogicalOr(15);