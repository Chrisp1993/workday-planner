var textAreaSections = document.querySelectorAll("textarea");
var saveBtns = document.querySelectorAll(".saveBtn");
var currentDateSection = document.getElementById("currentDay");
currentDateSection.textContent = moment().format("dddd, MMMM Do");