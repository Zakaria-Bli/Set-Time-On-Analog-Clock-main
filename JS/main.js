let hourHand = document.getElementById("hour-hand")
let minuteHand = document.getElementById("minute-hand")
let secondHand = document.getElementById("second-hand")
let hourInput = document.getElementById("hour")
let minuteInput = document.getElementById("minute")
let secondInput = document.getElementById("second")
let hourValue,
  minuteValue,
  second = 0
hourInput.addEventListener("change", setHour)
minuteInput.addEventListener("change", setHour)
secondInput.addEventListener("change", setHour)

function setHour() {
  hourInSecond = hourInput.value * 3600
  minuteInSecond = minuteInput.value * 60
  second = secondInput.value
  timeInSecond = +hourInSecond + +minuteInSecond + +second
  if (timeInSecond >= 3600) {
    let hour = Math.trunc(timeInSecond / 3600)
    if (hour % 12 == 0) {
      hour = 12
    } else if (hour > 12) {
      hour = hour % 12
    }
    hourValue = (hour * 360) / 12
    restTime = timeInSecond % 3600
    if (restTime >= 60) {
      let minute = Math.trunc(restTime / 60)
      minuteValue = (minute * 360) / 60
      let second = restTime % 60
      secondValue = (second * 360) / 60
    } else if (restTime < 60) {
      secondValue = restTime
    }
  } else if (timeInSecond >= 60) {
    let minute = Math.trunc(timeInSecond / 60)
    minuteValue = (minute * 360) / 60
    let second = timeInSecond % 60
    secondValue = (second * 360) / 60
  } else {
    secondValue = (timeInSecond * 360) / 60
  }
  console.log(timeInSecond)
  hourHand.style.transform = `rotate(${hourValue}deg)`
  minuteHand.style.transform = `rotate(${minuteValue}deg)`
  secondHand.style.transform = `rotate(${secondValue}deg)`
}
