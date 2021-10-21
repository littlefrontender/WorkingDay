const dayNumber = document.querySelector('.days'); // Дни
const monthInput = document.querySelector('.month'); // Месяцы
const yearInput = document.querySelector('.year'); // Годы
const button = document.querySelector('.button'); // Кнопка
let firstWorkDay = []; // Ряд первых рабочих дней с начала года
let secondWorkDay = []; // Ряд вторых рабочих дней с начала года

// Создаём числа дат в верстке

function number(parentSelector) {
    let option;

    for (let i=1; i<=31; i++) {
        option = document.createElement('option');
        option.innerHTML = `${i}`;
        parentSelector.append(option);
    }
}

number(dayNumber);

// Создаём ряды. Функция принимает год и отдаёт ряды рабочих дней

function yearArray (year) {
    switch (year) {
        case '2021': 
        for (var i=3;i<366;i+=4) {
            firstWorkDay.push(i);
            if (i!==365) {
            secondWorkDay.push(i+1);
            }
        }
        break;
        case '2022':
            for (var j=2;j<366;j+=4) {
                firstWorkDay.push(j);
                if (j!==365) {
                secondWorkDay.push(j+1);
                }
            }
            break;
        case '2023':
            for (var k=1;k<366;k+=4) {
                firstWorkDay.push(k);
                if (k!==365) {
                secondWorkDay.push(k+1);
                }
            }
            break;
    }
}

const january = 0;
const february = 31;
const march = february + 28;
const april = march + 31;
const may = april + 30;
const june = may + 31;
const july = june + 30;
const august = july + 31;
const september = august + 31;
const october = september + 30;
const november = october + 31;
const december = november + 30;

const daysInMonth = {
    'january': january,
    'february': february,
    'march': march,
    'april': april,
    'may': may,
    'june': june,
    'july': july,
    'august': august,
    'september': september,
    'october': october,
    'november': november,
    'december': december
};

// Функция принимает дату и отдаёт число дня с начала года

function dayInYear(day, month) {
    return daysInMonth[month] + Number(day);
}

// Сравние рядов для определения выходного и рабочего дня

function application(x) {
    let result = 'Это выходной';
    for (let j=0;j<firstWorkDay.length;j++) {
        
        if (firstWorkDay[j]===x) {
            result = 'Это первый рабочий день';
            return result;
        } else if (secondWorkDay[j]===x) {
            result = 'Это второй рабочий день';
            return result;
        }
    }
    return result;
}

// Создаём определенные условия, когда программа должна выдавать ошибку

function conditions () {
    if (dayNumber.value == 29 && monthInput.value === 'february' ||
        dayNumber.value == 30 && monthInput.value === 'february' ||
        dayNumber.value == 31 && monthInput.value === 'february' ||
        dayNumber.value == 31 && monthInput.value === 'april' ||
        dayNumber.value == 31 && monthInput.value === 'june' ||
        dayNumber.value == 31 && monthInput.value === 'september' ||
        dayNumber.value == 31 && monthInput.value === 'november'
    ) {
        alert('Введена неправильная дата!');
    } else {
        alert(application(dayInYear(dayNumber.value, monthInput.value)));
    }
}

// Действия по клику

button.addEventListener('click', function() {
    yearArray(yearInput.value);
    conditions();
    firstWorkDay = []; // обнуляем ряд
    secondWorkDay = []; // обнуляем ряд
});
