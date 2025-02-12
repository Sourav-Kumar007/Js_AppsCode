
if(true)
{
    var y = 80;
    console.log(y);
}
console.log(y);

function A()
{
    var x = 10;
    console.log(x);
}

// console.log(x);
// we cannot use var variable outside the function scope
// var , let , const are type of local scope 

A();

function B(a , b){
    console.log(typeof a , typeof b)
    console.log(a + b);
}
B(1 , 2 );

const person1 ={
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName : 'John',
    lastName : 'Doe'
} 

console.log(person1.fullName.call(person2)); 

const sum = function(){
    return 10;
}

function sum1()
{
    return 11;
}

console.log(sum());
console.log(sum1());




