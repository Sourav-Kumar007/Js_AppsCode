
// let promise = new Promise(function(resolve , reject){
//     console.log('i am a promise');
    
//     resolve(123);
// })

// function getData(dataId , getNextData){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log('data' , dataId);
//             resolve('success');
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         } , 5000)
//     });
// }


function asyncFunc(){
    return new Promise( (resolve , reject) => {
        setTimeout( ()=> {
            console.log('some data1');
            resolve('success');
        },4000 );
    } );
}

function asyncFunc1(){
    return new Promise( (resolve , reject) => {
        setTimeout( ()=> {
            console.log('some data1');
            resolve('success');
        },4000 );
    } );
}

console.log('fetching data1');
let p1 = asyncFunc();
p1.then( (res) => {
    console.log(res);
})

console.log('fetching data1');
let p2 = asyncFunc1();
p2.then( (res) => {
    console.log(res);
})



 