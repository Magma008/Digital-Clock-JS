const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const year = document.querySelector(".year")
const week = document.querySelector(".week")
const day = document.querySelector(".day")
const month = document.querySelector(".month")
const ampm = document.querySelector(".ampm")

const monthFinder = (monthNum) => {
    let monthDay
    switch (monthNum) {
        case 0:
            monthDay = "January"
            break; 
        case 1:
            monthDay = "February"
            break;
        case 2:
            monthDay = "March"
            break;
        case 3:
            monthDay = "April"
            break;
        case 4:
            monthDay = "May"
            break;
        case 5:
            monthDay = "June"
            break;
        case 6:
            monthDay = "July"
            break;
        case 7:
            monthDay = "August"
            break;
        case 8:
            monthDay = "September"
            break;
        case 9:
            monthDay = "October"
            break;
        case 10:
            monthDay = "November"
            break;
        case 11:
            monthDay = "December"
            break;
        default:
            alert("Error occured!!!")
            break;
    }
    // console.log(monthDay)
    return monthDay
}

const zeroAdder = (num) => {
    return (num < 10 ? `0${num}` : num)
}

const weekFinder = (number) => {
    let weekday;
    switch (number) {
        case 1:
            weekday = "Monday"
            break;
    
        case 2:
            weekday = "Tuesday"
            break;
    
        case 3:
            weekday = "Wednesday"
            break;
    
        case 4:
            weekday = "Thursday"
            break;
    
        case 5:
            weekday = "Friday"
            break;
    
        case 6:
            weekday = "Saturday"
            break;
    
        case 7:
            weekday = "Sunday"
            break;
    
        default:
            alert("Weekday error!!!")
            break;
    }
    return weekday

}

setInterval(() => {
    let date = new Date
    let d = date.getDate()
    let y = date.getFullYear()
    let w = weekFinder(date.getDay())
    let h = zeroAdder(date.getHours())
    let m = zeroAdder(date.getMinutes())
    let s = zeroAdder(date.getSeconds())
    let mnth = monthFinder(date.getMonth())
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

