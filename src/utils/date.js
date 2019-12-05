export const DATE = {
    countDateHoursMinSec: () => {
        let date = new Date();
        return date.getHours() + 'ч ' + date.getMinutes() + 'м ' + date.getSeconds() + 'c';
    },
    countDateRU: () => {
        return new Date().toLocaleString('ru', { year: 'numeric', month: 'long', day: 'numeric' });
    },
    runDate: () => {
        let date = new Date();
        return date.toLocaleTimeString();
    },
    daysLeftNewYear: (value) => {
        let targetDate = new Date(value).getTime();
        let curDate = new Date().getTime();
        let result = Math.round((curDate - targetDate) / 86400000);
        if (result === 1 || result === 21 || result === 31) {
            return  `До нового года остался  ${Math.abs(result)} день!`;
        } else if (result > 1 && result < 5 || result > 21 && result < 26) {
            return  `До нового года осталось  ${Math.abs(result)} дня!`;
        } else if (result === 0) {
            return  `С Новым годом!`;
        } else {
            return `До нового года осталось  ${Math.abs(result)} дней!`;
        }
    }
}
