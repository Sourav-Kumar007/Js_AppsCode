
const myset = new Set();
myset.add('a');
myset.add(1); 

myset.add('c');
myset.add('a');
myset.add('r');
console.log(myset);

let text = '';
myset.forEach(
    function(value)
    {
        console.log();
        text += value;
    }
);

console.log(text);

for(let x of myset)
{
    console.log(x);
    console.log('heell');
}