/*В предыдущей главе была представлена стандартная функция Math. min, которая
возвращает наименьший из ее аргументов. Теперь мы можем сами создать нечто подобное.
Напишите функцию min, которая принимает два аргумента и возвращает их минимум.*/

function min (var_1, var_2) {
    if (var_1 < var_2) {
        console.log(var_1)
    } else {
        console.log(var_2)
    }
}

min(4, 2)


function isEven (n) {
    if (n < 0) {
        return Error
    } else if (n === 0) {
        return ('Chet')
    } else if (n === 1) {
        return ('Nechet')
    } else if (n > 1) {
        return isEven(n - 2)
    }
}

console.log(isEven(-4))


function countBs (word) {
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'B') {
            count++
        }
    }
    return count
}

console.log(countBs('AkaB'))


function countChar (word, example_char) {
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === example_char) {
            count++
        }
    }
    return count
}

console.log(countChar('Nikita', 'N'))

// // Перебор массива методом for
const fruits = ['apple', 'banana', 'cherry']
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// // Перебор массива методом for of
//
const fruits = ['apple', 'banana', 'cherry']
for (fruit of fruits) {
    console.log(fruit)
}

// Пример кода с indexOf
let fruits = ['apple', 'banana', 'cherry', 'date'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits.indexOf(i))
}
let index = fruits.indexOf('cherry');

console.log(index);


// //Пример формата JSON

let string = JSON.stringify(
    {
        squirrel: false,
        events: ['Sunday']
    },)

console.log(string)
console.log(JSON.parse(string))


