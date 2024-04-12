// // Пример создания массива
// const array = [1, 2, 'hi']

let journal = []

function addEntry(events, squirrel) {
    journal.push({events, squirrel})
}

addEntry()
console.log(journal)
addEntry()
console.log(journal)
