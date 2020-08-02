// // ШПОРГАЛКИ

// // выдернула элемент по id и class
// // let x = document.querySelector("#text .fourth");
// // console.log(x);

// // дёргаем элемент из формы
// // const forma = document.forms.form2;
// // console.log(forma.someText.value);

// // какой чекбокс чекнутый выводим
// // const forma = document.forms.form2;
// // console.log(forma.check1);
// // for (const checkBox of forma.check1) {
// //   console.log(checkBox.checked);
// //   console.log(checkBox.value);
// //     console.log("--------------------");
// // }
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // ЗАДАНИЯ 7

// // 1 - Создать произвольный елемент с id = text. Используя JavaScript, сделайте так,
// //     чтобы при клике на кнопку исчезал элемент с id = "text".
// // _______________________________________________________________________________
// let x = document.getElementById("text");
// console.log(x);
// let y = document.getElementById("but");
// y.onclick = () => {
//   x.style.display = "none";
// };

// // 2 - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// // ______________________________________________________________________________
// let x = document.getElementById("but");
// x.onclick = () => {
//   x.style.display = "none";
// };

// // 3 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи
// // меньше він ніж 18, та повідомити про це користувача
// // ______________________________________________________________________________
// let x = document.querySelector("#vozrast .seventh");
// console.log(x);
// let y = document.querySelector("#vozrast .seven");
// y.onclick = () => {
//   y.value = "";
// };
// x.onclick = () => {
//   y.value < 18 ? alert("Вам не исполнилось 18") : alert("Всё хорошо");
// };

// //   4  - Создайте меню, которое раскрывается / сворачивается при клике
// // ______________________________________________________________________________
// let z = document.querySelector("#nav .menu-item");
// let zz = document.querySelector("#nav .submenu");
// let vidimost = true;
// z.onclick = () => {
//   if (vidimost) {
//     zz.style.display = "block";
//     vidimost = false;
//   } else {
//     zz.style.display = "";
//     vidimost = true;
//   }
// };

// //   5  - Создать список комментариев, пример объекта коментария
// //         - { title: 'lorem', body: 'lorem ipsum dolo sit ameti' }.
// // Вывести список комментариев в документ, каждый в своем блоке.
// // Добавьте каждому комментарию по кнопке для сворачивания его body.
// // ______________________________________________________________________________
// let x = document.querySelector("#comments .sss");
// let y = document.querySelector("#comments .ss");
// let z = document.getElementById("comments1");
// let spisok = { who: x.value, comment: y.value };
// x.onclick = () => {
//   x.value = "";
// };
// y.onclick = () => {
//   y.value = "";
// };
// z.onclick = () => {
//   document.write(
//     `<div id="oo1" style="background-color: red">Кто комментировал: <br/> ${spisok.who}</div><br/>
//         <div>
//       <button id="but1">
//         Свернуть
//       </button>
//     </div><br/><br/>
//           <div id="oo2" style="background-color: yellow">Что написал: <br/>${spisok.comment}</div><br/>
//         <div>
//       <button id="but2" class="bb">
//         Свернуть
//       </button>
//     </div>`
//   );
// };
// let q = document.getElementById("#but1");
// let w = document.getElementById("#but2");
// let e1 = document.getElementById("#oo1");
// let e2 = document.getElementById("#oo2");
// q.onclick = () => {
//     e1.style.display = "none";
// };
// w.onclick = () => {
//     e2.style.display = "none";
//     // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//     // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     //     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     //     Почему не присвоились переменные q,w,e1,e2 ?

// 6 - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку
// считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм(Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API.Отже дайте формі та інпутам всі необхідні атрибути.
// ______________________________________________________________________________
// let cc = document.querySelector("#inp");

// im = document.forms.form3;
// om = document.forms.form4;

// im.someText1.onclick = () => {
//   im.someText1.value = "";
// };
// im.someText2.onclick = () => {
//   im.someText2.value = "";
// };
// om.someText3.onclick = () => {
//   om.someText3.value = "";
// };
// om.someText4.onclick = () => {
//   om.someText4.value = "";
// };

// cc.onclick = (ev) => {
//   ev.preventDefault();

//   ob1 = { name: im.someText1.value, surname: im.someText2.value };
//   ob2 = { adress: om.someText3.value, tel: om.someText4.value };
//   console.log(ob1);
//   console.log(ob2);
// };
