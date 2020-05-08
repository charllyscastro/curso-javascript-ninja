(function(){
  'use strict';
  function sum(){
    return Array.prototype.reduce.call(arguments, function(accumuleted, actual){
        return accumuleted + actual;
    });
  }

  console.log(sum(1,2,3,4));


})();
