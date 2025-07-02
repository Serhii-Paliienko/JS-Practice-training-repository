// const cources = ['HTML', 'CSS', 'JS', 'React', 'NodeJs'];
// console.log(cources);
// console.log(cources[2]);

// cources[0] = 'React';
// console.log(cources);

// console.log(cources.length);

// const firstElement = cources[0];
// console.log('firstElement:', firstElement);

// const lastElement = cources[cources.length - 1];
// console.log('lastElement:', lastElement);

// !
// let a = 10;
// const b = a;

// console.log('a:', a);
// console.log('b:', b);

// a = 20;

// console.log('a:', a);
// console.log('b:', b);

// !
// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1:', arr1);
// console.log('arr2:', arr2);

// arr2[0] = 100;

// console.log('arr1:', arr1);
// console.log('arr2:', arr2);

// console.log(arr1 === arr2);

// const arr3 = [1, 2, 3];
// const arr4 = [1, 2, 3];

// console.log(arr3 === arr4);

// !
// const courses = ['HTML', 'CSS', 'JS', 'React', 'NodeJs'];
// const coursesStr = courses.join('-=-');

// console.log('courses:', courses);
// console.log('coursesStr:', coursesStr);

// !
// const courses = ['HTML', 'CSS', 'JS', 'React', 'NodeJs'];
// const coursesCopy = courses.slice();

// console.log('courses:', courses);
// console.log('coursesCopy:', coursesCopy);

// coursesCopy[0] = 'PHP';

// console.log('courses:', courses);
// console.log('coursesCopy:', coursesCopy);

// !
// const oldCourses = ['HTML', 'CSS'];
// const newCourses = ['JS', 'React'];
// const courses = ['NodeJs'];

// const allCourses = courses.concat(newCourses, newCourses);

// console.log(allCourses);

// !
// const courses = ['HTML', 'CSS', 'JS', 'React', 'NodeJs'];
// const indexOfJS = courses.indexOf('JS');
// console.log(indexOfJS);

// !
// const courses = ['HTML', 'CSS', 'JS', 'React', 'NodeJs'];
// console.log(courses);

// courses[courses.length] = 'PHP';
// console.log(courses);

// courses.push('Java', 'SASS');
// courses.unshift('C++');
// console.log(courses);

// courses.pop();
// console.log(courses);

// courses.shift();
// console.log(courses);

// !
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.log('friends:', friends);

// for (let i = 0; i < friends.length; i++) {
//   const friend = friends[i];
//   console.log(friend);
// }

// for (const friend of friends) {
//   console.log(friend);
// }

// !
/*
TODO: Напиши скрипт для перебору масиву fruits.
TODO: Для кожного елемента масиву виведи в консоль рядок
TODO: у форматі номер_елемента: значення_елемента.
TODO: Нумерація елементів повинна починатися з 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// console.log('fruits:', fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }
