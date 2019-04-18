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

    chooseNewDate = document.querySelector(".new_task_date_modal_text"),//Ввод даты в ручную
    changeDate = document.querySelector(".adoption_date.yes"), // Принять изменение даты
    cancelDate = document.querySelector(".adoption_date.no"), // Отменить изменение даты
    newDateModal = document.querySelector(".new_task_date_modal"), // Модалка с датой

    addNewTask = document.querySelector("#add_new_task"),
    addNewTaskBtn = document.querySelector("#add_new_task .new_task_button"), // Добавить новое событие
    newTaskFilling = document.getElementById("new_task_filling"), // Заполнение нового события
    newTaskDate = document.querySelector(".new_task_date p"), // Дата в заполнении события
    textEditor = document.querySelector(".text_editor"), // Поле вводв текста
    cancel = document.querySelector(".cancel"), // Отмена добавления
    add = document.querySelector(".add"), // Добавить событие
    tasksList = document.querySelector(".tasks_list"); // Список всех задач


var appData = {
    theme: " ",
    event: {
        priority: "",
        color: "",
        project: "",
        date: "",
        label:"",
        text:""
    }
}


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
appData.theme = youTheme.textContent;
themesElem.forEach(function (item) {
    item.addEventListener("click", () => {
        myBody.className = "";
        if (item.id == "dark") {
            myBody.classList.add("dark");
            youTheme.textContent = myBody.className;
            appData.theme = youTheme.textContent;
        } else if (item.id == "orange") {
            myBody.classList.add("orange");
            youTheme.textContent = myBody.className;
            appData.theme = youTheme.textContent;
        } else if (item.id == "green") {
            myBody.classList.add("green");
            youTheme.textContent = myBody.className;
            appData.theme = youTheme.textContent;
        } else if (item.id == "blue") {
            myBody.classList.add("blue");
            youTheme.textContent = myBody.className;
            appData.theme = youTheme.textContent;
        } else if (item.id == "white") {
            myBody.classList.add("white");
            youTheme.textContent = myBody.className;
            appData.theme = youTheme.textContent;
        }
    });
});

//Записать текущую дату
var date = new Date();
var currDate = date.getDate();
var currMonth = date.getMonth();
var currYear = date.getFullYear();

function getWeekDay(date) {
    var days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    return days[date.getDay() - 1];
}

function getMonthName(date) {
    var months = ['Декабрь', 'Январь', 'Фефраль', 'Март', 'Апрель', 'Март', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь'];
    return months[date.getMonth() + 1];
}

today.textContent = getWeekDay(date) + ". " + currYear.toString() + " " + getMonthName(date);
newTaskDate.textContent = currDate + " " + getMonthName(date);
appData.today = today.textContent;
appData.event.date = today.textContent;


// Изменить дату
newTaskDate.addEventListener("click", () => {
    console.log("2222");
    if(newDateModal.classList.contains('show')){
        newDateModal.classList.remove("show");
    } else {
        newDateModal.classList.remove("show");
    }
});


// Добавление нового события
addNewTaskBtn.addEventListener("click", () => {
    textEditor.textContent = "";
    if (newTaskFilling.classList.contains('expanded')) {
        newTaskFilling.classList.remove("expanded");
        addNewTaskBtn.classList.add("show");
        addNewTaskBtn.classList.remove("hide");
    } else {
        newTaskFilling.classList.add("expanded");
        addNewTaskBtn.classList.remove("show");
        addNewTaskBtn.classList.add("hide");
    }
});

// Закрыть форму добавления события
cancel.addEventListener("click", () => {
    newTaskFilling.classList.remove("expanded");
    addNewTaskBtn.classList.add("show");
    addNewTaskBtn.classList.remove("hide");
});

// Добавить событие
add.addEventListener("click", () => {
    let taskText = textEditor.textContent,
        taskListItem = document.createElement("div");
    taskListItem.classList.add("task_list_item");
    if (textEditor.textContent != "") {
        taskListItem.innerHTML = taskText;
        tasksList.appendChild(taskListItem);
        newTaskFilling.classList.remove("expanded");
        addNewTaskBtn.classList.add("show");
        addNewTaskBtn.classList.remove("hide");
        appData.event.text = taskText;
    }
});





console.log(appData);


/* 
Дата -
Текст + 
Метка - 
Приоритет - 
Цвет - 
Проект - 

*/