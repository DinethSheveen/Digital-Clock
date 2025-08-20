const timeElement = document.querySelector(".clock")

function updateTime(){
    let present = new Date();
    let hours = present.getHours()
    let minutes = present.getMinutes().toString().padStart(2,0)
    let seconds = present.getSeconds().toString().padStart(2,0)

    let meridiem = hours >= 12 ? "PM" : "AM"

    timeElement.innerHTML = `${hours}:${minutes}:${seconds} ${meridiem}`
}

updateTime()
setInterval(updateTime,1000)