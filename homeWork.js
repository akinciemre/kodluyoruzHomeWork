var yourName = prompt("What is your name?")
const date = new Date()
let today
const todayDay = date.getDate()
const todayMonth = date.getMonth()
const todayYear = date.getFullYear()

let nameInfo = document.querySelector
("#myName")
let todayHtml =document.querySelector("#myClock")
nameInfo.innerHTML = yourName.toString

today = todayDay.toString + "." + todayMonthtoString + "." + todayYeartoString


todayHtml.innerHTML = today