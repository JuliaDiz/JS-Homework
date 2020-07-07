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