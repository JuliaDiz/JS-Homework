// 1 - створити функцію яка виводить масив
// _______________________________________________________________
function mass(x) {
    console.log(x)
}
mass(x=['Ola', 'Kola', 'Petro', 'Vasja', 'Anna', 'Vitja'])


// - створити функцію яка заповнює масив рандомними числами та виводить його. 
// Для виведення використати попвередню функцію.
// _______________________________________________________________

function fillMass() {
    let m=[];
    for (let i=0; i<15;i++)
    {m.push(Math.floor(Math.random()*100)) }
    console.log(m)
}
fillMass()


// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// _______________________________________________________________
function shifres() {
    let a=+prompt('Enter first number');
    let b=+prompt('Enter second number');
    let c=+prompt('Enter third number');
    let min=Math.min(a,b,c);
    console.log(`Your numbers are: ${a} , ${b} , ${c}`);
    console.log(`Minimum is: ${min}`);
    return min
}
shifres ()


// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// _______________________________________________________________
function shifresM() {
    let x=+prompt('Enter first number');
    let y=+prompt('Enter second number');
    let z=+prompt('Enter third number');
    console.log(`Your numbers are: ${x} , ${y} , ${z}`);
    let max=Math.max(x,y,z);
    return (max)
}
shifresM ()


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// // _______________________________________________________________

// СЕБЕ ПИШУ: arguments - не массив и к нему не просто мин и макс применить, надо так:
function arg(){
    for (let i = 0; i < arguments.length ; i++);
    {console.log(arguments)}
    let maxi=Math.max(...arguments);
    let mini=Math.min(...arguments);
    console.log(`Maximum is: ${maxi}`);
    return (mini)
}
arg(3,6,87,111,8,5,4,3,1)

// или

function arg(){
    for (let i = 0; i < arguments.length ; i++);
    {console.log(arguments)}
    let maxi=Math.max.apply(null, Array.from(arguments));
    let mini=Math.min.apply(null, Array.from(arguments));
    console.log(`Maximum is: ${maxi}`);
    return (mini)
}
arg(3,6,87,111,8,5,4,3,1)


// - створити функцію яка виводить масив
// _______________________________________________________________
function mass (arr){
console.log(arr)
}
mass([4,'ertyui',6,8765,'zasxdfgh'])


// - створити функцію яка повертає найбільше число з масиву
// _______________________________________________________________
function mass (arr){
    for (let i=0;i < arr.length ; i++){
        let maxi=Math.max(...arr);  
        return(maxi) }
    }
mass([2,55,6,8765,777])


// - створити функцію яка повертає найменьше число з масиву
// _______________________________________________________________
function mass (arr){
    for (let i=0;i < arr.length ; i++){
        let mini=Math.min(...arr);  
        return(mini)}
    }
    mass([2,55,6,8765,777])


// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function oo(arr) {
    console.log(arr);
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];}
       return(sum)}
    
    oo ([1,2,4,7,3,1,4,6,7,5])


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// _______________________________________________________________

function sumSrednArifm (mass) {
    let sum = 0;
    for (const ii of mass) {
        sum+=ii
    }
    return sum/mass.length
}
sumSrednArifm([1,2,4,7,3,1,4,6,7,5]);


// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// _______________________________________________________________
function array (arr){
let len=arr.length;
return(len)};
array ([
{year: '2', some: 'ertyui', name:'eeeeeee', key: 'zasxdfgh'},
{key0:'rrrrrrrrrrrrr', key1:'dddddddddd'},
{key2: 'uuaaaaaaaaaaaaddddu', key3: 'uuuppppppppuuu'}, 
{key4: 'uuuuuuyyyyyyyyyyyuuu', key5: 'uugggggggggggg'}])


// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// _______________________________________________________________
function array (arr){
    let sum=0;
for(let x of arr){
    sum += Object.keys(x).length}
    return(sum)};
    array ([
    {year: '2', some: 'ertyui', name:'eeeeeee', key: 'zasxdfgh'},
    {key0:'rrrrrrrrrrrrr', key1:'dddddddddd'},
    {key2: 'uuaaaaaaaaaaaaddddu', key3: 'uuuppppppppuuu'}, 
    {key4: 'uuuuuuyyyyyyyyyyyuuu', key5: 'uugggggggggggg'}])

// или так:
function array (arr){
    let sum=0;
for(let i=0;i<arr.length;i++){
    sum += Object.keys(arr[i]).length}
    return(sum)};
    array ([
    {year: '2', some: 'ertyui', name:'eeeeeee', key: 'zasxdfgh'},
    {key0:'rrrrrrrrrrrrr', key1:'dddddddddd'},
    {key2: 'uuaaaaaaaaaaaaddddu', key3: 'uuuppppppppuuu'}, 
    {key4: 'uuuuuuyyyyyyyyyyyuuu', key5: 'uugggggggggggg'}])


// - створити функцію  яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// _________________________________________________________________________________________________
function odInd(arr1, arr2) {
    let x=[];
    for(let i=0;i<arr1.length;i++){
        let sum=arr1[i]+arr2[i];
        x.push(sum);}
    return x}
odInd([1,3,6,7,9,], [7,0,4,18,8])



// - створити функцію  яка
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// ____________________________________________________________________________________________
function array (arr, i){
    let zapas=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=zapas;
console.log (arr)
};
array ([33,'2',0,'ertyui', 4444, 'eeeeeee', 0, 'zasxdfgh',6,7,444,'uytr'],7)








// // НИЖН НЕ ДЛЯ ПРОВЕРКИ. ЭТО МНЕ ШПАРГАЛКА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
// Сумма введённых чисел
function sumInput() {
    let numbers = [];
    while (true) {
      let value = prompt("Введите число", 0);
      // Прекращаем ввод
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  console.log( sumInput() );

//   Вывести кол-во ключей объекта!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let ar={year: '2', some: 'ertyui', name:'eeeeeee', key: 'zasxdfgh'};
    console.log(Object.keys(ar).length)

    // стрелочная функция!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let arro = (z) => {
        console.log (z);
        }
        arro(5555)

// - створити функцію  яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// с разным кол-вом элементов в массивах. Но здесь не решаем задачу (з однаковими индексами)
// - поэтому не подходит для нашей задачи
// _________________________________________________________________________________________________
function odInd(arr1, arr2) {
    let x=[];
    for(let i=0;i<arr1.length;i++){
        let sum=(arr1[i] || 0)+(arr2[i] || 0);
        x.push(sum);}
    return x}
odInd([1,3,6,7,9,4,6,90], [7,0,4,18,8])

// тернарный оператор
x=3;
y=4;
x>y ? console.log('yes') :  console.log('no');