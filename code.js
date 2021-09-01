let dayNumber= document.querySelector('.days'); // Дни
let monthInput = document.querySelector('.month'); // Месяцы
let yearInput = document.querySelector('.year'); // Годы
let button = document.querySelector('.button'); // Кнопка
let firstWorkDay = []; // Ряд первых рабочих дней с начала года
let secondWorkDay = []; // Ряд вторых рабочих дней с начала года


// Создаём ряды. Функция принимает год и отдаёт ряды рабочих дней

function yearArray (year) {
    switch (year) {
        case '2021': 
        for (var i=3;i<366;i+=4) {
            firstWorkDay.push(i)
            if (i!==365)
            secondWorkDay.push(i+1)
        };
        break;
        case '2022':
            for (var i=2;i<366;i+=4) {
                firstWorkDay.push(i)
                if (i!==365)
                secondWorkDay.push(i+1)
            };
            break;
        case '2023':
            for (var i=1;i<366;i+=4) {
                firstWorkDay.push(i)
                if (i!==365)
                secondWorkDay.push(i+1)
            };
            break;
    }
}

// Функция принимает дату и дату и отдаёт число дня с начала года

let january=0;
let february=31;
let march=february+28;
let april=march+31;
let may=april+30;
let june=may+31;
let july=june+30;
let august=july+31;
let september=august+31;
let october=september+30;
let november=october+30;
let december=november+30;

let daysInMonth = {
    'january':january,
    'february':february,
    'march':march,
    'april':april,
    'may':may,
    'june':june,
    'july':july,
    'august':august,
    'september':september,
    'october':october,
    'november':november,
    'december':december
}

function dayInYear(day, month) {
    return daysInMonth[month] + Number(day)
}

// Сравние рядов для определения выходного и рабочего дня

function application(x) {
    let result = 'Это выходной';
    for (let j=0;j<firstWorkDay.length;j++) {
        
        if (firstWorkDay[j]===x) {
            result = 'Это первый рабочий день';
            return result
        } else if (secondWorkDay[j]===x) {
            result = 'Это второй рабочий день';
            return result
        }
    }
    return result
}

// Действия по клику

button.addEventListener('click', function() {
    yearArray(yearInput.value);
    alert(application(dayInYear(dayNumber.value, monthInput.value)));
    firstWorkDay = []; // обнуляем ряд
    secondWorkDay = []; // обнуляем ряд
})