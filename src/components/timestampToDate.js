// Преобразовать timestamp в дату
export default function timestampToDate(timestamp) {
    let date = new Date(timestamp)
    let hours = date.getHours().toString()
    let minutes = date.getMinutes().toString()
    let day = date.getDate().toString()
    let month = (date.getMonth() + 1).toString() // Добавляем 1 т.к. месяц начинается с нуля
    let year = date.getFullYear()
    minutes = minutes.length !== 2 ? "0" + minutes : minutes // Формат минут 00
    hours = hours.length !== 2 ? "0" + hours : hours // Формат часов 00
    day = day.length !== 2 ? "0" + day : day // Формат дня 00
    month = month.length !== 2 ? "0" + month : month // Формат месяца 00

    const MONTHS = {
        "01": "янв",
        "02": "фев",
        "03": "мар",
        "04": "апр",
        "05": "май",
        "06": "июн",
        "07": "июл",
        "08": "авг",
        "09": "сен",
        "10": "окт",
        "11": "ноя",
        "12": "дек",
    }

    const FULL_MONTHS = {
        "01": "января",
        "02": "февраля",
        "03": "марта",
        "04": "апреля",
        "05": "мая",
        "06": "июня",
        "07": "июля",
        "08": "августа",
        "09": "сентября",
        "10": "октября",
        "11": "ноября",
        "12": "декабря",
    }    

    let nowDate = new Date()
    let nowYear = nowDate.getFullYear()

    return {
        hours: hours,
        minutes: minutes,
        day: day,
        month: month,
        year: year,
        stringTime: `${hours}:${minutes}`,
        stringDate: `${day}.${month}.${year}`,
        dateWithMonth: `${day} ${MONTHS[month]} ${year}`,
        dateWithFullMonth: `${day} ${FULL_MONTHS[month]} ${year}`,
        passNow: timestamp < nowDate.getTime()
    }
}