// function one (name, location) {
//   console.log(name, location);
// }
//
// function two () {
//   console.log('Args', arguments);
//   one.apply(undefined, arguments);
// }
//
// two('Casey', 'Lexington');
// // two.apply(undefined, ['Jen', 'LA']);
//
// var add = (a, b) => {
//   return a + b;
// };
//
var callAndLog = (func) => {
  return function() {
    var res = func.apply(undefined, arguments);
    console.log('Result is '+ res);
    return res;
  };
};
//
// var addAndLog = callAndLog(add);
//
// console.log(add(99, 1));
//
//
// // function, takes a function, returns a function
// console.log(addAndLog(99,33));


// square: take 1 number, return square result
// squareAndLog
var square = (num) => num * num;
var squareAndLog = callAndLog(square);

squareAndLog(3);
