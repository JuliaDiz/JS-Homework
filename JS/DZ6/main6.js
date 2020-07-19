// 1 - создать массив с 20 числами.
// --при помощи метода sort и колбека  отсортировать массив.
// --при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// --при помощи filter получить числа кратные 3
// --при помощи filter получить числа кратные 10
// --перебрать(проитерировать) массив при помощи foreach()
// --перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//   ___________________________________________________________________

// сортирует как по алфавиту
let massive = [
  5,
  7,
  9,
  -88,
  0,
  55,
  9543,
  12,
  44,
  12,
  12,
  -0.77,
  0.77,
  3456,
  55,
  9543,
  12,
  34568,
  -5557,
  764,
];
let resultSort = massive.sort();
console.log(resultSort);

// сортирует по возрастанию
let massive = [
  5,
  7,
  9,
  -88,
  0,
  55,
  9543,
  12,
  44,
  12,
  12,
  -0.77,
  0.77,
  3456,
  55,
  9543,
  12,
  34568,
  -5557,
  764,
];
let resultSort = massive.sort((a, b) => a - b);
console.log(resultSort);

// сортирует по убыванию
let massive = [
  5,
  7,
  9,
  -88,
  0,
  55,
  9543,
  12,
  44,
  12,
  12,
  -0.77,
  0.77,
  3456,
  55,
  9543,
  12,
  34568,
  -5557,
  764,
];
let resultSort = massive.sort(function (a, b) {
  return b - a;
});
console.log(resultSort);

// получаем числа, кратные 3 (но мне не нравится, что и 0 вывдит, и не целые числа игнорит, допилю потом)
let massive = [
  5,
  7,
  9,
  -88,
  0,
  55,
  9543,
  12,
  44,
  12,
  12,
  -0.77,
  0.77,
  0.33,
  3456,
  55,
  9543,
  12,
  34568,
  -5557,
  764,
];
let rez = massive.filter(function (a) {
  if (a % 3 === 0) {
    return true;
  }
});
console.log(rez);

// получаем числа, кратные 10 (но мне не нравится, что и 0 вывдит, и не целые числа игнорит, допилю потом)
let massive = [
  5,
  7,
  9,
  -80,
  0,
  55,
  95430,
  12,
  44,
  120,
  12,
  -0.77,
  0.77,
  0.33,
  340,
  55,
  9543,
  12,
  34568,
  -5557,
  764,
];
let rez = massive.filter(function (a) {
  if (a % 10 === 0) {
    return true;
  }
});
console.log(rez);

// --перебрать(проитерировать) массив при помощи foreach()
let massive = [
  5,
  7,
  9,
  -80,
  0,
  55,
  95430,
  12,
  44,
  120,
  12,
  -0.77,
  0.77,
  0.33,
  340,
  55,
  9543,
  12,
  34568,
  -5557,
  764,
];
massive.forEach(function (a) {
  console.log(a);
});

// --перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let massive = [
  5,
  7,
  9,
  -80,
  0,
  55,
  95430,
  12,
  44,
  120,
  12,
  -0.77,
  0.77,
  0.33,
  340,
  55,
  9543,
  12,
  34568,
  -5557,
  764,
];
let newMass = [];
massive.map(function (b) {
  let rez = b * 3;
  newMass.push(rez);
});
console.log(newMass);

// или вот способ короче
let massive = [
  5,
  7,
  9,
  -80,
  0,
  55,
  95430,
  12,
  44,
  120,
  12,
  -0.77,
  0.77,
  0.33,
  340,
  55,
  9543,
  12,
  34568,
  -5557,
  764,
];
let rez = massive.map((b) => b * 3);
console.log(rez);

// 2  - создать массив со словами на 15 - 20 элементов.
// --отсортировать его по алфавиту в восходящем порядке.
// --отсортировать его по алфавиту  в нисходящем порядке.
// --отфильтровать слова длиной менее 4х символов
// --перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// ________________________________________________________________________________________________________________

// --отсортировать его по алфавиту в восходящем порядке.
let arr = [
  "Katrin",
  "Olga",
  "Valentina",
  "Arina",
  "Damir",
  "Nikon",
  "Mila",
  "Vasilisa",
  "Oleg",
  "Max",
  "Natasha",
  "Petr",
  "Felix",
  "Zlata",
  "Viola",
  "Lina",
  "Kira",
  "Miroslava",
];
arr.sort();
console.log(arr);

// --отсортировать его по алфавиту  в нисходящем порядке.
let arr = [
  "Katrin",
  "Olga",
  "Valentina",
  "Arina",
  "Damir",
  "Nikon",
  "Mila",
  "Vasilisa",
  "Oleg",
  "Max",
  "Natasha",
  "Petr",
  "Felix",
  "Zlata",
  "Viola",
  "Lina",
  "Kira",
  "Miroslava",
];
arr.sort();
arr.reverse();
console.log(arr);

// --отфильтровать слова длиной менее 4х символов
let arr = [
  "Katrin",
  "Olga",
  "Valentina",
  "Arina",
  "Damir",
  "Nik",
  "Mila",
  "Vasilisa",
  "Oleg",
  "Max",
  "Natasha",
  "Petr",
  "Fil",
  "Zlata",
  "Viola",
  "Lina",
  "Kira",
  "Miroslava",
];
let rez = arr.filter(function (a) {
  if (a.length < 4) {
    return true;
  }
});
console.log(rez);

// --перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let arr = [
  "Katrin",
  "Olga",
  "Valentina",
  "Arina",
  "Damir",
  "Nikon",
  "Mila",
  "Vasilisa",
  "Oleg",
  "Max",
  "Natasha",
  "Petr",
  "Felix",
  "Zlata",
  "Viola",
  "Lina",
  "Kira",
  "Miroslava",
];
let rez = arr.map((b) => b + "!");
console.log(rez);

// 3 Все робити через функції масивів(foreach, map ...тд)
// Дан масив:
// let users = [
// { name: 'vasya', age: 31, status: false },
// { name: 'petya', age: 30, status: true },
// { name: 'kolya', age: 29, status: true },
// { name: 'olya', age: 28, status: false },
// { name: 'max', age: 30, status: true },
// { name: 'anya', age: 31, status: false },
// { name: 'oleg', age: 28, status: false },
// { name: 'andrey', age: 29, status: true },
// { name: 'masha', age: 30, status: true },
// { name: 'olya', age: 31, status: false },
// { name: 'max', age: 31, status: true }];
// - відсортувати його за  віком(зростання, а потім окремо спадання)
//   - відсортувати його за кількістю знаків в імені(зростання, а потім окремо спадання)
//     - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор(По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив(первинний масив залишиться без змін)
//       - відсортувати його за індентифікатором
// --наисать функцию калькулятора с 2мя числами и колбеком
// --наисать функцию калькулятора с 3мя числами и колбеком
// __________________________________________________________________________________________________________________

// - відсортувати його за  віком(зростання, а потім окремо спадання)
let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];
let rez = users.sort((a, b) => a.age - b.age);
console.log(rez);

let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];
let rez = users.sort((a, b) => b.age - a.age);
console.log(rez);

//   - відсортувати його за кількістю знаків в імені(зростання, а потім окремо спадання)
let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];
let rez = users.sort((a, b) => a.name.length - b.name.length);
console.log(rez);

let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];
let rez = users.sort((a, b) => b.name.length - a.name.length);
console.log(rez);

//     - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор(По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив(первинний масив залишиться без змін)
//       - відсортувати його за індентифікатором
let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];
let strUsers = JSON.stringify(users);
let parseUsers = JSON.parse(strUsers);
let newUsers = [];
users.map(function (a) {
  a.id = Math.floor(Math.random() * 100);
  newUsers.push(a);
});
console.log(parseUsers);
console.log(newUsers);
let result = newUsers.sort((a, b) => a.id - b.id);
console.log(result);

// --наисать функцию калькулятора с 2мя числами и колбеком
function calcularor(a, b, callback) {
  console.log(callback(a, b));
}
calcularor(2, 3, function (a, b) {
  return a + b;
});

// --наисать функцию калькулятора с 3мя числами и колбеком
function calcularor(a, b, c, callback) {
  console.log(callback(a, b, c));
}
calcularor(10, 20, 50, function (a, b, c) {
  return b - a + c;
});

// или стрелочная:
function calcularor(a, b, c, callback) {
  console.log(callback(a, b, c));
}
calcularor(10, 20, 50, (a, b, c) => b - a + c);

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
// _______________________________________________________________________________________

// кое-где ставила в условии > а кое-где >= только для наглядности, я понимаю что это значит (включительно или нет)
// двигун більше 3х літрів
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let dvig3L = cars.filter(function (a) {
  if (a.volume >= 3) {
    return true;
  }
});
console.log(dvig3L);

// - двигун = 2л
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let dvig2l = cars.filter(function (a) {
  if (a.volume === 2) {
    return true;
  }
});
console.log(dvig2l);

// - виробник мерс
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let prod = cars.filter(function (a) {
  if (a.producer === "mercedes") {
    return true;
  }
});
console.log(prod);

// - двигун більше 3х літрів + виробник мерседес
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let prod = cars.filter(function (a) {
  if (a.volume >= 3 && a.producer === "mercedes") {
    return true;
  }
});
console.log(prod);

// - двигун більше 3х літрів + виробник субару
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let prod = cars.filter(function (a) {
  if (a.volume >= 3 && a.producer === "subaru") {
    return true;
  }
});
console.log(prod);

// - сили більше ніж 300
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let prod = cars.filter(function (a) {
  if (a.power >= 400) {
    return true;
  }
});
console.log(prod);

// - сили більше ніж 300 + виробник субару
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let prod = cars.filter(function (a) {
  if (a.power >= 300 && a.producer === "subaru") {
    return true;
  }
});
console.log(prod);

// - мотор серіі ej
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let prod = cars.filter(function (a) {
  if (a.engine.includes("ej") === true) {
    return true;
  }
});
console.log(prod);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let prod = cars.filter(function (a) {
  if (
    a.power >= 300 &&
    a.producer === "subaru" &&
    a.engine.includes("ej") === true
  ) {
    return true;
  }
});
console.log(prod);

// - двигун меньше 3х літрів + виробник мерседес
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let prod = cars.filter(function (a) {
  if (a.volume < 3 && a.producer === "mercedes") {
    return true;
  }
});
console.log(prod);

// - двигун більше 2л + сили більше 250
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let prod = cars.filter(function (a) {
  if (a.volume >= 2 && a.power > 250) {
    return true;
  }
});
console.log(prod);

// - сили більше 250  + виробник бмв
let cars = [
  {
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400,
  },
  {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250,
  },
  {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300,
  },
  {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140,
  },
  {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200,
  },
  {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165,
  },
  {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120,
  },
  {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350,
  },
  {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180,
  },
  {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400,
  },
  {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230,
  },
];
let prod = cars.filter(function (a) {
  if (a.power > 250 && a.producer === "bmw") {
    return true;
  }
});
console.log(prod);

// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный
// _____________________________________________________________________________________

// -- отсортировать его по id пользователей
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
let sortId = usersWithAddress.sort((a, b) => a - b);
console.log(usersWithAddress);

// или так:
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
usersWithAddress.sort();
console.log(usersWithAddress);

// -- отсортировать его по id пользователей в обратном опрядке
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
usersWithAddress.sort();
usersWithAddress.reverse();
console.log(usersWithAddress);

// --отсортировать его по возрасту пользователей
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
usersWithAddress.sort((a, b) => a.age - b.age);
console.log(usersWithAddress);

// -- отсортировать его по возрасту пользователей в обратном порядке
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
usersWithAddress.sort((a, b) => b.age - a.age);
console.log(usersWithAddress);

// -- отсортировать его по имени пользователей
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
let rez = usersWithAddress.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
});
console.log(rez);

// -- отсортировать его по имени пользователей в обратном порядке
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
let rez = usersWithAddress.sort((a, b) => {
  if (a.name < b.name) {
    return 1;
  } else {
    return -1;
  }
});
console.log(rez);

// -- отсортировать его по названию улицы  в алфавитном порядке
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Andreeva", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Olezhkovskaja", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Krasnaja", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Pola", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Kirdanova", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Jantarnaja", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Prioritetnaja", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
let rez = usersWithAddress.sort((a, b) => {
  if (a.address.street < b.address.street) {
    return -1;
  } else {
    return 1;
  }
});
console.log(rez);

// -- отсортировать его по номеру дома по возрастанию
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Andreeva", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Olezhkovskaja", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Krasnaja", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Pola", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Kirdanova", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Jantarnaja", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Prioritetnaja", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
let rez = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
console.log(rez);

// -- отфильтровать (оставить) тех кто младше 30
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Andreeva", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Olezhkovskaja", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Krasnaja", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Pola", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Kirdanova", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Jantarnaja", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Prioritetnaja", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
let rez = usersWithAddress.filter(function (a) {
  if (a.age < 30) {
    return a;
  }
});
console.log(rez);

// -- отфильтровать (оставить) тех у кого отрицательный статус
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Andreeva", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Olezhkovskaja", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Krasnaja", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Pola", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Kirdanova", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Jantarnaja", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Prioritetnaja", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
let rez = usersWithAddress.filter(function (a) {
  if (a.status === false) {
    return a;
  }
});
console.log(rez);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Andreeva", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Olezhkovskaja", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Krasnaja", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Pola", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Kirdanova", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Jantarnaja", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Prioritetnaja", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
let rez = usersWithAddress.filter(function (a) {
  if (a.status === false && a.age < 30) {
    return a;
  }
});
console.log(rez);

// -- отфильтровать (оставить) тех у кого номер дома четный
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Andreeva", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Olezhkovskaja", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Krasnaja", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Pola", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Kirdanova", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Jantarnaja", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Prioritetnaja", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
];
let rez = usersWithAddress.filter(function (a) {
  if (a.address.number % 2 === 0) {
    return a;
  }
});
console.log(rez);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
function zadano(a) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) {
      console.log(`MinIndex = ${i}`);
      break;
    }
  }
  for (let i = arr.length - 1; i >= 0; --i) {
    if (arr[i] === a) {
      console.log(`MaxIndex = ${i}`);
      break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] != a;
    if (true) {
      console.log(`Index = ${-1}`);
    }
    break;
  }
}
zadano(7);

// тут у меня вопрос: задаю 17, к примеру, всё работает, а когда задаю
// число, имеющееся в массиве, то тоже работает, но и строку Index = -1 тоже выводит.
// Как сделать так, чтоб в случае с имеющимся в массиве числом не выводилось в конце Index = -1?
