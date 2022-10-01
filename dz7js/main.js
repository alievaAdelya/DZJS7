
class transport {
    constructor(title,  color, model, price) {
        this.title = title;
        this.color = color;
        this.model = model;
        this.price = price
    }
}
class Car extends transport {
    constructor(title, color, model, price){
        super(title, color, model, price);
    }
}

const cabrio = new Car('cabrio', 'red', 'mercedes', '6770 000 rub' )
console.log(cabrio);

class vertalet extends transport {
    constructor(title, color, type, price){
        super(title, color, type, price);
    }
}

const MI = new vertalet ('mi-8', 'black', 'helicopter', '$17,5 milliom' )
console.log(MI);


