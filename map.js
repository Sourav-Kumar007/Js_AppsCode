
const myMap = new Map();
myMap.set('apple' , 10);
myMap.set(500 , 300);
myMap.set('siju' , 'sourav');

// console.log(myMap['apple']);
// console.log(myMap[500]);
// this is the wrong system of accessing element 

console.log('hello'); 

console.log(myMap.get('apple'));
console.log(myMap.get(500));
console.log(myMap.get('siju'));

console.log('----------------------');

for(const [key , value] of myMap)
{
    console.log(key , value);
}

console.log('----------------------');

myMap.forEach(
    function(key , value)
    {
        console.log(key , value);
    }
);

// best practice for iterating map is using for_of and forEach loop 




