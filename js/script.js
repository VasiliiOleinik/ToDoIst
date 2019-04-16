'use strict';

let showProjects = document.querySelector("#projects .title_block"), // Шапка проектов
    projects = document.getElementById("projects"), // Общий блок проектов
    projectContain = document.querySelector(".project_contain"); // Список проектов


// Показать список проектов
showProjects.addEventListener("click", () => {
    if (projects.classList.contains('project_expanded')) {
        projects.classList.remove("project_expanded");
        projectContain.style.cssText = "height:0; overflow: hidden; transition-duration: 335ms;";
    } else {
        projects.classList.add("project_expanded");
        projectContain.style.cssText = "height:auto; overflow: visible; transition-duration: 335ms;";
    }

});