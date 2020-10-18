"use strict";

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrPm = "AM";

  amOrPm = hours > 12 ? "PM" : amOrPm;

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  clockTitle.innerText = `${hours}:${minutes}:${seconds} ${amOrPm}`;
}

function init() {
  getTime();
  setInterval(getTime, 10);
}

init();
