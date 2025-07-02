/*
TODO: Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
TODO: значення яких буде передано до параметра dimensions у вигляді рядка.
TODO: Значення гарантовано розділені пробілом.
*/

// const getRectArea = function (dimensions) {
//   const sidesArr = dimensions.split(' ');

//   return Number(sidesArr[0]) * Number(sidesArr[1]);
// };

// alert(getRectArea(prompt('Введіть сторони прямокутника через пробіл'))); // 88
// alert(getRectArea('18 11')); // 198
// alert(getRectArea('8 21')); // 168

/*
TODO: Напиши функцію logItems(items), яка отримує масив та використовує цикл,
TODO: який для кожного елемента масиву буде виводити в консоль повідомлення у
TODO: форматі <номер елемента> - <значення елемента>. Нумерація елементів
TODO: повинна починатися з 1.
TODO:
TODO: Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
TODO: індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/

// const logItems = function (items) {
//   console.log('items:', items);

//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
TODO: Напиши функцію printInfo(names, phones) яка виводить
TODO: у консоль ім'я та телефонний номер користувача. У параметри
TODO: names та phones будуть передані рядки імен та телефонних номерів,
TODO: розділені комами. Порядковий номер імен та телефонів у рядках
TODO: вказують на відповідність. Кількість імен та телефонів
TODO: гарантовано однакова.
*/

// const printInfo = function (names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');

//   console.log('names:', names);
//   console.log('phones:', phones);

//   for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i]} - ${phones[i]}`);
//   }
// };

// printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');
// printInfo('Marion,Eugenia,Dean,Jesus', '8577702524,9125002644,2028646420,9364154932');

/*
TODO: Напиши функцію formatTime(totalMinutes) яка переведе значення
TODO: totalMinutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.
*/

// const formatTime = function (totalMinutes) {
//   let hours = Math.floor(totalMinutes / 60);
//   let minutes = totalMinutes % 60;

//   return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
// };

// console.log(formatTime(120)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

/*
TODO: Напишіть функції для роботи з колекцією навчальних курсів courses:
TODO: addCourse(name) - додає курс в кінець колекції
TODO: removeCourse(name) - видаляє курс з колекції
TODO: updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// console.log('courses:', courses);

// const addCourse = function (courseName) {
//   if (courses.includes(courseName)) {
//     alert(`У вас вже є курс ${courseName}`);
//   } else {
//     courses.push(courseName);
//   }
// };

// const removeCourse = function (courseName) {
//   const idxOfCourse = courses.indexOf(courseName);

//   if (idxOfCourse === -1) {
//     alert(`Курс ${courseName} не знайдено!`);
//   } else {
//     courses.splice(idxOfCourse, 1);
//   }
// };

// const updateCourse = function (oldCourseName, newCourseName) {
//   const idxOfCourse = courses.indexOf(oldCourseName);

//   courses.splice(idxOfCourse, 1, newCourseName);
// };

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('React'); // 'Курс з такою назвою не знайдено'

// updateCourse('JavaScript', 'ECMAScript');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// TODO: Напишіть функцію countVowels(str), яка рахує кількість голосних літер (a, e, i, o, u) у рядку.

// const countVowels = function (str) {
//   const vowels = 'aeiouAEIOU';
//   let counter = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       counter++;
//     }
//   }

//   return counter;
// };

// console.log(countVowels('Hello World!')); // 3
// console.log(countVowels('I love JavaScript!')); // 6
// console.log(countVowels('JavaScript is a lightweight interpreted programming language.')); // 19

/*
TODO: Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
TODO: В параметр letter будуть передавати рядок із однією літерою.
TODO: Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
TODO: Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
TODO: В параметр str будуть передавати рядок.
*/

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba
