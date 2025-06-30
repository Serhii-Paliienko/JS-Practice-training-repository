// const fullName = 'Serhii Paliienko';
// const fullNameCopy = fullName.slice(3, 8);

// console.log('fullName:', fullName);
// console.log('fullNameCopy:', fullNameCopy);

// !
// const userEmail = 'test@GMAIL.com';

// console.log('userEmail:', userEmail);
// console.log('userEmailtoLowerCase:', userEmail.toLowerCase());

// !
// const userEmail = 'test@gmail.com';
// const isEmailValid = userEmail.includes('@');
// const isEmailValid = userEmail.startsWith('test');
// const isEmailValid = userEmail.endsWith('com');
// const isEmailValid = userEmail.endsWith('us');

// console.log('userEmail:', userEmail);
// console.log(isEmailValid);

// !

// const userEmail = '  test@gmailtest.com  ';
// const isEmailValid = userEmail.indexOf('@');
// const isEmailValid = userEmail.lastIndexOf('test');
// const isEmailValid = userEmail.trim();

// console.log('userEmail:', userEmail);
// console.log(isEmailValid);

// !
// let hours = '1';
// let minutes = '7';
// let seconds = '24';

// console.log(`${hours}:${minutes}:${seconds}`);

// hours = hours.padStart(2, 0);
// minutes = minutes.padStart(2, 0);
// seconds = seconds.padStart(2, 0);

// console.log(`${hours}:${minutes}:${seconds}`);

// hours = hours.padEnd(3, 0);
// seconds = seconds.padEnd(3, 0);
// minutes = minutes.padEnd(3, 0);

// console.log(`${hours}:${minutes}:${seconds}`);

// ???
// !
// const answer = 'ECMAScript';

// const answer = 'ecmascript';

// let userInput = prompt('Яка "офіційна" назва JavaScript?') || '';

// userInput = userInput.toLowerCase().trim();

// if (userInput.toLowerCase().trim() === answer) {
//   alert('Вірно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

// switch (userInput) {
//   case answer: {
//     alert('Вірно!');

//     break;
//   }

//   default: {
//     alert('Не знаєте? ECMAScript!');
//   }
// }

// !

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// if (!link.endsWith('/')) {
//   link += '/';
// }

// console.log(link);

// ?
// !
// let a = 10;
// console.log('a:', a);

// ++a;

// console.log('a:', a);

// !
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// !
// let min = 5;
// let max = 201;

// for (let i = min; i <= max; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// !
// const min = 1;
// const max = 10;

// let total = 0;
// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }

// console.log(total);

// !
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
// }

// !
// let firstEvenNumber = 0;

// for (let i = 100; i <= 200; i++) {
//   if (i % 7 === 0) {
// console.log(i);
//     firstEvenNumber = i;
//     break;
//   }
// }
// console.log(firstEvenNumber);

// !

// function isPalindrome(str) {
//   console.log(str);
//   let reversedStr = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return str.toLowerCase() === reversedStr.toLowerCase();
// }

// console.log(isPalindrome('level'));
// console.log(isPalindrome('cat'));
// console.log(isPalindrome('madam'));

// const firstName = 'Serhii';

// console.log(firstName);

// for (let i = firstName.length - 1; i >= 0; i--) {
//   console.log(firstName[i]);
// }
