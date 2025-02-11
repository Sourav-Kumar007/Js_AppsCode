const person = { firstName: "John", lastName: "Doe", age: 50 ,
    sleep : function()
    {
        this.eat();
        console.log('John is sleeping');
    },
    eat : function()
    {
        console.log('he is like a mohish');
    }
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person);
console.log(person.sleep()); 
person.haha = 'hei';
console.log(person);
person.haha = 5;
console.log(person.haha);
console.log(typeof(person.haha)); 

delete person.haha;
console.log(person);
console.log(person.haha);

let a = "hello";
console.log(a);

console.log('Showing object by Loop');

let text;
for(let x in person)
{
    console.log(person[x] , typeof person[x]);
    // ekhane x likhle amra object er key pabo
    // person[x] dile value pabo
    // person.x dile kaj korbe na 
}



