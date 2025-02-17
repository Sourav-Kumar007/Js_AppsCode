function api(dataId) {
    return new Promise((resolve, reject) => {  // Fixed arrow function syntax
        setTimeout(() => {
            console.log('data', dataId);
            resolve('success');
        }, 2000);
    });
}

async function getAllData() {
    await api(1);  // Call api instead of getData
    await api(2);
    await api(3);
}

getAllData();  // Call the function to execute

 
