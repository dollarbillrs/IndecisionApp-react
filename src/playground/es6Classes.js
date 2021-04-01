
class Person {
    constructor(name = "Unknown", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi! I am ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} ${this.age === 1 ? "year" : "years"} old.`;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLoc){
        super(name, age);
        this.homeLoc = homeLoc;
    }
    getGreeting(){
        let desc = super.getGreeting();
        if (this.homeLoc){
            desc += ` I am visiting from ${this.homeLoc}`;
        }
        return desc;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let desc = super.getDescription();
        if (this.hasMajor()){
            desc +=  ` Major = ${this.major}.`;
        } 
        return desc;
    }
}

const oneOfNine = new Traveler("One of Nine", 666, "Borg land");
const twoOfNine = new Traveler();
console.log(oneOfNine.getGreeting());
console.log(twoOfNine.getGreeting());

const me = new Student("Nick Reid", 9, 'Hunting');
console.log(me.getDescription());
const other = new Person();
console.log(other.getDescription());
const kid = new Student("yy", 1, "Complaining");
console.log(kid.getDescription());