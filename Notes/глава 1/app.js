// Примеры математических операторов
let a = 10;
let b = 5;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 
console.log(a ** b); 


let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); 
console.log(isTrue || isFalse); 
console.log(isTrue || isFalse || isTrue);

//Пример специальных чисел
console.log(NaN);
console.log(Infinity);
console.log(-Infinity);
//---------------------------------------------------------------------------------------------


// Примеры строковых форматов
let name = 'Вася';
let age = 25;

console.log('Меня зовут ' + name + ', мне'+ age +'лет');
console.log("Меня зовут ' + name + ', мне'+ age +'лет");
console.log(`Меня зовут ${name}, мне ${age} лет`);

// Пример экранирования символов в строке
console.log('Первая строка\nВторая строка');
console.log('Первая строка\rВторая строка');
console.log('Первая строка\tВторая строка');
console.log('Первая строка\r\nВторая строка');

// Пример конкатенации строк
let str1 = 'Первая строка';
let str2 = 'Вторая строка';

console.log(str1 + str2);
console.log(str1.concat(str2));
//---------------------------------------------------------------------------------------------


// Унарный оператор typeof (унарный)
let a = 10;
let b = '10';
let c = true;
let d = null;
let e = undefined;
let f = Symbol();

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);


// оперторы сравнения
console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a != b);
console.log(a <= b);
console.log(a >= b);
console.log(a === b);
console.log(a !== b);


// Логические операторы
console.log(!a);
console.log(!!a);
console.log(!a && !a);
console.log(!a || !a);
console.log(!a || !a || !a);
console.log(!a && !a || !a);
console.log(!a || !a && !a);
console.log(!a && !a && !a);
console.log(!a || !a || !a || !a);
console.log(!a || !a || !a || !a || !a);
console.log(!a || !a || !a || !a || !a || !a);
console.log(!a || !a &&!a ||!a);


// Тернарный оператор (троичный)
let result = (a > b) ? 'a больше b' : 'a меньше b';
console.log(result);
//---------------------------------------------------------------------------------------------


// Пустые значения null и undefined
let a = null;
let b = undefined;
// ! null == undefined
// ! null === 0

console.log(a);
console.log(b);