// Inheritance - ke thua
// Encapsulation
// Polymorphism
// Abstraction

class Car {
    name;
    speed;
    brand;
    color;
    constructor(name, speed, brand, color) {
        this.name = name;
        this.speed = speed;
        this.brand = brand;
        this.color = color;
    }

    drive() {
        console.log(this.name + " is driving at " + this.speed + " km/h");
    }

    honk = () => {
        console.log(this.name + " is honking");
    }

    paint = (newColor) => {
        console.log("Current color: " + this.color + ". Changing to " + newColor);
        this.color = newColor;
    }
}

const fadil = new Car("Fadil", 100, "VinFast", "Red")
const luxsa = new Car("LuxSA", 120, "VinFast", "Red")

fadil.drive();
luxsa.drive();
fadil.honk();

fadil.paint("blue");
luxsa.paint("blue")