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
    }
}
