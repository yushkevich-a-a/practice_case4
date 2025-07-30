"use strict"

const btn = document.getElementById('button-input');
const input = document.getElementById('input-date');
const enteredDate = document.getElementById('entered-data');
const countDayToNY = document.getElementById('count_day_to_new_year');
const isLeapYear = document.getElementById('leap_year');

/**
 * функция устанавливающая начальное значение поля input если не было установлено никаких других значений
 * начальное значение - дата сегодня
 * @returns 
 */
const setTodayDateToInput = () => input.value = new Date().toISOString().substring(0,10);

/**
 * 
 * @param {number} checkedYear - проверяемый год
 * @returns {boolean} если год является високосным то вернтся true иначе false
 */
const checkIsLeapYear = (checkedYear) => (checkedYear % 4 === 0 && (checkedYear % 100 !== 0 || checkedYear % 400 === 0))

/**
 * 
 * @param {Date} enteredDate принимает дату введенную пользователем в инпут
 * @returns {number} возвращает полное колличество дней оставшееся до нового года
 */
const countOfDayToNewYear = (enteredDate) => { 
    const lastDateYear = new Date(`12-31-${enteredDate.getFullYear()} 23:59:59`);  
    const msPerDay = 24 * 60 * 60_000;
    return Math.floor((lastDateYear.getTime() - enteredDate.getTime()) / msPerDay); 
}

setTodayDateToInput() // установка начального значения поля input


btn.addEventListener('click', (e) => {
    const enteredInputDate = new Date(input.value);  
    enteredDate.innerText = input.value;
    countDayToNY.innerText = countOfDayToNewYear(enteredInputDate);
    isLeapYear.innerText = checkIsLeapYear(enteredInputDate.getFullYear()) ? 'високосный' : 'невисокосный';
})