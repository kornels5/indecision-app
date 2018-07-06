// function square (x) {
//     return x * x;
// };

// console.log(square(8));


// // const squareArrow = a => {
// //     return a * a;
// // };

// const squareArrow = a =>  a * a;

// console.log(squareArrow(8));

// const getFirstName = (fullname) => {
//     return fullname.split(' ')[0];
// };

// const getFirstName = fullname => fullname.split(' ')[0];

// console.log(getFirstName('Mike Smith'));

//arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//     //console.log(arguments);
//     return a + b;
// };

//console.log(add(55, 1, 1000));

//this keyword - no longer bound

const user = {
    name: 'Kornel',
    cities: ['Cracow', 'Chelm', 'Wroclaw'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 3,
    multiply () {
        return this.numbers.map(number => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
