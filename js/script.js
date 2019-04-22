"use strict";

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
  chooseNewDate = document.querySelector(".new_task_date_modal_text"), //Ввод даты в ручную
  changeDate = document.querySelector(".adoption_date.yes"), // Принять изменение даты
  cancelDate = document.querySelector(".adoption_date.no"), // Отменить изменение даты
  newDateModal = document.querySelector(".new_task_date_modal"), // Модалка с датой

  chooseColor = document.querySelector(".choose_color"), // Кнопка цветов
  chooseColorModal = document.querySelector(".choose_color_modal"), // Модалка цветов
  chooseColorItem = document.querySelectorAll(".choose_color_item"), // Элемент цветов
  eventColor = document.querySelector(".event_color"), // Цвет события

  choosePriority = document.querySelector(".choose_priority"), // Кнопка цветов
  choosePriorityModal = document.querySelector(".choose_priority_modal"), // Модалка цветов
  choosePriorityItem = document.querySelectorAll(".choose_priority_item"), // Элемент цветов
  eventPriority = document.querySelector(".event_priority"), // Цвет события


  addNewTask = document.querySelector("#add_new_task"),
  addNewTaskBtn = document.querySelector("#add_new_task .new_task_button"), // Добавить новое событие
  newTaskFilling = document.getElementById("new_task_filling"), // Заполнение нового события
  newTaskDate = document.querySelector(".new_task_date p"), // Дата в заполнении события
  textEditor = document.querySelector(".text_editor"), // Поле вводв текста
  cancel = document.querySelector(".cancel"), // Отмена добавления
  add = document.querySelector(".add"), // Добавить событие
  tasksList = document.querySelector(".tasks_list"); // Список всех задач

const appData = {
  theme: " ",
  event: {
    priority: "",
    color: "",
    project: "",
    date: "",
    text: ""
  }
};

// Показать список проектов
showProjects.addEventListener("click", () => {
  if (projects.classList.contains("expanded")) {
    projects.classList.remove("expanded");
  } else {
    projects.classList.add("expanded");
  }
});

// Показать список фильтров
showFilters.addEventListener("click", () => {
  if (filters.classList.contains("expanded")) {
    filters.classList.remove("expanded");
  } else {
    filters.classList.add("expanded");
  }
});

// Показать список тем
showThemes.addEventListener("click", () => {
  if (themes.classList.contains("expanded")) {
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
  var days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  return days[date.getDay()];
}

function getMonthName(date) {
  var months = [
    "Декабрь",
    "Январь",
    "Фефраль",
    "Март",
    "Апрель",
    "Март",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь"
  ];
  return months[date.getMonth() + 1];
}

today.textContent =
  getWeekDay(date) + ". " + currYear.toString() + " " + getMonthName(date);
newTaskDate.textContent = currDate + " " + getMonthName(date);
appData.today = today.textContent;
appData.event.date = today.textContent;

// Изменить дату
newTaskDate.addEventListener("click", () => {
  if (newDateModal.classList.contains("show")) {
    newDateModal.classList.remove("show");
  } else {
    newDateModal.classList.add("show");
  }
});

// Отменить изменение даты
cancelDate.addEventListener("click", () => {
  newDateModal.classList.remove("show");
  chooseNewDate.textContent = "";
});

// Применить изменение даты
changeDate.addEventListener("click", () => {
  if (chooseNewDate.textContent != "" && chooseNewDate.textContent.length > 5) {
    newDateModal.classList.remove("show");
    newTaskDate.textContent = chooseNewDate.textContent;
    appData.event.date = chooseNewDate.textContent;
    chooseNewDate.textContent = "";
  }
});

// Открыть модалку цветов
chooseColor.addEventListener("click", () => {
  if (chooseColorModal.classList.contains("show")) {
    chooseColorModal.classList.remove("show");
  } else {
    chooseColorModal.classList.add("show");
  }
});

// Переключечние цветов
appData.event.color = eventColor.getAttribute("data-you-color");
var changeColor;
chooseColorItem.forEach(function (item) {
  item.addEventListener("click", () => {
    eventColor.className = "";
    if (item.getAttribute("data-color") == "dark") {
      changeColor = item.getAttribute("data-color");
      eventColor.setAttribute("data-you-color", changeColor);
      eventColor.className = "event_color dark";
      appData.event.color = eventColor.getAttribute("data-you-color");
    } else if (item.getAttribute("data-color") == "orange") {
      changeColor = item.getAttribute("data-color");
      eventColor.setAttribute("data-you-color", changeColor);
      eventColor.className = "event_color orange";
      appData.event.color = eventColor.getAttribute("data-you-color");
    } else if (item.getAttribute("data-color") == "green") {
      changeColor = item.getAttribute("data-color");
      eventColor.setAttribute("data-you-color", changeColor);
      eventColor.className = "event_color green";
      appData.event.color = eventColor.getAttribute("data-you-color");
    } else if (item.getAttribute("data-color") == "blue") {
      changeColor = item.getAttribute("data-color");
      eventColor.setAttribute("data-you-color", changeColor);
      eventColor.className = "event_color blue";
      appData.event.color = eventColor.getAttribute("data-you-color");
    } else if (item.getAttribute("data-color") == "red") {
      changeColor = item.getAttribute("data-color");
      eventColor.setAttribute("data-you-color", changeColor);
      eventColor.className = "event_color red";
      appData.event.color = eventColor.getAttribute("data-you-color");
    }
  });
});

// Открыть модалку приоритетов
choosePriority.addEventListener("click", () => {
  if (choosePriorityModal.classList.contains("show")) {
    choosePriorityModal.classList.remove("show");
  } else {
    choosePriorityModal.classList.add("show");
  }
});

// Переключечние приоритетов
var priorityVal;
choosePriorityItem.forEach(function (item) {
  item.addEventListener("click", () => {
    if (item.getAttribute("data-priority") == "very-hight") {
      priorityVal = item.textContent || item.innerText;
      appData.event.priority = priorityVal;
    } else if (item.getAttribute("data-priority") == "hight") {
      priorityVal = item.textContent || item.innerText;
      appData.event.priority = priorityVal;
    } else if (item.getAttribute("data-priority") == "medium") {
      priorityVal = item.textContent || item.innerText;
      appData.event.priority = priorityVal;
    } else if (item.getAttribute("data-priorityr") == "light") {
      priorityVal = item.textContent || item.innerText;
      appData.event.priority = priorityVal;
    }
  });
});


// Добавление нового события
addNewTaskBtn.addEventListener("click", () => {
  textEditor.textContent = "";
  if (newTaskFilling.classList.contains("expanded")) {
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
    taskListItem = document.createElement("div"), // Задача
    deleteTask = document.createElement("div"), // Удалить задачу
    taskItemText = document.createElement("div"), // Текст задачи
    tasnkInfoShow = document.createElement("div"), // Скрыть - показать инфо
    taskItemInfo = document.createElement("div"), // Блок с информацией
    taskInfoColor = document.createElement("div"), // Цвет задачи
    taskInfoDate = document.createElement("div"), // Дата задачи
    taskInfoPriority = document.createElement("div"), // Приоритет задачи
    taskInfoProject = document.createElement("div"); // Проект
  taskListItem.classList.add("task_list_item");
  taskItemText.classList.add("task_item_text");
  taskItemInfo.classList.add("task_item_info");
  taskInfoColor.classList.add("task_info_color");
  taskInfoDate.classList.add("task_info_date");
  taskInfoPriority.classList.add("task_info_priority");
  taskInfoProject.classList.add("task_info_project");
  tasnkInfoShow.classList.add("task_info_show");
  deleteTask.classList.add("delete_task");
  if (textEditor.textContent != "") {
    taskItemText.innerHTML = taskText;
    taskItemText.appendChild(tasnkInfoShow);

    taskInfoColor.textContent = "Цвет: " + appData.event.color;
    taskInfoDate.textContent = "Дата: " + appData.event.date;
    taskInfoPriority.textContent = "Приоритет: " + appData.event.priority;
    taskInfoProject.textContent = "Проект: ";
    deleteTask.textContent = "Удалить событие";

    tasnkInfoShow.style.borderColor = appData.event.color;

    taskListItem.appendChild(taskItemText);
    taskListItem.appendChild(taskItemInfo);
    taskItemInfo.appendChild(taskInfoColor);
    taskItemInfo.appendChild(taskInfoDate);
    taskItemInfo.appendChild(taskInfoPriority);
    taskItemInfo.appendChild(taskInfoProject);
    tasksList.appendChild(taskListItem);
    taskItemInfo.appendChild(deleteTask);
    newTaskFilling.classList.remove("expanded");
    addNewTaskBtn.classList.add("show");
    addNewTaskBtn.classList.remove("hide");
    appData.event.text = taskText;


  }
  // Показать детали события
  tasnkInfoShow.addEventListener("click", () => {
    if (taskItemInfo.classList.contains("expanded")) {
      taskItemInfo.classList.remove("expanded");
    } else {
      taskItemInfo.classList.add("expanded");
    }
  });
  // Удаление события
  deleteTask.addEventListener("click", () => {
    deleteTask.parentNode.parentNode.remove();
  });
});



console.log(appData);

/* 
Дата +
Текст + 
Приоритет - 
Цвет +
Проект - 

*/