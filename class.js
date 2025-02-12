
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

