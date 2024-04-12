
// // 1.1 Напишите функцию range, которая принимает два аргумента, start и end, и возвращает массив,
// // содержащий все числа от start до end включительно.
//
function range (start, end) {
    const arrayNumbers = []
    for (let i = start; i <= end; i++) {
        arrayNumbers.push(i)
    }
    return arrayNumbers
}

console.log(range(1, 4))


// // 1.2 Напишите функцию sum, которая принимает массив чисел и возвращает их сумму.
//
function sum (array) {
    let sumNumber = 0
    for (let i = 0; i < array.length; i++) {
        sumNumber += array[i]
    }
    return sumNumber
}

console.log(sum(range(1, 4)))


//1.3 В качестве дополнительного задания: измените функцию range так, чтобы она принимала необязательный третий
//аргумент, который указывал бы значение шага, используемое при построении массива. Если шаг не задан, элементы
//увеличиваются на единицу. Убедитесь, что функция также работает и с отрицательными значениями шага.
//
function range (start, end, step) {
    const arrayNumbers = []
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arrayNumbers.push(i)
        }
    } else if (step < 0) {
        for (let i = end; i >= start; i += step) {
            arrayNumbers.push(i)
        }
    }
    return arrayNumbers
}

console.log(range(1, 10, -1))


//2.1 функция, reverseArray, принимает массив в качестве аргумента и создает новый массив, содержащий те же элементы
//в обратном порядке.

const inputArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
function reverseArray (array) {
    return array.reverse()
}

console.log(reverseArray(inputArray))


//2.1 reverseArrayinPlace, делает то же, что и метод reverse: преобразовывает массив, заданный в качестве аргумента,
//меняя порядок следования его элементов на обратный. Не используйте для этого стандартный метод reverse.


const testArray = ['a', 'b', 'c', 'd']
function reverseArrayinPlace (array) {
    const inputArray = []
    for (let i = 0; i < array.length; i++) {
        inputArray.unshift(i)
        for (array of inputArray) {
            console.log(array)
        }
    }
}

console.log(reverseArrayinPlace(testArray))


const testArray = ['a', 'b', 'c', 'd']


function reverseArrayInPlace (arrays) {
    const addArray = []
    for (let i = 0; i < arrays.length; i++) {
        addArray.unshift(i)
        console.log(addArray[i])
    }
}

reverseArrayInPlace(testArray)


//3.1
function createNode(value, rest = null) {
    return { value, rest };
}

let list = createNode(1);
list = createNode(2, list);
list = createNode(3, list);

console.log(list);
