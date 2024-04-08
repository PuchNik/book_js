// Примеры переменных
var name = 'Вася';
var age = 25;
var isHuman = true;
var height = 170;
var weight = 70;
var eyesColor = 'blue';
var hairColor = 'brown';
var favoriteFood = ['pizza', 'chicken'];
var favoriteMovie = {
  title: 'The Matrix',
  year: 1999
};

// Пример prompt
var name = prompt('Как вас зовут?');
alert('Привет, ' + name + '!');


// Пример console.log()
console.log('Привет, ' + name + '!');


// Пример условного выполнения
if (age >= 18) {
  console.log('Вы совершеннолетний');
}


// Пример else
if (age < 18) {
  console.log('Вы не совершеннолетний');
} else {
    console.log('Вы совершеннолетний');
}


// Примеры с while
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}


// Пример с do while
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);


// Пример с for
for (var i = 0; i < 10; i++) {
  console.log(i);
}


// Пример с breake
var i = 0;
while (i < 10) {
  console.log(i);
  if (i === 5) {
    break;
  }
  i++;
}


// Пример с switch case и default
var day = 1;
switch (day) {
  case 1:
    console.log('Понедельник');
    break;
  case 2:
    console.log('Вторник');
    break;
  default:
  сопsоlе.lоg("Неизвестный день недели!");
  break;
}


// Однострочный комментарий 

/* Многостройчный
комментарий*/


