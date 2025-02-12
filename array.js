
const fruits = [];
fruits.push('hello');
console.log(fruits); 
fruits.push(5);
for(let x in fruits)
{
   // console.log(fruits[x]);
}

          // array iteration 

          // Array.forEach 

const numbers = [45 , 4 , 9 , 16 , 25];


function myFun(value , index , array)
{
    console.log(value);
    console.log(index);
}

numbers.forEach(myFun);

const number1 = [45,4,9,16,25];
const number2 = number1.map(myFun1);

function myFun1(value , index , array)
{
    return value * 2;
}
console.log(number2); 

const over18 = numbers.filter(myFun2);

function myFun2(value){
    return value > 18;
}
console.log(over18);


let sum = numbers.reduce(myFun3);

function myFun3(total, value , index, array)
{
    return total + value;
}
console.log(sum);

