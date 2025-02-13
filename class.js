
class Car{
    constructor(name , year)
    {
        this.name = name;
        this.year = year;
    }
    play(){
        console.log(`${this.name} is playing`);
    }
}

const car1 = new Car('Toyota' , 2017);
const car2 = new Car('BMW' , 2020);
const car3 = new Car('Lambergini' , 2017);
car1.play();
car2.play();


class Car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'I have a ' + this.carname;
    }
}

class Model extends Car{
    constructor(brand , mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}





