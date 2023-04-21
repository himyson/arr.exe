//{ brand: 'Honda', price; 13000 }
//{ brand: 'Rolls-Royce', price; 120000 }
let car1 = {
    brand: "Honda",
    price: 13000
}
let car2 = {
    brand: "Rolls-Royce",
    price: 120000
}    
if (car1.price > 100000){
    car1.expensive = true
}else{
    car1.cheap = true
}
if (car2.price > 100000){
    car2.expensive = true
}else{
    car2.cheap = true
}
console.log(car1, car2);


// -------------------------------------------------------------------------------------------------------

let names = ['Alex', 'Jane', 'Bob', 'Gustavo']

let dead_sad  = {
p1: "Richard",
p2: "King",
p3: "Saytama",
p4: "Fred",
p5: "Diaz",
p6: "George",
p7: "Billy Harington"}

let a = Object.values(dead_sad)
names = names.concat(a)
console.log(names.sort());

// -------------------------------------------------------------------------------------------------------
// Создайте функцию "mult", в которой будут умножаться значения свойств x, y, z переданного объекта
// Результат умножения верните из функции

const objectWithNumbers = {
    x: 5,
    y: 20,
    z: 3
}

const mult = objectWithNumbers.x * objectWithNumbers.y * objectWithNumbers.z
console.log(mult);

// function mult() {
//     x * y * z 
// }
// console.log(mult);
