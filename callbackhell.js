// callbackhell is one callback inside another call back inside another call back........ 
// callbacks are super powerfull way of handiling async operations in javascript 
// issues with callbacks
// 
// 1) callback hell (code becomes unmaintainable) 2) inversion of control 
 console.log("hello");

setTimeout(function(){
      console.log("Swaroop");
}, 3000) 

 console.log("How are you");

const animateAll = (animate) => {
      setTimeout(() => {
            animate(words[0]);
            setTimeout(() => {
                  animate(words[1]);
                  setTimeout(() => {
                        animate(words[2]);
                  }, 1000)
            }, 1000)
      }, 1000)
}
