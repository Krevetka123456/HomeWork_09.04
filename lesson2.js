let age = prompt("Ваш возраст"); // Запрашиваем у пользователя его возраст
document.wert("output").innerHTML += 'Вам ${age} лет.<br>'; // Выводим сообщение с возрастом
let name = prompt("Как вас зовут?");// Запрашиваем у пользователя его имя
document.wert("output").innerHTML += 'Добро пожаловать на сайт, ${name}!'; // Выводим приветственное сообщение с именем пользователя






let a = 13;//вводим переменную
let b = 5; //вводим вторую переменную
console.log(`Остаток от деления ${a} на ${b} равен ${a % b}`); // Выведет: 3
let x;
alert(x); // Выведет: undefined
// Причина: переменная x объявлена, но ей не присвоено значение.
alert('abc' * 3); // Выведет: NaN
// Причина: строку 'abc' нельзя умножить на число, результат - Not a Number.
alert(1 / 0);    // Выведет: Infinity
alert(-1 / 0);   // Выведет: -Infinity
// Причина: деление на 0 в JavaScript возвращает специальное значение Infinity или -Infinity.







let num1 = 10;// вводим переменную
let num2 = 5;// вводим вторую переменную
console.log(num1 + num2); // Здесь ошибки нет
consoel.log("Ошибка в этой строке"); // Ошибка: consoel вместо console
// Консоль покажет ошибку: ReferenceError: consoel is not defined
// Линия ошибки: строка 8
// 2. Сумма двух переменных
let d = '2';
let f = '3';
console.log(`Сумма строковых переменных: ${a + b}`); // Выведет: 23
// Преобразование строк в числа для корректного сложения
let numA = Number(a);
let numB = Number(b);
console.log(`Сумма чисел: ${numA + numB}`); // Выведет: 5
// 3. Ввод чисел пользователем и вычисления
let userNum1 = Number(prompt("Введите первое число"));
let userNum2 = Number(prompt("Введите второе число"));
console.log(`Сумма чисел равна ${userNum1 + userNum2}`);
console.log(`Разность чисел равна ${userNum1 - userNum2}`);
console.log(`Произведение чисел равно ${userNum1 * userNum2}`);
console.log(`Частное чисел равно ${userNum1 / userNum2}`);
console.log(`Остаток от деления чисел равен ${userNum1 % userNum2}`);







console.log(String(true));  
//Метод String(true) преобразует логическое значение true в строку.
//Ожидаемый результат: "true"

console.log('a' + true);  
//Оператор + объединяет строку 'a' и логическое значение true, преобразуя true в строку.
//Ожидаемый результат: "atrue"

console.log(Number(true));  
//Метод Number(true) преобразует логическое значение true в число.
//Ожидаемый результат: 1

console.log(true + 1); 
//Логическое значение true автоматически преобразуется в число 1, и выполняется операция сложения.
//Ожидаемый результат: 2

console.log(true + true); 
//Каждое значение true преобразуется в 1, и выполняется сложение.
//Ожидаемый результат: 2

console.log(true - true); 
//Каждое значение true преобразуется в 1, и выполняется вычитание.
//Ожидаемый результат: 0

console.log(String(true) + Number(true));  
//String(true) преобразует true в строку "true".
//Number(true) преобразует true в число 1.
//Оператор + объединяет строку "true" и число 1, преобразуя число в строку.
//Ожидаемый результат: "true1"





// 1. Условный оператор для проверки числа
let number = Number(prompt("Введите число:")); 
// Создаем переменную number и присваиваем ей числовое значение, введенное пользователем через окно ввода prompt.

if (number > 5) { 
    console.log("Число больше 5"); 
}
// Проверяем, больше ли введенное число 5. Если да, выводим сообщение "Число больше 5" в консоль.

else if (number < 5) { 
    console.log("Число меньше 5"); 
}
// Если число меньше 5, выводим сообщение "Число меньше 5" в консоль.

else { 
    console.log("Число равно 5"); 
}
// Если ни одно из условий выше не выполнено (т.е. число равно `5`), выводим сообщение "Число равно 5".

// 2. Проверка равенства значений переменных
let test1 = prompt("Введите значение для test1:"); 
// Создаем переменную test1 и сохраняем в нее строковое значение, введенное пользователем.

let test2 = prompt("Введите значение для test2:"); 
// Создаем переменную test2 и сохраняем в нее строковое значение, введенное пользователем.

if (test1 === test2) { 
    console.log("Значения равны."); 
}
// Проверяем, равны ли значения test1 и test2 строго (сравнение без приведения типов). Если равны, выводим "Значения равны" в консоль.

else { 
    console.log("Значения не равны."); 
}
// Если значения переменных не равны, выводим "Значения не равны" в консоль.

// 3. Нахождение минимального числа
let num11 = Number(prompt("Введите первое число:")); 
// Создаем переменную num1 и сохраняем в нее числовое значение, введенное пользователем.

let num22 = Number(prompt("Введите второе число:")); 
// Создаем переменную num2 и сохраняем в нее числовое значение, введенное пользователем.

if (num1 < num2) { 
    console.log(`Минимальное число: ${num1}`); 
}
// Проверяем, меньше ли num1, чем num2. Если да, выводим num1 как минимальное число в консоль.

else if (num1 > num2) { 
    console.log(`Минимальное число: ${num2}`); 
}
// Если num2 меньше, чем num1, выводим num2 как минимальное число в консоль.

else { 
    console.log("Числа равны."); 
}
// Если числа равны, выводим сообщение "Числа равны" в консоль.

// 4. Проверка диапазона числа
let value = Number(prompt("Введите число:")); 
// Создаем переменную value и сохраняем в нее числовое значение, введенное пользователем.

if (value > 0 && value < 15) { 
    console.log("Число больше нуля и меньше 15."); 
}
// Проверяем, входит ли число в диапазон больше 0 и меньше 15. Если да, выводим сообщение в консоль.

else { 
    console.log("Число не входит в диапазон от 0 до 15."); 
}
// Если число не попадает в заданный диапазон, выводим сообщение "Число не входит в диапазон от 0 до 15".







// Пользователь вводит значения переменных num1 и num2
let num12 = Number(prompt("Введите значение переменной num1:"));
// Создаем переменную num1. prompt открывает окно ввода, в котором пользователь вводит значение. 
// Затем введенное значение преобразуется в число с помощью Number(), чтобы гарантировать корректное выполнение арифметических операций.

let num21 = Number(prompt("Введите значение переменной num2:"));
// Создаем переменную num2. Аналогично, ввод пользователя преобразуется в число через Number().

if (num12<= 1 && num21 >= 3) {
// Проверяем условия:
// 1. num1 <= 1 — значение переменной num1 меньше или равно единице.
// 2. num2 >= 3 — значение переменной num2 больше или равно трём.
// Оператор && (логическое "И") проверяет, выполняются ли оба условия одновременно.

console.log("Условие выполнено: num1 меньше или равна 1, а num2 больше или равна 3.");
// Если оба условия выполняются, выводим сообщение в консоль, сообщающее о выполнении условий.
} else {
// Если хотя бы одно из условий не выполнено (например, num1 больше 1 или num2 меньше 3), переходим в этот блок.

console.log("Условие не выполнено.");
// Выводим сообщение в консоль, указывающее, что заданное условие не выполнено.
}






// Проверяем условие с помощью тернарного оператора
let test = true;
console.log(test === true ? '+++' : '---');







// Пользователь вводит значение переменной day через окно ввода
let day = Number(prompt("Введите число дня месяца (от 1 до 31):"));
// Мы создаем переменную day и сохраняем в нее значение, которое вводит пользователь через prompt.
// С помощью Number() преобразуем введенное значение из строки в число, чтобы затем работать с ним в условиях.

// Определяем декаду месяца
if (day >= 1 && day <= 10) {
    console.log("Первая декада месяца.");
}
// Условие проверяет, входит ли введенное число в диапазон от 1 до 10 (первая декада).
// Если условие истинно, выводим сообщение "Первая декада месяца" в консоль.

else if (day >= 11 && day <= 20) {
    console.log("Вторая декада месяца.");
}
// Проверяем, входит ли число в диапазон от 11 до 20 (вторая декада).
// Если условие истинно, выводим сообщение "Вторая декада месяца" в консоль.

else if (day >= 21 && day <= 31) {
    console.log("Третья декада месяца.");
}
// Проверяем, входит ли число в диапазон от 21 до 31 (третья декада).
// Если условие истинно, выводим сообщение "Третья декада месяца" в консоль.

else {
    console.log("Введенное число вне диапазона от 1 до 31.");
}
// Если введенное число не принадлежит диапазону от 1 до 31, выводим сообщение об ошибке,
// указывая пользователю, что он ввел некорректное значение.








// Запрашиваем у пользователя число
let number1 = Number(prompt("Введите положительное целое число:")); 
// Создаем переменную number и запрашиваем у пользователя ввод числа через окно ввода prompt.
// Используем Number() для преобразования введенного значения из строки в число.
// Это гарантирует, что мы можем выполнять арифметические операции на этом значении.


// Вычисляем разряды числа
let hundreds = Math.floor(number / 100); 
// Делим число на 100, чтобы найти количество сотен, и округляем результат вниз до ближайшего целого числа с помощью Math.floor.
// Например, если number = 456, то 456 / 100 = 4.56, а Math.floor(4.56) вернет 4.

let tens = Math.floor((number % 100) / 10); 
// Сначала берем остаток от деления числа на 100 (`number % 100`), чтобы убрать сотни.
// Например, если number = 456, то 456 % 100 = 56.
// Затем делим это значение на 10 и с помощью Math.floor округляем вниз, чтобы получить количество десятков. 
// Например, 56 / 10 = 5.6, а Math.floor(5.6) вернет 5.

let units = number % 10; 
// Берем остаток от деления числа на 10, чтобы получить количество единиц.
// Например, если number = 456, то 456 % 10 = 6. Это число соответствует последней цифре введенного значения.


// Выводим разряды числа
console.log(`Сотни: ${hundreds}`); 
// Выводим количество сотен в консоль. Используем шаблонные строки (backticks) для удобного форматирования текста.

console.log(`Десятки: ${tens}`); 
// Выводим количество десятков в консоль. Также используем шаблонные строки.

console.log(`Единицы: ${units}`); 
// Выводим количество единиц в консоль. Это последняя цифра введенного числа.