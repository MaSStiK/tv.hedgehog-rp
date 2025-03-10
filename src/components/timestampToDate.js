// Преобразовать timestamp в дату
export default function timestampToDate(timestamp = 0) {
    // Если приходит timestamp = undefined - становиться 0

    // Конвертируем в timestamp если получили дату
    if (typeof timestamp === "string") timestamp = convertToTimestamp(timestamp)

    let date = new Date(timestamp)

    // Привязка с мск
    let localeDate = date.toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })
    
    const [fullDate, fullTime] = localeDate.split(', ');
    const [day, month, year] = fullDate.split(".")
    const [hours, minutes, seconds] = fullTime.split(":")

    console.log(fullDate, fullTime);
    
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
        stringTime: `${hours}:${minutes}`,
        stringDate: fullDate,
        dateWithMonth: `${day} ${MONTHS[month]} ${year}`,
        dateWithFullMonth: `${day} ${FULL_MONTHS[month]} ${year}`,
        passNow: timestamp < nowDate.getTime()
    }
}

// Конвертация даты формата yyyy-mm-ddThh:mm:ssZ в timestamp
function convertToTimestamp(dateTimeString) {
    const date = new Date(dateTimeString);
    return date.getTime();
}