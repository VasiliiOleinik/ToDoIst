'use strict';

let showProjects = document.querySelector("#projects .title_block"), // Шапка проектов
    projects = document.getElementById("projects"), // Общий блок проектов
    projectContain = document.querySelector(".project_contain"), // Контейнер проектов

    showFilters = document.querySelector("#filters .title_block"), // Шапка фильтров
    filters = document.getElementById("filters"), // Общий блок фильтров
    filtersContain = document.querySelector(".filters_contain"), //  Контейнер фльтров

    showThemes = document.querySelector("#themes .title_block"), // Шапка тем
    themes = document.getElementById("themes"), // Общий блок тем
    themesContain = document.querySelector(".themes_contain"), // Контейнер тем
    themesElem = document.querySelectorAll(".themes_elem"),

    myBody = document.querySelector("body"), // Список тем

    howMutchTasks = document.querySelector(".how_muth span"), // Сколько всего задач
    youTheme = document.querySelector(".you_theme span"), // Текущая тема
    today = document.querySelector("#today span"), // Текущая дата

    addNewTask = document.querySelector("#add_new_task .new_task_button"),// Добавить новое событие
    newTaskFilling = document.getElementById("new_task_filling"); // Заполнение нового события


let orangeTheme = document.getElementById("orange"),
    darkTheme = document.getElementById("dark");



// Показать список проектов
showProjects.addEventListener("click", () => {
    if (projects.classList.contains('expanded')) {
        projects.classList.remove("expanded");
    } else {
        projects.classList.add("expanded");
    }
});

// Показать список фильтров
showFilters.addEventListener("click", () => {
    if (filters.classList.contains('expanded')) {
        filters.classList.remove("expanded");
    } else {
        filters.classList.add("expanded");
    }
});

// Показать список тем
showThemes.addEventListener("click", () => {
    if (themes.classList.contains('expanded')) {
        themes.classList.remove("expanded");
    } else {
        themes.classList.add("expanded");
    }
});

// Переключечние тем
youTheme.textContent = myBody.className;
themesElem.forEach(function (item) {
    item.addEventListener("click", () => {
        myBody.className = "";
        if (item.id == "dark") {
            myBody.classList.add("dark");
            youTheme.textContent = myBody.className;
        } else if (item.id == "orange") {
            myBody.classList.add("orange");
            youTheme.textContent = myBody.className;
        } else if (item.id == "green") {
            myBody.classList.add("green");
            youTheme.textContent = myBody.className;
        } else if (item.id == "blue") {
            myBody.classList.add("blue");
            youTheme.textContent = myBody.className;
        } else if (item.id == "white") {
            myBody.classList.add("white");
            youTheme.textContent = myBody.className;
        }
    });
});

//Записать текущую дату
var date = new Date();
var currDate = date.getDate() + 1;
var currMonth = date.getMonth() + 1;
var currYear = date.getFullYear();

function getWeekDay(date) {
    var days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    return days[date.getDay()];
}

function getMonthName(date) {
    var months = ['Декабрь', 'Январь', 'Фефраль', 'Март', 'Апрель', 'Март', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь'];
    return months[date.getMonth()];
}

today.textContent = getWeekDay(date) + ". " + currYear.toString() + " " + getMonthName(date);


// Добавление нового события
addNewTask.addEventListener("click", () => {
    if(newTaskFilling.classList.contains('expanded')){
        newTaskFilling.classList.remove("expanded");
    } else {
        newTaskFilling.classList.add("expanded");
    }
});