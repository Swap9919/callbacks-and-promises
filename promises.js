// promise is nothing but some empty object with some data value in it 
// the API will return us a promise(nothing but an empty object) and the program will go on executing and later on at certain point promise fills the empty object with our desired value at what ever async time it takes


// promise is an object which represents the eventual completion of an async operation.

const cart = [ "shoes", "pants", "watches"];

createOrder(cart, function (orderID) {
      proceedToPayment(orderID);
});

//

const promise = createOrder(cart);

promise.then(function (orderID) {
      proceedToPayment(orderID);
});
