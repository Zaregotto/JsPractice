// змінні
// var name = 'kolya' ;// можна змінити
// const lastName = 'Fedya' ;// вважається не змінним
// let age = 33 ; // можна змінити
// name = 'koka' ;
// age = 26 ;
// console.log(name, age);


// типи данних
// const bool = true ;
// let number = [1, 2, 3];
// const str = ['Sasha', 'Kolya', 'Vasya', '123'];
// undefined не відомий тип
// typeof дізнатись який тип данних
// number = 'some string' ; // JavaScript не строга мова програмування можна зміннювати значення.
// console.log(bool, number, str);
// const arr = null + undefined // буде nun
// console.log(arr)

// Мутировання
// console.log("name: " + lastName + ', age ' + age);
// const youAge = prompt('введіть ваш вік');
// console.log('мій вік ' + age + ' ваш вік ' + youAge);


// Оператори
// let a = 6 ;
// const b = 4 ;
// let c = 26;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a++); //додає до значення + 1
// console.log(--a);
// console.log(c += a)
// console.log(c += a *= b)
// const array = [] + 2 + 1 // рахується як string значення тому відповідь 21
// console.log(array)

//Умовні Оператори
// const courseStatus = 'pending' //
//
// if (courseStatus === 'ready') {
//     console.log('готово')
// } else if (courseStatus === 'pending') {
//     console.log('не готово')
// }else {
//     console.log('Не працює')
// }

// тернарка
// courseStatus ? console.log('готово') : console.log('не готово')

// функции
// const calculateAge = (year) => {
//     return 2022 - year
// }
// // console.log(calculateAge(1999));
// // console.log(calculateAge(1998));
// // console.log(calculateAge(1997));
// const logInfoAbout = (name, year) => {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log(name, age)
//     }else {
//         console.log('не правильно')
//     }
// }
//
// logInfoAbout('kolya', 1999);
// logInfoAbout('Nastya', 1997);
// logInfoAbout('Nastya', 2023);


// Массиви
// const cars = ['Nissan', 'Ford', 'Wolksvagen']
// console.log(cars.length)
//
// cars[0] = 'Porsche'
// cars[3] = 'Mazda'
// console.log(cars)

// Цикли
// const cars = ['Nissan', 'Ford', 'Wolksvagen']
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
//
// for (let car of cars) {
//     console.log(car)
// }

// let num = 0;
// for ( ; num < 5 ;) {
//     console.log(num);
//     num--;
//     break;
// }


// об'єкти
// const person = {
//     id: 1,
//     firstName: 'Kolya',
//     lastName: 'DD',
//     age: 25,
//     hasWife: false
// }
//
// console.log(person)
// console.log(person.age)