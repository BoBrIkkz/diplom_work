const timer = (deadline) => {

    const timerDay = document.querySelectorAll('.count_1')
    const timerHour = document.querySelectorAll('.count_2')
    const timerMinute = document.querySelectorAll('.count_3')
    const timerSecond = document.querySelectorAll('.count_4')

    const getTimeRemaining = () => {

        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor((timeRemaining / 60 / 60 / 24))
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds

        }
    }


    const updateClock = () => {
        let getTime = getTimeRemaining()

        timerDay.forEach(element => {
            let timerDays = element.querySelector("span")
            timerDays.textContent = ("0" + getTime.days).slice(-2)

        })
        timerHour.forEach(element => {
            let timerHours = element.querySelector("span")
            timerHours.textContent = ("0" + getTime.hours).slice(-2)

        })
        timerMinute.forEach(element => {
            let timerMinutes = element.querySelector("span")
            timerMinutes.textContent = ("0" + getTime.minutes).slice(-2)

        })
        timerSecond.forEach(element => {
            let timerSeconds = element.querySelector("span")
            timerSeconds.textContent = ("0" + getTime.seconds).slice(-2)

        })
        if (getTime.timeRemaining > 0) {

            setTimeout(updateClock, 1000)

        } else {
            timerDays.textContent = '00'
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'

        }
    }
    updateClock()
}
export default timer