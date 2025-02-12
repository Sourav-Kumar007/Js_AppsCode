

// case-insensitive 
// syntax : /pattern/modifiers 

let text = 'Visit W3Schools';
let n = text.search(/w3schools/i);
console.log(n); 
// OUTPUT 6

n = text.search(/W3SCHOOLS/i);
console.log(n);
// OUTPUT 6

n = text.search(/W4/i);
console.log(n);
// OUTPUT -1 



