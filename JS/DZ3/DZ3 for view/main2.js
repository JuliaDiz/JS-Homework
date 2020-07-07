// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName 
// або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

let get = document.getElementById('content');
console.log(get.innerHTML);

// - отримує текст з блоку з id "rules"

let getI = document.getElementById('rules');
console.log(getI.innerText);

// - замініть текст параграфа з id 'content' на будь-який інший

let getID = document.getElementById('content');
getID.innerText=`qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq`
console.log(getID.innerHTML);

// - замініть текст параграфа з id 'rules' на будь-який інший

let getID1 = document.getElementById('rules');
getID1.innerText=`qwwwwdfghnjm,..,mnhbgvfcdxz`
console.log(getID1.innerHTML);

// - змініть кожному елементу колір фону на червоний

let getID2 = document.getElementsByTagName('li');
for (i=0; i<getID2.length; i++){
getID2[i].style.backgroundcolor = 'red';
getID2[i].style.margin = '10px'}

// - змініть кожному елементу колір тексту на синій
let getID2 = document.getElementsByTagName('li');
for (i=0; i<getID2.length; i++){
getID2[i].style.color = 'blue';}

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let getID3 = document.getElementById('rules');
console.log(getID3.classList);

// - отримати всі елементи з класом fc_rules

let elclass = document.getElementsByClassName ('fc_rules');
console.log(elclass);

- поміняти колір тексту у всіх елементів fc_rules на червоний
let elclass = document.getElementsByClassName ('fc_rules');
for (i=0; i<elclass.length; i++){
    elclass[i].style.color = 'red';}







    // - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let getID2 = document.getElementById('main_header');
getID2.style.color = 'red';

// -- робить шириниу елементу ul 400 пікселів
let getID3 = document.getElementsByTagName('ul');
getID3[0].style.backgroundColor = 'yellow';
getID3[0].style.width = '400px';

// -- робить шириниу всіх елементів з класом linkList шириною 50%
let getID4 = document.getElementsByClassName('linkList');
getID4[0].style.backgroundColor = 'yellow';
getID4[0].style.width = '50%';

// -- отримує текст який зберігається в елементі з класом listElement2
let getID5 = document.getElementsByClassName('listElement2');
console.log(getID5[0].innerText);

// -- отримує всі елементи li та змінює ім колір фону на сірий
let getID6 = document.getElementsByTagName('li');
for (i=0; i<getID6.length; i++)
   { getID6[i].style.backgroundColor = 'grey';}

// -- отримує всі елементи 'a' та додає їм клас anchor
let elA = document.getElementsByTagName('a');
for (i=0; i<elA.length; i++)
   { elA[i].classList.add('anchor');}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, 
// змінює йому розмір тексту на 40 пікселів
let elA1 = document.getElementsByTagName('a');
for (i=0; i<elA1.length; i++)
   { if (elA1[i].innerText === 'link3' ) {
       elA1[i].style.fontSize = '40px';}}

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// -- отримує всі елементи 'a' та додає їм клас element_XXX. 
// Де XXX - текстовий контент елементу a
let elA2 = document.getElementsByTagName('a');
let classA2 = document.createElement('classA2');
classA2.innerText = 'XXX';
for (i=0; i<elA2.length; i++)
   { elA2[i].classList.add('classA2')}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// -- отримує всі елементи 'sub-header' та змінює колір фону. 
// Фон отримати з prompt()
let el = document.getElementsByClassName('sub-header');
for (i=0; i<el.length; i++){
   el[i].style.backgroundColor = prompt('Enter colour');}

//    или вот:
   let el = document.getElementsByClassName('sub-header');
   let i=0;
   while (i<el.length){
   el[i].style.backgroundColor = prompt('Enter colour');i++}

// -- отримує всі елементи 'sub-header' та змінює колір тексту 
// у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let elem = document.getElementsByClassName('sub-header');
for (i=0; i<elem.length; i++)
   { if (elem[i].innerText === 'content 2 segment' ) {
       elem[i].style.color = 'red';}}

// -- отримує елемент з класом content_1 та заміняє  
// в ньому тест на довільний. Текст отримати з prompt()
let el = document.getElementsByClassName('content_1');
for (i=0; i<el.length; i++){
    el[i].innerText = prompt('Enter some texte');
}

// -- отримати елементи p та змінити їм paddin на довільне значення
let pe = document.getElementsByTagName('p');
for (i=0; i<pe.length; i++){
  pe[i].style.padding = '40px';}


// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let el = document.getElementsByClassName('text2');
for (i=0; i<el.length; i++){
    el[i].innerText = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
}