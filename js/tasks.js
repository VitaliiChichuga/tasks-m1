// ---1---
// Объявление переменных
// Переменные используются для хранения данных и состоят из идентификатора (имени) и области в памяти, где хранится их значение. Переменную можно представить как коробку с надписью (именем), в которой что-то лежит (значение).
// <ключевое слово> <имя переменной> = <значение>
// Объявление переменной начинается с ключевого слова const. Такая переменная должна быть сразу инициализирована значением, после чего его нельзя переопределить.
// Внимание
// Создание переменной без ключевого слова const приведёт к ошибке.
// const age = 20;
// const username = "Mango";
// const socialProfileTag = "@gluck";
// const totalWorkerSalary = 4052;
// В JavaScript имя перенной записывается в camelCase-нотации. Первое слово пишется строчными буквами, а каждое последующее начинается с заглавной. Имена чувствительны к регистру, то есть переменные user, usEr и User различны.

// ЗАДАНИЕ
// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку.При объявлении присвой переменным следующие характеристики товара:
// название - строка "Droid"
// цена за штуку - число 2000

// const productName = 'Droid'
// const pricePerItem = 2000
// console.log(productName);
// console.log(pricePerItem);


// ---2---


// ЗАДАНИЕ
// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов.Переопредели значения переменных pricePerItem и productName после их объявления.
// let productName = "Droid";
// let pricePerItem = 2000;
// productName = 'Repair droid';
// pricePerItem = pricePerItem + 1500;
// console.log(productName);
// console.log(pricePerItem);


// ---3---Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.
// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// let topSpeed = 160;
// const distance = 617.54;
// let login = 'mango935';
// const isOnline = true;
// const isAdmin = false;


// ---4---Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);


// ---5---Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;



// ---6---Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:
// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);



// ---7---Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". После объявления вызови функцию sayHi.

// function sayHi() {
//   console.log('Hello, this is my first function!');  
// }
// sayHi();



// ---8---Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

// function add(a, b, c) {
//   console.log(`Addition result equals ${a+b+c}`);  
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);



// ---9---Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// function add(a, b, c) {
//     return a + b + c;
//  }
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));



// ---10---Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits", где <product name> и <product price> это значения параметров name и price. Используй синтаксис шаблонных строк.

// function makeMessage (name, price) {
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     return message;
// };



// ---11---Задача: математические операторы 2.0
// Задание
// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

// Тесты
// Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem)
// Вызов calculateTotalPrice(5, 100) возвращает 500
// Вызов calculateTotalPrice(8, 60) возвращает 480
// Вызов calculateTotalPrice(3, 400) возвращает 1200
// Вызов calculateTotalPrice(1, 3500) возвращает 3500
// Вызов calculateTotalPrice(12, 70) возвращает 840
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
       
    
    function calculateTotalPrice (orderedQuantity, pricePerItem) {
    const totalPrice = (orderedQuantity * pricePerItem);
        const calculateTotalPrice = (5, 100);
    // const calculateTotalPrice = (8, 60);
    // const calculateTotalPrice = (3, 400);
    // const calculateTotalPrice = (1, 3500);
    // const calculateTotalPrice = (12, 70);
    return totalPrice;
 }
