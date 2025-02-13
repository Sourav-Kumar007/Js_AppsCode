function temp() {
  let counter = 0;

  return function () {
    return counter++;
  };
}

const add = temp();

console.dir(add);
add();
console.dir(add);
add();
console.dir(add);
add();
console.log(add());
console.log(add());

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}

var z = x();
console.log(z);
z();

function z() {
    var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a);
    }
    a = 100;
    return y;
  }
}
