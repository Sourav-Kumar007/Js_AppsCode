
function display(sum)
{
    console.log(`The sum is : ${sum}`);
}

function myFun(a , b , callback)
{
    let sum = a + b;
    callback(sum);
} 

myFun(5 , 6 , display);

const myNumbers = [4 , 1 , -20 , -7 , 5 , 9 , -6]; 
const posNumbers = removeNeg(myNumbers , (x) => x >= 0);

function removeNeg(numbers , callback){
    const myArray = [];
    for(const x of numbers)
    {
        if(callback(x))
        {
            myArray.push(x);
        }
    }
    return myArray;
}

for(let x of posNumbers)
{
    console.log(x);
}

