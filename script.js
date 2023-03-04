//
// // Dz MINIMUM
// // Num1__Num1__Num1__Num1__Num1__Num1__Num1__Num1__Num1__
// // 1.Звиайна функція
// function nameFunction (a, b) {
//
// }
// // 2. Анонімна функція (без назви)
// let nameFunction2 = function (a, b) {
//
// }
// // 3. (фунція без певної кількості аргументів
// let nameFunction3 = function (...idkHowManyArguments) {
//     console.log(idkHowManyArguments);
// }
// nameFunction3 (1, 2, 3, 4, 5, 6, 7);
// // 4. Анонімна функція яка повертає вираз
// let a = function(b){
// console.log(b);
// return b;
// }
// a;
//
//     // 5. Анонімна функція, яка визиває сама себе
// (function(j){
//     console.log(j);
// }())
//
//
// // 6 Стрілочні функції з {} та без. Коли без то можна писати без return.
//
// let hohoho = () => "we are anonymous" ;
// console.log(hohoho());
// let hohoho2 = () => { return "we are anonymous2"} ;


// Num2__Num2__Num2__Num2__Num2__Num2__Num2__NumNum2__Num2__Num2__Num2__Num2__Num2__Num2__NumNum2__Num2__Num2__Num2__Num2__Num2__Num2__Num
// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function TwoTask() {
    let input = prompt("Завдання 1.Введіть аргументи через кому а я виведу їх кількість в консоль");
    let arg = input.split(",");
    console.log("Завдання 1. Ви ввели таку кількість аргументів: "+arg.length);
}
TwoTask();


// Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__Num3__
// Напиши функцію, яка приймає 2 числа і повертає :
//     -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

function ThreeTask(oneA,twoB) {

    if (oneA > twoB) return 1;
    if (oneA < twoB) return -1;
    if (oneA === twoB) return 0;
}
let input = prompt("Завдання 2.Введіть перше число і друге число через кому а я виведу 1 якщо перше число більше за 2, 2 якщо навпаки і 0 якщо вони дорівнюють один одному");
let [oneA, twoB] = input.split(",");
console.log("Завдання 2. Якщо 1 то перша цифра більша за 2. Якщо 2 то друга цифра більше за пергу.Якщо 0 то вони рівні. Відповідь = "+ ThreeTask(oneA,twoB));


// Num4__Num4__Num4__Num4__Num4__Num4__Num4__Num
// Факторіал числа


function FourTask(a) {
    let result = 1;
    for (let i = 1; i < a; i++) {
        result = i * a;
    }
    return result;
}
let a = prompt("Завдання 3.Введіть число а я виведу в коносль його факторіал")
console.log("Завдання 3. Факторіал числа "+ a +" = " + FourTask(a));

// Num5__Num5__Num5__Num5__Num5__Num5__Num5__Num5__Num5__Num5__Num5__

function FiveTask(First,Second,Three) {
    console.log("Завдання 4. Ви ввели цифру "+ First+","+Second+", та "+Three+ " і отримали число " + First+Second+Three);
}
let input2 = prompt("Завдання 4.Введіть 3 числа через кому а я виведу їх як одне число")
let [First,Second,Three] = input2.split(",")
FiveTask(First,Second,Three);

// Num6__Num6__Num6__Num6__Num6__Num6__Num6__Num6__Num6__Num6__Num6__Num6__


function cube(j, s = j) {
    let many = arguments.length;
    let result = j * s;
    console.log("Завдання 5. Ви ввели таку кількість аргументів"+many+ "та отримали "+ result);
}
let input3 = prompt("Завдання 5. Введіть 2 числа і я скажу площу прямокутника з цими розмірами, або 1 і я скажу площу " +
    "квадрата")
let [j,s] = input3.split(",")
cube(j, s);