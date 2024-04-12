// // Глобальная и локальная области видимости
//
// // let х= 10
// // if (true) {
// //     let age = 20
// //     var z = 30
// //     console.log(x + age + z)
// // }
// // console.log(x + z);
//
// Лексическая область видимости
// const hummus = function (factor) {
//     const ingredient = function (amount, unit, name) {
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1) {
//             unit += "s";
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
// ingredient (1, "банка", "нута");
// ingredient (0.25, "стакан", "кунжутной пасты");
// ingredient (0.25, "стакан", "лимонного сока");
// ingredient(1, "зубок", "чеснока");
// ingredient (2, "столовые ложки", "оливкового масла");
// ingredient(0.5, "чайной ложки", "кумина");
// };
//
// hummus(2)

// //Пример function expression (анонимная)
// let add = function (a, b) {
//     return a + b;
// }
//
// // Пример function expression (именованная)
// let add = function calculate(a, b) {
//     return a + b;
// }
//
// // Пример function declaration
// function subtract(a, b) {
//     return a - b;
// }

// // Стрелочная функция
// const app1 = (x) => {
//     return x * x
// }
//
// const app2 = x => x * x
//
// const app3 = () => {
//     console.log('Arrow Function')
// }

// Рекурсия
// function calc (a, b) {
//     if (a > 5) {
//         return a - b
//     } else {
//         return 5 * calc(a + 5, b)
//     }
// }
//
// console.log(calc(2, 9))

// function createCounter() {
//     let count = 0;
//     return function() {
//         count += 1;
//         console.log(count);
//     };
// }

// //Первый вариант вызова замыкания
// createCounter()();
// createCounter()();
// createCounter()();
//
// //Второй вариант вызова замыкания
// let test = createCounter()
// test()
// test()
// test()























