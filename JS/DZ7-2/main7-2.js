// 7 - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
// // ______________________________________________________________________________

// let ta = document.querySelector("#forTabl");
// function createTable(strok, stolb, kyda) {
//   let table = document.createElement("table");
//   for (let i = 0; i < strok; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < stolb; j++) {
//       let td = document.createElement("td");
//       td.innerHTML = "sdfghj";
//       td.style.backgroundColor = "red";
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
//   kyda.appendChild(table);
// }
// createTable(7, 10, ta);

// 8 - Створити 3 инпута та кнопку.Один визначає кількість рядків, другий -
//     кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
// (Додатковачастина для завдання)
// ______________________________________________________________________________

// let infRad = document.getElementById("radu");
// let infJach = document.getElementById("jachejki");
// let infText = document.getElementById("textVtabl");
// let knopka = document.getElementById("inp");
// knopka.onclick = () => {
//   let ta = document.querySelector("#forTabl");
//   function createTable(strok, stolb, kyda) {
//     let table = document.createElement("table");
//     for (let i = 0; i < strok; i++) {
//       let tr = document.createElement("tr");
//       for (let j = 0; j < stolb; j++) {
//         let td = document.createElement("td");
//         td.innerHTML = infText.value;
//         td.style.backgroundColor = "red";
//         tr.appendChild(td);
//       }
//       table.appendChild(tr);
//     }
//     kyda.appendChild(table);
//   }
//   createTable(infRad.value, infJach.value, ta);
// };

// 10 - Сворити масив не цензурних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// ______________________________________________________________________________

// let matyk = ["козел", "дебил", "придурок", "скотина", "тварь", "идиот"];
// console.log(matyk);
// let mat = document.getElementById("textForMatyki");
// mat.onclick = () => {
//   mat.value = "";
// };
// let oki = document.getElementById("inp2");
// oki.onclick = () => {
//     matyk.includes(mat.value) ? alert("Это нецензурное слово") : alert("Всё ок");
// };
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     ПОЧЕМУ НЕ РАБОТАЕТ ПЕРЕБОР ЦИКЛОМ (НИЖЕ КОТОРЫЙ)?
//     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// oki.onclick = () => {
//   for (let i = 0; i < matyk.length; i++) {
//     if (mat.value === matyk[i]) {
//       alert("Это нецензурное слово");
//     } else {
//       alert("Всё ок");
//     }
//   }
// };

//  11  - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
// ______________________________________________________________________________
// let matyk = ["козел", "дебил", "придурок", "скотина", "тварь", "идиот"];
// console.log(matyk);
// let mat = document.getElementById("textForMatyki1");
// mat.onclick = () => {
//   mat.value = "";
// };
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //     ПОЧЕМУ НЕ РАБОТАЕТ ЦИКЛ НИЖЕ ?
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let oki = document.getElementById("inp3");
// oki.onclick = () => {
//   for (let i = 0; i < matyk.length; i++) {
//     mat.value.includes(matyk[i])
//       ? alert("Это нецензурное слово")
//       : alert("Всё ок");
//   }
// };

// 12 --создать скрипт, который берет считывает на странице(rules.html)
// текст и делает сбоку меню - оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// ______________________________________________________________________________

// --взять массив пользователей
// let usersWithAddress = [
//     { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
//     { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
//     { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
//     { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
//     { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
//     { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
//     { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
//     { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
//     { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
// ];
// Создать три чекбокса.Каждый из них активирует фильтр для вышеуказаного
// массива.Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false(осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

//     ***** (Прям овердоз с рекурсией) Создать функцию которая принимает какой - либо элемент DOM - структуры.Функция создает в боди 2 кнопки(назад / вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу(лежащему на одном уровне)
// НО если у(какого - либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка.и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

//     *** При виділені сегменту тексту на сторінці він стає жирний / курсивний / або якось іншим способом змінює свій стан
