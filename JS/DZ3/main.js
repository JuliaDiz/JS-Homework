1-- створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу

let dog={poroda:'doberman', rost: '76', color: 'black'; character: 'rude', physicalStatus:'strong'};
let men={rassa:'afro', rost: '176', HairColor: 'black'; character: 'kind', physicalStatus:'veryStrong'};
let car={marka:'audi', weight: '100', color: 'red'; quickness: 'fast', avail:'workdays'};
let flat={komnat:'3', metrov2: '73', floor: '3'; propisano: '2', avail:'forTwoYears'};
let book={str:'777', zhanr: 'detective', outhor: 'ConanDoil'; colour: 'grey'; where: 'library'};
________________________________________________________________________________________

2-- Створити масив та вивести його в консоль:
- з 5 собак
- 3 5 людей
- з 5 автомобілів

let dogs=['dog', 'chihua', 'york', 'doberman', 'balonka'];
console.log(dogs);
let people=['afro', 'china', 'europe', 'north', 'mexico'];
console.log(people);
let avto=['audi', 'jaguar', 'porshe', 'buick', 'bugatti'];
console.log(avto);
________________________________________________________________________________________

3-- створити об'єкт (не меньше 5ти властивостей) який описує, 
одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
- будинок
- водій
- іграшку
- стіл
- сумка

let house={floor: 9, history: 'new', owner: 'OrbiGroup', 
manager: ['OSBB', 'Zhek', 'BabaGala'],
live: {people: 'Vasil', animals: 'Cat', children: 'Olga'}}
console.log(house);

let driver={pravaDo: 2035, citizen: 'Ukraine', aim: 'work',
live: {country: 'Ukraine', city: 'Dnipro', str: 'Pola'},
car: ['opel','сhevrolet','renault']}
console.log(driver);

let toy={type: 'doll', colour: 'white', sex: 'femail',
live: {country: 'Ukraine', city: 'Kyiv', str: 'Hmelnitskogo'},
owner: ['daughter','sister','mother']}
console.log(toy);

let table={type: 'wood', colour: 'white', height: 75,
where: {country: 'France', city: 'Orlean', str: 'Monet'},
owner: ['father','brother','granny']}
console.log(table);

let bag={color: 'yellow', history: 'new', owner: 'Olga', 
shop: ['ATB', 'Ashan', 'Silpo'],
made: {country: 'China', material: 'Fur', style: 'disco'}}
console.log(bag);
________________________________________________________________________________________


4 Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
console.log(
- статус Андрія
- статус Максима
- ім'я передостаннього об'єкту
- ім'я третього об'єкта
- вік Олега
- вік Олі
- вік + ім'я 5го об'єкта
- вік + сатус Анни
Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!