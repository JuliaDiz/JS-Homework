// 1 - Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// СПОСОБ COMPOSITION
function TegDescription(tagName0, tegActions0, tegAtributes0) {
  this.tagName = tagName0;
  this.tegActions = tegActions0;
  this.tegAtributes = tegAtributes0;
}

let object1 = new TegDescription(
  "ul",
  "Тег <ul> устанавливает маркированный список.",
  [
    {
      AtributeName1: "type",
      AtributeAction1:
        "Для маркированного списка маркеры могут принимать один из трех видов: кружок, окружность, квадраn.",
    },
    {
      AtributeName2: "accesskey",
      AtributeAction2:
        "Позволяет получить доступ к элементу с помощью сочетания клавиш с заданной в атрибуте буквой или цифрой.",
    },
    {
      AtributeName3: "class",
      AtributeAction3:
        "Задает стилевой класс, который позволяет связать определенный тег со стилевым оформлением.",
    },
  ]
);
console.log(object1);

let object2 = new TegDescription(
  "a",
  "Является одним из важных элементов HTML и предназначен для создания ссылок.",
  [
    {
      AtributeName1: "coords",
      AtributeAction1:
        "Применяется к ссылкам, которые располагаются внутри контейнера",
    },
    {
      AtributeName2: "href",
      AtributeAction2: "Задает адрес документа, на который следует перейти.",
    },
    {
      AtributeName3: "rel",
      AtributeAction3:
        "Определяет отношения между текущим документом и документом, на который ведет ссылка, заданная атрибутом href.",
    },
  ]
);
console.log(object2);

let object3 = new TegDescription(
  "span",
  "предназначен для определения строчных элементов документа.",
  [
    {
      AtributeName1: "title",
      AtributeAction1:
        "Описывает содержимое элемента в виде всплывающей подсказки, которая появляется при наведении курсора на элемент.",
    },
    {
      AtributeName2: "tabindex",
      AtributeAction2:
        "Устанавливает порядок получения фокуса при переходе между элементами с помощью клавиши Tab",
    },
    {
      AtributeName3: "style",
      AtributeAction3:
        "Применяется для определения стиля элемента с помощью правил CSS.",
    },
  ]
);
console.log(object3);

let object4 = new TegDescription(
  "option",
  "Определяет отдельные пункты списка, создаваемого с помощью контейнера <select>",
  [
    {
      AtributeName1: "disabled",
      AtributeAction1: "Блокирует элемент списка для его выбора.",
    },
    {
      AtributeName2: "label",
      AtributeAction2:
        "Предназначен для указания метки пункта списка, сокращённой по сравнению с текстом внутри <option>.",
    },
    {
      AtributeName3: "selected",
      AtributeAction3: "Делает текущий пункт списка выделенным.",
    },
  ]
);
console.log(object4);

// СПОСОБ AGREGATION
function TegDescription1(
  tagName0,
  tegActions0,
  AtributeName1,
  AtributeAction1,
  AtributeName2,
  AtributeAction2,
  AtributeName3,
  AtributeAction3
) {
  this.tagName = tagName0;
  this.tegActions = tegActions0;
  this.tegAtributes = [
    { AtributeName1: AtributeName1, AtributeAction1: AtributeAction1 },
    { AtributeName2: AtributeName2, AtributeAction2: AtributeAction2 },
    { AtributeName3: AtributeName3, AtributeAction3: AtributeAction3 },
  ];
}

let object1 = new TegDescription1(
  "ul",
  "Тег <ul> устанавливает маркированный список.",
  "type",
  "Для маркированного списка маркеры могут принимать один из трех видов: кружок, окружность, квадраn.",
  "accesskey",
  "Позволяет получить доступ к элементу с помощью сочетания клавиш с заданной в атрибуте буквой или цифрой.",
  "class",
  "Задает стилевой класс, который позволяет связать определенный тег со стилевым оформлением."
);
console.log(object1);

// ==============================================
// 20:05 лекции 5
// 2 -  Створити класс для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
// }

class ObjectTeg {
  constructor(tegName, tegActions, tegAtributes) {
    this.tegName = tegName;
    this.tegActions = tegActions;
    this.tegAtributes = tegAtributes;
  }
}
let object5 = new ObjectTeg(
  "a",
  "Является одним из важных элементов HTML и предназначен для создания ссылок.",
  [
    {
      AtributeName1: "coords",
      AtributeAction1:
        "Применяется к ссылкам, которые располагаются внутри контейнера",
    },
    {
      AtributeName2: "href",
      AtributeAction2: "Задает адрес документа, на который следует перейти.",
    },
    {
      AtributeName3: "rel",
      AtributeAction3:
        "Определяет отношения между текущим документом и документом, на который ведет ссылка, заданная атрибутом href.",
    },
  ]
);
console.log(object5);

// ==============================================
// 20:08

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let car = {
  model: "pevgeot",
  made: "France",
  year: 2020,
  maxSpeed: 250,
  dvigatel: "2,5 l",
};

function drive(a) {
  let maxSpeed = a;
  console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`);
}
drive(280);

function info() {
  console.log(car);
}
info();

function increaseMaxSpeed(newSpeed) {
  let newMaxSpeed = car.maxSpeed + newSpeed;
  console.log(newMaxSpeed);
}
increaseMaxSpeed(20);

function changeYear(newValue) {
  delete car.year;
  car.year = newValue;
  console.log(car);
}
changeYear(2018);

function addDriver(driver0) {
  car.driver = driver0;
  console.log(car);
}
addDriver({ name: "Gogi", age: 32, nationality: "Georgia" });

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

function ObjectCar(carName0, carMade0, carYear0, maxSpeed0, dvigatel0) {
  this.carName = carName0;
  this.carMade = carMade0;
  this.carYear = carYear0;
  this.maxSpeed = maxSpeed0;
  this.dvigatel = dvigatel0;
}
let car1 = new ObjectCar("buiq", "USA", 2020, 250, "3,5 l");
console.log(car1);

function drive() {
  maxSpeed = car1.maxSpeed;
  console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`);
}
drive();

function info() {
  console.log(car1);
}
info();

function increaseMaxSpeed(newSpeed) {
  let newMaxSpeed = car1.maxSpeed + newSpeed;
  console.log(newMaxSpeed);
}
increaseMaxSpeed(20);

function changeYear(newValue) {
  delete car1.carYear;
  car1.carYear = newValue;
  console.log(car1);
}
changeYear(2018);

function addDriver(driver0) {
  car1.driver = driver0;
  console.log(car1);
}
addDriver({ name: "Gogi", age: 32, nationality: "Georgia" });

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class ObjectCar {
  constructor(carName0, carMade0, carYear0, maxSpeed0, dvigatel0) {
    this.carName = carName0;
    this.carMade = carMade0;
    this.carYear = carYear0;
    this.maxSpeed = maxSpeed0;
    this.dvigatel = dvigatel0;
  }
}
let car1 = new ObjectCar("buiq", "USA", 2020, 250, "3,5 l");
console.log(car1);

function drive() {
  maxSpeed = car1.maxSpeed;
  console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`);
}
drive();

function info() {
  console.log(car1);
}
info();

function increaseMaxSpeed(newSpeed) {
  let newMaxSpeed = car1.maxSpeed + newSpeed;
  console.log(newMaxSpeed);
}
increaseMaxSpeed(20);

function changeYear(newValue) {
  delete car1.carYear;
  car1.carYear = newValue;
  console.log(car1);
}
changeYear(2018);

function addDriver(driver0) {
  car1.driver = driver0;
  console.log(car1);
}
addDriver({ name: "Gogi", age: 32, nationality: "Georgia" });

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

function Zolushka(name, age, noga) {
  this.name = name;
  this.age = age;
  this.noga = noga;
}

let zolushki = [];
for (i = 0; i < 10; i++) {
  let Zolushka1 = new Zolushka("Olga" + i, 23 + i, 33 + i);
  zolushki.push(Zolushka1);
}
console.log(zolushki);

function Printc(name, age, nogaNajdena) {
  this.name = name;
  this.age = age;
  this.nogaNajdena = nogaNajdena;
}
let Printc1 = new Printc("Vilgelm", 35, 36);
console.log(Printc1);
for (i = 0; i < zolushki.length; i++) {
  if (zolushki[i].noga === Printc1.nogaNajdena) {
    console.log(`Мою избранницу зовут ${zolushki[i].name}`);
  }
}

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function Zolushka(name, age, noga) {
  this.name = name;
  this.age = age;
  this.noga = noga;
}

let zolushki = [];
for (i = 0; i < 10; i++) {
  let Zolushka1 = new Zolushka("Olga" + i, 23 + i, 33 + i);
  zolushki.push(Zolushka1);
}
console.log(zolushki);

function Printc(name, age, nogaNajdena) {
  this.name = name;
  this.age = age;
  this.nogaNajdena = nogaNajdena;
}
let Printc1 = new Printc("Vilgelm", 35, 36);
console.log(Printc1);

function poisk() {
  for (i = 0; i < zolushki.length; i++) {
    if (zolushki[i].noga === Printc1.nogaNajdena) {
      console.log(`Мою избранницу зовут ${zolushki[i].name}`);
    }
    // else {
    //   console.log(`Здесь нет моей избрнницы`);
    // }
  }
}
poisk();

// з великои букви назва 21:14
// наслидування 21:37
// наслидування полиморфизм 21:29
