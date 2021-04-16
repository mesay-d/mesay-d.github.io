/**
 * 
 *
importance: 5
Add to the prototype of all functions the method defer(ms),
 that runs the function after ms milliseconds.

After you do it, such code should work:} ms 
 */

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    console.log("Hello!");
  }
  
  f.defer(1000)
Function.prototype.defer=function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(1000)(1, 2); // shows 3 after 1 second