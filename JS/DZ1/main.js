// // 1 - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false 
// Вывести каждую при помощи console.log , alert, document.write
// let h='hello', o='owu', c='com', u='ua', one=+'1', ten=+'10', nine=+'-999', hundred=+'123', three=+'3.14', two=+'2.7', sixteen=+'16', t='true', f='false';
// console.log(h, o, c, u, one, ten, nine, hundred, three, two, sixteen, t, f);
// alert(h);
// alert(o);
// alert(c);
// alert(u);
// alert(one);
// alert(ten);
// alert(nine);
// alert(hundred);
// alert(three);
// alert(two);
// alert(sixteen);
// alert(t);
// alert(f);
// document.write(h+ ' ' + o+' '+ c+' '+ u+' '+ one+' '+ ten+' '+ nine+' '+ hundred+' ' +three+' '+ two+ ' ' +sixteen+' '+ t+ ' '+ f);
// document.write('<br>');

// // // 2 - переопределить каждую переменную из задания 1 дав им произвольные значения 
// // Вывести каждую при помощи console.log , alert, document.write
// h=prompt('Введите значение h');
// console.log(h);
// o=prompt('Введите значение o');
// console.log(o);
// c=prompt('Введите значение c');
// console.log(c);
// u=prompt('Введите значение u');
// console.log(u);
// one=+prompt('Введите число one');
// console.log(one);
// ten=+prompt('Введите число ten');
// console.log(ten);
// nine=+prompt('Введите число nine');
// console.log(nine);
// hundred=+prompt('Введите число hundred');
// console.log(hundred);
// three=+prompt('Введите число three');
// console.log(three);
// two=+prompt('Введите число two');
// console.log(two);
// sixteen=+prompt('Введите число sixteen');
// console.log(sixteen);
// t=prompt('Введите значение t');
// console.log(t);
// f=prompt('Введите значение f');
// console.log(f);
// alert(h);
// alert(o);
// alert(c);
// alert(u);
// alert(one);
// alert(ten);
// alert(nine);
// alert(hundred);
// alert(three);
// alert(two);
// alert(sixteen);
// alert(t);
// alert(f);
// document.write(h+ ' ' + o+' '+ c+' '+ u+' '+ one+' '+ ten+' '+ nine+' '+ hundred+' ' +three+' '+ two+ ' ' +sixteen+' '+ t+ ' '+ f);

// // 3 - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// const four=4, five=5, seven=7, ul='ula', al='ala', ola='olga';
// console.log(four, five, seven, ul, al, ola);
// alert(four);
// alert(five);
// alert(seven);
// alert(ul);
// alert(al);
// alert(ola);
// document.write(four+ ' ' + five+' '+ seven+' '+ ul+' '+ al+' '+ ola);
// document.write('<br>');

// // 4 - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. 
// // Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// let familia=prompt('Введите фамилию');
// let ima=prompt('Введите имя');
// let otchestvo=prompt('Введите отчество');
// console.log('Фамилия: '+familia);
// console.log('Имя: '+ima);
// console.log('Отчество: '+otchestvo);
// alert(familia);
// alert(ima);
// alert(otchestvo);
// document.write('Фамилия: '+familia);
// document.write('<br>');
// document.write('Имя: '+ima);
// document.write('<br>');
// document.write('Отчество: '+otchestvo);
// document.write('<br>');

// // 5 - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// let person=familia+' '+ima+' '+otchestvo;
// console.log('ФИО: '+person);

// 6 - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// let familiaH=prompt('Введите фамилию мужа');
// let imaH=prompt('Введите имя мужа');
// let otchestvoH=prompt('Введите отчество мужа');
// console.log('Фамилия мужа: '+familiaH);
// console.log('Имя мужа: '+imaH);
// console.log('Отчество мужа: '+otchestvoH);
// alert(familiaH);
// alert(imaH);
// alert(otchestvoH);
// document.write('Фамилия мужа: '+familiaH);
// document.write('<br>');
// document.write('Имя мужа: '+imaH);
// document.write('<br>');
// document.write('Отчество мужа: '+otchestvoH);
// document.write('<br>');
// let personH=familiaH+' '+imaH+' '+otchestvoH;
// console.log('ФИО мужа: '+personH);

// 7 - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// let one=+prompt('Введите число one');
// console.log(one);
// two=+prompt('Введите число two');
// console.log(two);
// three=+prompt('Введите число three');
// console.log(three);

// // 8 - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. 
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let one=prompt('Введите число one');
// let oneFigure=parseInt(one);
// console.log(oneFigure);
// two=prompt('Введите число two');
// let twoFigure=parseInt(two);
// console.log(twoFigure);
// three=prompt('Введите число three');
// let threeFigure=parseInt(three);
// console.log(threeFigure);
// four=prompt('Введите число four');
// let fourFigure=parseInt(four);
// console.log(fourFigure);
// let result=oneFigure+twoFigure+threeFigure+fourFigure;
// console.log('Сумма этих чисел: '+result);

// 9 - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. 
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let one=prompt('Введите десятичную дробь one');
// let oneFigure=parseFloat(one);
// console.log(oneFigure);
// two=prompt('Введите десятичную дробь two');
// let twoFigure=parseFloat(two);
// console.log(twoFigure);
// three=prompt('Введите десятичную дробь three');
// let threeFigure=parseFloat(three);
// console.log(threeFigure);
// let result=oneFigure+twoFigure+threeFigure;
// console.log('Сумма этих чисел: '+result);

// 10 - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round 
// Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// let one=Math.round(prompt('Введите десятичную дробь one'));
// console.log(one);
// two=Math.round(prompt('Введите десятичную дробь two'));
// console.log(two);
// three=Math.round(prompt('Введите десятичную дробь three'));
// console.log(three);
// let result=one+two+three;
// console.log('Сумма этих чисел: '+result);

// 11 - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. 
// Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. 
// При помощи Math.pow возвести первое число в степень второго числа.
// ______________________________________________________________
// let one=parseInt(prompt('Введите число one'));
// two=parseInt(prompt('Введите число two'));
// let result=Math.pow(one, two);
// console.log(result);

// 12 - При помощи оператора определения типа typeof определить типы следующих переменных 
// и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
// ______________________________________________________________
// let a = 100;
// console.log(typeof a);
// let b = '100'; 
// console.log(typeof b);
// let c = true; 
// console.log(typeof c);
// let d = undefined;
// console.log(typeof d);

  
// 13 - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true
// ______________________________________________________________
// let a = 5;
// let b = 6; 
// let c=a<b;
// console.log(c);
// let d=a>b;
// console.log(d);
// let e=a==b;
// console.log(e);
// let f=a===b;
// console.log(f);

// let a = 10;
// let b = 10; 
// let j=a==b;
// console.log(j);
// let g=a===b;
// console.log(g);
// let r=a>b;
// console.log(r);
// let t=a<b;
// console.log(t);
// let y=a!==b;
// console.log(y);

// let a = 123;
// let b = '123'; 
// let u=a===b;
// console.log(u);
// let i=a==b;
// console.log(a==b);


// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );
// false
// console.log(34 > 33 && 23 < 90 );
// true
// console.log(99 > 100 && 45 > 12 );
// false
// console.log(132 > 100 || 45 < 12 );
// true
// console.log(111 > 11 || 45 < 111 );
// true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// true
// console.log(!!'-1');
// true
// console.log(!!-1);
// true
// console.log(!!'0');
// true
// console.log(!!'null');
// true
// console.log(!!'undefined');
// true
// console.log(!!(3/'owu'));
// false
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
// false


// CLASS

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
// ______________________________________________________________
// let str = "Привет";
// console.log(typeof str);
// let num = 123; 
// console.log(typeof num);
// let flag = true; 
// console.log(typeof flag);
// let txt = "true";
// console.log(typeof txt);


// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
// ______________________________________________________________
// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
// console.log(a1, a2, a3, a4, a5);


// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
// ______________________________________________________________
// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
// console.log(a6, a7, a8, a9, a10);


// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
// ______________________________________________________________
// let height=23;
// let width=10;
// let s=height*width;
// console.log('Площадь прямоугольника равна '+s+'см');


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
// ______________________________________________________________
// Округлила результат, чтоб был читабельнее
// let heightC=10;
// let dC=4;
// let v = heightC * 3.14*Math.pow((dC/2), 2);
// console.log('Объем цилиндра равен '+ Math.round(v)+'м');


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// ______________________________________________________________
// let n=3;
// let m=4;
// console.log(Math.sqrt(n**2+m**2));


// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// ______________________________________________________________
// let str="Hello world";
// document.write(str);
// alert(str);
// console.log(str);


// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// ______________________________________________________________
// let fio=prompt('Введите Ваше ФИО');
// let age=prompt('Введите Ваш возраст');
// let hobby=prompt('Введите Ваше хобби');
// alert(fio+"\n"+ age +"\n"+ hobby);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
// ______________________________________________________________
// let str1='Кто ';
// let str2='ты ';
// let str3='такой?';
// let concatenation=str1+str2+str3;
// document.write(concatenation);


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
// выведется стринговое значение 205, потому что при конкатенации получается сринговое значение, если хоть одино из слагаемых стринга
//      document.write(str - a + "<br/>");
// 15 выведется. Оператор попытается преобразовать стрингу "20" в число, чтоб решить пример. И в данном случае у него это получится. 
//      document.write(str * "2" + "<br/>");
// 40 выведется. Оператор попытается преобразовать стринги "20" и "2" в числа, чтоб решить пример. И в данном случае у него это получится. 
//      document.write(str / 2 + "<br/>");
// 10 выведется. Оператор попытается преобразовать стрингу "20" в число, чтоб решить пример. И в данном случае у него это получится. 


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")
выведется число 3
//     parseInt("-7.875")
выведется число -7
//     parseInt("435")
выведется число 435
//     parseInt("Вася")
выведется NaN


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, 
// которые будут использоваться далее, повторите код ниже
// ______________________________________________________________
    // let str = prompt("Enter something");
    // console.log(str);


// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// ______________________________________________________________
// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");
// alert(a+b);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести 
// строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// ______________________________________________________________
// let a = prompt("Введите имя");
// let b = prompt("Введите фамилию");
// let c = prompt("Введите возраст");
// alert('Доброго вечера, '+a+' '+b+', мои поздравления что вам '+c+'!');


// =====================
// ======ДОП============
// =====================

// Это я для себя шпаргалки написала))
// for(let a=+prompt('Введите число до 10'); a < 50; a++)
// {document.write(`Число ${a} <br>`); }

let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет!

let isBoss = confirm("Ты здесь главный?");
alert( isBoss ); // true, если нажата OK

вывести какой-то элемент массива на экран
let arr=[2,5,'ddd'];
document.write(arr[2]);

let arr=[[2,5,'ddd'],['r',333,'dfggf',true],['asdf',765,654,'fals',NaN]] ;
document.write(arr[2]);

let me=[['julia','designer','wife','mother'],[3,4,8,-444,6],['sdc 4','sdfv',777]];
document.write(me[0][2])

let arr=[2,5,'ddd','kola','fals','asdfvb'];
arr[80]='eeee';
document.write(arr[3],arr[0]+'<br>',arr[80]);

тут почему-то не работает последняя строка
let arr=[[2,5,'ddd'],['r',333,'dfggf',true],['asdf',765,654,'fals',NaN]] ;
for (const innerArray of arr){console.log(innerArray)};
for (const element of innerArray){console.log(element)};

тут не получается массив в массиве
let arr=[[2,5,'ddd'],['r',333,'dfggf',true],['asdf',765,654,'fals',NaN]] ;
for (let a=0;a<arr.length;a++){const innerArray=arr[a]};
for (let b=0;b<innerArray.length;b++) {let element=arr[b]};
console.log(element);




!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// ______________________________________________________________
// let a=+prompt('Введите первое число');
// let b=+prompt('Введите второе число');
// let c=+prompt('Введите третье число');
// if (a<b && a<c && b<c){document.write(a+' '+b+' '+c)}
// else if (a<b && a<c && b>c){document.write(a+' '+c+' '+b)}
// else if (b<a && b<c && a<c){document.write(b+' '+a+' '+c)}
// else if (b<a && b<c && a>c){document.write(b+' '+c+' '+a)}
// else if (c<a && c<b && a<b){document.write(c+' '+a+' '+b)}
// else {document.write(c+' '+b+' '+a)}



// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
// ______________________________________________________________
let a=confirm('Cветофор зеленый?');
if (a=true){alert('Иди'); break;}
else {b=confirm('Cветофор желтый?')}
if (b=true){alert('Подожди');
break;}
else{c=confirm('Cветофор красный?')}
if (c=true){alert(' Стой');
break;}
else{d=confirm('Cветофор в аварийном режиме?')}
if (d=true){alert('Принимай решение сам');
break;}
else {alert('Светофор вообще отключен, будь осторожен!')}



// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
// ______________________________________________________________