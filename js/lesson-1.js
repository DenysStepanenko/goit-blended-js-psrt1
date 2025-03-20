//Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().


const number = Number(prompt("Введіть число:"));
if (number === 10) {
    alert("Вірно");
} else {
    alert("Невірно");
}


//У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

const min = Math.floor(Math.random() * (59 - 0) + 0);
if (min >= 0 && min <= 15) {
    alert(`${min} входить в першу чверть`);
} else if (min > 15 && min <= 30) {
    alert(`${min} входить в другу чверть`);
} else if (min > 30 && min <= 45) {
    alert(`${min} входить в третю чверть`);
} else {
    alert(`${min} входить в четверту чверть`);
}

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

const num = Number(prompt("Введіть значення від 1 до 4"));
let result;
switch (num) {
    case 1:
        result = "Зима";
        break;
    case 2:
        result = "Весна";
        break;
    case 3:
        result = "Літо";
        break;
    case 4:
        result = "Осінь";
        break;
    default:
        result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
} alert(result);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const totalMinutes = Number(prompt("Введіть кількість хвилин"));
const hours = Math.floor(totalMinutes / 60);
const step1 = totalMinutes % 60;
const step2 = step1.toString();
const minutes = step2.padStart(2, "0");
alert(`Time ${hours}:${minutes}`);

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

const login = prompt("Введіть логін");
const adminLogin = "Адмін";
const adminPwd = "Я головний";
const wrongPwd = "Невірний пароль!";
const messageAdpwd = "Добрий день!";
const messageCancel = "Скасовано";
const messageUnknown = "Я вас не знаю";
let pwd;
if (login === null || login === "") {
    alert(messageCancel);
} else if (login === adminLogin) {
    pwd = prompt("Введіть пароль");
} else {
    alert(messageUnknown);
} if (pwd === adminPwd) {
    alert(messageAdpwd);
} else {
    alert(wrongPwd);
}

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

let i = 0;
while (i <= 20) {
    console.log(i);
    i++;
}

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
    let sum = 0;
    for (let i = max; i >= min; i--) {
        console.log(i);
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function getNumCheck(a, b) {
    const message = "Not a number!";
    if (typeof a === "number" && typeof b === "number") {
        return Math.min(a, b);
    } else {
        return message;
    }
}


// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).
function isAdult(age) {
    if (typeof age !== "number" || isNaN(age)) {
        return "Please enter a valid number!";
    }
    if (age <= 18) {
        const confirm = prompt("Підтвердіть свій вік");
        const confirmedAge = Number(confirm);
        if (isNaN(confirmedAge)) {
            return "Invalid confirmation age!";
        }
        return confirmedAge >= 18;
    }
    return true;
}