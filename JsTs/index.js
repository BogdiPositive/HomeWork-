// 1-2
// alert("Я JavaScript")

// // 3

// var admin: string;
// var name: string;
// name = 'Джон';
// admin = name;
// alert(admin);

// //4
// let earth: string
// let currentUserName: string

// //5

// let userName = "Ilya";

// alert( `hello ${1}` ); // hello 1

// alert( `hello ${"name"}` ); // hello name

// alert( `hello ${name}` ); // hello Ilya

// 6

// let yourName = prompt('Как твое имя?')
// alert(yourName)

// 7
// let a = 1, b = 1;

// let c = ++a; //
// let d = b++; //

// a = 2
// b = 2
// c = 2
// d = 1

// 8
// let a = 2;

// let x = 1 + (a *= 2);

//  a = 4
//  x = 5

// "" + 1 + 0   = 1
// "" - 1 + 0    = -1
// true + false   = 1
// 6 / "3"        = 2
// "2" * "3"      = 6
// 4 + 5 + "px"    = 9px
// "$" + 4 + 5     = $45
// "4" - 2         = 4
// "4px" - 2       = NaN
// "  -9  " + 5    =  -9  5
// "  -9  " - 5    =  -14
// null + 1        = 1
// undefined + 1   = NaN
// " \t \n" - 2    = -2

// 9
// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// 5 > 4  // true
// "ананас" > "яблоко"  // false
// "2" > "12"     // false
// undefined == null   // true
// undefined === null   //false
// null == "\n0\n"      //false
// null === +"\n0\n"    // false

// 10

// if ("0") {                "0" = true
//     alert( 'Привет' );
//   }

// 11

// alert( null || 2 || undefined );    2

//12

// alert( alert(1) || 2 || alert(3) );  1 -> 2

//13

// alert( 1 && null && 2 );   null

//14

// alert( alert(1) && alert(2) );  1 -> undefined

//15

// alert( null || 2 && 3 || 4 );  3

//16

// if (-1 || 0) alert( 'first' );  first
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' ); third

//17

//  if (age < 14 || age > 90)
// if (!(age>=14 && age <= 90))

//18

// let i = 3;
// while (i) {         1
//   alert( i-- );
// }

//19
// Префиксный вариант ++i:

// let i = 0;
// while (++i < 5) alert( i );    1,2,3,4
// Постфиксный вариант i++

// let i = 0;
// while (i++ < 5) alert( i );   1,2,3,4,5

// Постфиксная форма:

// for (let i = 0; i < 5; i++) alert( i );   1,2,3,4
// Префиксная форма:

// for (let i = 0; i < 5; ++i) alert( i );     1,2,3,4

//20

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0
// let j = 3
// while(i < j){
//     alert(`number ${i}` );
//     i++
// }

//21
// let num;

// do {
//   num = prompt("Введите число больше 100?");
// } while (num <= 100 && num);

//22
// for (let i = 2; i <= n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue
//     }
// }

//23
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// 24

// const number = +prompt("Введите число между 0 и 3", "");

// if (number === 0) {
//   alert("Вы ввели число 0");
// }

// if (number === 1) {
//   alert("Вы ввели число 1");
// }

// if (number === 2 || number === 3) {
//   alert("Вы ввели число 2, а может и 3");
// }

// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//     break;
//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

//25

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }
//   Будет ли эта функция работать как-то иначе, если убрать else?

//   function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Родители разрешили?');
//   }

//   Разницы в работе этих функций нет

// 26

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

//   function checkAge(age) {
//    return age > 18 ?  true :  confirm('Родители разрешили?')
//   }

//   function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
//   }

//27

// function min (numOne, numTwo) {
//     return numOne > numTwo ?  numOne : numTwo
// }

//28

// function pow (x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }

//     return result;
// }

//29

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
//   );

//30

// function isEmpty(obj) {
//     for (let item in obj) {
//       return false;
//     }
//     return true;
//   }

// 31 onst user = {
// const user = {
//     name: "John"
//   };

//   // это будет работать?
//   user.name = "Pete";

//   Будет

//  32

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   let sum = salaries.John + salaries.Ann + salaries.

// 33

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }

// 34

// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }

//   let user = makeUser();

//   alert( user.ref.name ); // Каким будет результат?
//   Будет ошибка - name - undefined

//35

// let calculator = {
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }

//     sum() {
//       return this.a + this.b;
//     },

//     mul() {
//       return this.a * this.b;
//     },

//   };

//36

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       alert( this.step );
//       return this;
//     }
//   };

//37
// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

//Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

// Это возможно если будут возвращать один и тот же объект

// // 38
// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//       this.value += +prompt('Сколько нужно добавить?', 0);
//     };

//   }

//   let accumulator = new Accumulator(1);

// 39

// Взгляните на следующий код:

// let str = "Привет";

// str.test = 5;

// alert(str.test);

// Как вы думаете, это сработает? Что выведется на экран?

// При strict mode будет ошибка
// Без него будет undefined

//40
// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");

// alert( a + b );

//41

// function readNumber() {
//     let num;

//     do {
//       num = prompt("Введите число");
//     } while ( !isFinite(num) );

//     if (num === null || num === '') return null;

//     return +num;
//   }

//42
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// цикл бесконечный из-за потери точности. I никогда не станет равна 10

// 43

// function random(min, max) {
//     return min + Math.random() * (max - min);
//   }

//  44

// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }

//45

// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
//   }

//  46
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();

//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }

//  47

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

// 48

// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }

// 49

//  Что выведет следующий код?

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// alert( fruits.length ); // ?  4

// 50

// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// styles.unshift("Рэп", "Регги");

// 51

// Каков результат? Почему?

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // ?

// a,b,function из-за this

// 52

// function sumInput() {
//   let numbers = [];

//   while (true) {
//     let value = prompt("Введите число", 0);

//     if (value === "" || value === null) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }


// 53

// function camelize(str) {
//     return str
//       .split('-') 
//       .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join('');
// }


// 54 


// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// //  55 

// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     let sorted = word.toLowerCase().split("").sort().join(""); 
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }


// //  56 
// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");


// // 57 
// function sumSalaries(salaries) {

//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }

//   return sum; // 650
// }


// 58 

// function count(obj) {
//   return Object.keys(obj).length;
// }


// 59
// 
// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user;

// alert( name ); 
// alert( age ); 
// alert( isAdmin ); 


// 60 

// function topSalary(salaries) {

//   let max = 0;
//   let maxName = null;

//   for(const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }


// 61 
let currentDate = new Date(2012, 1, 20, 3, 12);


// 62

// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];  
  
//     return days[date.getDay()];  начинаем с ВС
//   }

// 63

// function getLocalDay(date) {

//     let day = date.getDay();
  
//     if (day == 0) { 
//       day = 7;
//     }
  
//     return day;
// }


// 64

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);
  
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
//   }

// 64

// function getSecondsToday() {
//     let now = new Date();
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
//     let diff = now - today;
//     return Math.round(diff / 1000); 
//   }

// 65

// function getSecondsToTomorrow() {
//     let now = new Date();
//     let hour = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
//     let totalSecondsInADay = 86400;
  
//     return totalSecondsInADay - totalSecondsToday;
//   }


// 66

// let user = {
//     name: "Василий Иванович",
//     age: 35
//   };
  
//   let user2 = JSON.parse(JSON.stringify(user));