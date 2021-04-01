var nameVar = 'Andrew';
console.log('nameVar', nameVar);

let nameLet = 'Dude';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    var petName = 'Nice';
    return petName;
}

var fullName = "Dude Man";
if (fullName){
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

const multiplier = {
    numbers: [2,4,6],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};

multiplier.multiply().forEach(element => {
    console.log(element);
});