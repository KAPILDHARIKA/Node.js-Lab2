 function checkobject(...theArgs) {
     theArgs.forEach(element => {
         if (typeof element != 'object') { throw 'Argument is not an object' }
     });

 }


 function extend(...theArgs) {
     let someArray = [];
     if (theArgs.length < 1) { throw 'Legth is less then 2' }
     checkobject(theArgs);
     return theArgs.reduce(((r, c) =>
         Object.assign(c, r)), {})
 }




 function smush(...theArgs) {
     checkobject(theArgs);
     if (theArgs.length < 1) { throw 'Legth is less then 2' }
     return theArgs.reduce(((r, c) =>
         Object.assign(r, c)), {})
 }



 function mapValues(Object, func) {
     if (typeof Object != "object") { throw 'Not an Object' }
     if (typeof func != 'function') { throw 'Not a function'; } else {
         for (i in Object) {
             Object[i] = func(Object[i]);
         }
         return Object
     }
 }
 module.exports = { Name: "Dharika kapil", CWID: "10453441", extend, smush, mapValues };