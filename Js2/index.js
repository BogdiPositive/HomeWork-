// 1
// function sumTo(n) {
// let sum = 0
// while ( n > 0){
//     sum +=n
//     n--
// }
// return sum
// }
//

// function sumTo(n) {
//     return n == 1 ? 1 : n + sumTo(n - 1)
// }

// function sumTo(n) {
//     return n * (n + 1) / 2;
//   }

// 2

// function factorial(n) {
//     return n == 1 ?  n : n * factorial(n - 1)
// }

// 3

// function fib(n) {
//   return n == 1 ? n : fib(n - 1) + fib(n - 2);
// }

// alert(fib(3));

// 5

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function printList(list) {
//   let i = list;

//   while (i) {
//     alert(i.value);
//     i = i.next;
//   }
// }

// function printList(list) {
//   alert(list.value);

//   if (list.next) {
//     printList(list.next);
//   }
// }

// 6

// function printReverseList(list) {

//     if (list.next) {
//       printReverseList(list.next);
//     }

//     alert(list.value);
//   }

// function printReverseList(list) {
//   let arr = [];
//   let i = list;

//   while (i) {
//     arr.push(i.value);
//     i = i.next;
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     alert( arr[i] );
//   }
// }

// 7

// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// alert( counter2() ); // ? 0
// alert( counter2() ); // ? 1

// counter и counter2 независимы друг от друга и имеют разное лексическое окружение

// 8

// Здесь объект счётчика создан с помощью функции-конструктора.

// Будет ли он работать? Что покажет?

// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// alert( counter.up() ); // ?  1
// alert( counter.up() ); // ?  2
// alert( counter.down() ); // ? 1

// Фукция будет работать, обе вложенные функции имеют доступ к внешним данным.

// 9

// Посмотрите на код. Какой будет результат у вызова на последней строке?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();
// Результатом будет ошибка, тк if имеет свою ограниченную область видимости

//  10

// function sum(a) {

//     return function(b) {
//       return a + b;
//   };

// }

//  11
// function inBetween(a, b) {
//     return function(tmp) {
//       return tmp >= a && tmp <= b;
//     };
//   }

//   function inArray(arr) {
//     return function(tmp) {
//       return arr.includes(tmp);
//     };
//   }

// 12

// function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;
//   }

// 13

// function makeArmy() {

//     let shooters = [];

//     for(let i = 0; i < 10; i++) {
//       let shooter = function() {
//         alert( i );
//       };
//       shooters.push(shooter);

//     }

//     return shooters;
//   }

// 14

// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function() {
//       alert(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }

// 15

// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert?

// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }

// setTimeout выполняется всегда после того, как завершится выполнение остального кода

// 16

function spy(func) {
  function wrap(...args) {
    wrap.calls.push(args);
    return func.apply(this, args);
  }
}

//  17

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

// 18

// function debounce(f, ms) {

//     let isCooldown = false;

//     return function() {
//       if (isCooldown) return;

//       f.apply(this, arguments);

//       isCooldown = true;

//       setTimeout(() => isCooldown = false, ms);
//     };

//   }

// //   19

// function f() {
//     alert( this ); // ?
//   }

//   let user = {
//     g: f.bind(null)
//   };

//   user.g();

//   Функция выведет Null

// 20

// Что выведет этот код?

// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();

// Вася

// 21

// Какие значения показываются в процессе выполнения кода?

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert( rabbit.jumps ); // ? (1)   ture

// delete rabbit.jumps;

// alert( rabbit.jumps ); // ? (2)    null

// delete animal.jumps;

// alert( rabbit.jumps ); // ? (3)    undefined

// 22

// let head = {
//     glasses: 1
//   };

//   let table = {
//     pen: 3,
//     __proto__: head
//   };

//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };

//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };

// 23

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// Объект rabbit

// 24

// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);   // присвоим значение this.stomach = [food] вместо вызова psuh
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert( lazy.stomach ); // apple

// 25

// function User(name) {
//     this.name = name;
//   }

//   let user = new User('John');
//   let user2 = new user.constructor('Pete');

//   alert( user2.name )

// 26

// Function.prototype.defer = function (ms) {
//     return (...args) => {
//     setTimeout(this, ms, ...args);
//     };
//     };

// 27

// Для страницы:

// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…

// элемент <div>?  document.body.children[0]
// <ul>?  document.body.lastElementChild
// второй <li> (с именем Пит)?  document.body.lastElementChild.lastElementChild

// 28

// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null?   Да
// Правда, что elem.children[0].previousSibling всегда равен null? Нет

// 29

// <body>
//   <table>
//     <tr>
//       <td>1:1</td>
//       <td>2:1</td>
//       <td>3:1</td>
//       <td>4:1</td>
//       <td>5:1</td>
//     </tr>
//     <tr>
//       <td>1:2</td>
//       <td>2:2</td>
//       <td>3:2</td>
//       <td>4:2</td>
//       <td>5:2</td>
//     </tr>
//     <tr>
//       <td>1:3</td>
//       <td>2:3</td>
//       <td>3:3</td>
//       <td>4:3</td>
//       <td>5:3</td>
//     </tr>
//     <tr>
//       <td>1:4</td>
//       <td>2:4</td>
//       <td>3:4</td>
//       <td>4:4</td>
//       <td>5:4</td>
//     </tr>
//     <tr>
//       <td>1:5</td>
//       <td>2:5</td>
//       <td>3:5</td>
//       <td>4:5</td>
//       <td>5:5</td>
//     </tr>
//   </table>
//   <script>
//     let table = document.body.firstElementChild;

//     for (let i = 0; i < table.rows.length; i++) {
//       let row = table.rows[i];
//       row.cells[i].style.backgroundColor = 'red';
//     }
//   </script>

// 30

// Что выведет этот код?

// <script>
//   let body = document.body;

//   body.innerHTML = "<!--" + body.tagName + "-->";

//   alert( body.firstChild.data ); // что выведет?
// </script>

// Выведет BODY

// 31

// let elem = document.querySelector('[data-widget-name]');
// elem.getAttribute('data-widget-name')

// 32

// let links = document.querySelectorAll('a');

// for (let link of links) {
//   let href = link.getAttribute('href');
//   if (!href) continue;

//   if (!href.includes('://')) continue;

//   if (href.startsWith('http://internal.com')) continue;

//   link.style.color = 'orange';
// }

// 33

// function clear(elem) {
//     elem.innerHTML = '';
//   }

//  34
// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// 35
// сonst table = document.getElementById('table');
// const firstTr = table.querySelector('tr:first-child');
// const tr = table.querySelectorAll('tr:not(:first-child)');

// const arr = Array.from(tr).sort((a, b) => {
//     return a.firstElementChild.textContent > b.firstElementChild.textContent ? 1 : -1;
// });

// table.tBodies[0].append(firstTr, ...arr);

// 36

// let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

//  37

// ball.style.left = Math.round(field.clientWidth / 2) + 'px';
// ball.style.top = Math.round(field.clientHeight / 2) + 'px';

// 38

// document.getElementById('hider').onclick = function() {
//   document.getElementById('text').hidden = true;

// 39

{
  /* <input type="button" onclick="this.hidden=true" value="Нажми"></input> */
}

// 40

// В переменной button находится кнопка. Изначально на ней нет обработчиков.

// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

// button.addEventListener("click", () => alert("1"));

// button.removeEventListener("click", () => alert("1"));

// button.onclick = () => alert(2);

// Алерт выведет 1 и 2

// 41

// menuElem.classList.toggle('open');
