const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const year = document.querySelector(".year")
const week = document.querySelector(".week")
const day = document.querySelector(".day")
const month = document.querySelector(".month")
const ampm = document.querySelector(".ampm")

const zeroAdder = (num) => {
    return (num < 10 ? `0${num}` : num)
}

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let weekdays = ["Nothing", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

setInterval(() => {
    let date = new Date
    let d = date.getDate()
    let y = date.getFullYear()
    let w = weekdays[date.getDay()]
    let h = zeroAdder(date.getHours())
    let m = zeroAdder(date.getMinutes())
    let s = zeroAdder(date.getSeconds())
    let mnth = months[date.getMonth()]
    let apm = h > 12 ? "PM" : "AM"
    
    h = (h > 12 ? h - 12 : h)

    hours.innerText = h
    minutes.innerText = m
    seconds.innerText = s
    year.innerText = y
    week.innerText = w
    month.innerText = mnth
    day.innerText = d
    ampm.innerText = apm
}, 1000);