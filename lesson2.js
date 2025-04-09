// Запрашиваем у пользователя его возраст
let age = prompt("Ваш возраст");

// Выводим сообщение с возрастом
document.getElementById("output").innerHTML += 'Вам ${age} лет.<br>'; 

// Запрашиваем у пользователя его имя
let name = prompt("Как вас зовут?");

// Выводим приветственное сообщение с именем пользователя
document.getElementById("output").innerHTML += 'Добро пожаловать на сайт, ${name}!'; 