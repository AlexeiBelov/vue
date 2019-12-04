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
    daysLeftNewYear: () => {
        let date = new Date();
        //Можно установить любую дату
        let nextDate = new Date( 'December 31, 2019 ');
        //Количество миллисекунд в одном дне
        let msDay = 24 * 60 * 60 * 1000;
        //Высчитываем количество дней
        let daysLeft = Math.round((nextDate.getTime() - date.getTime()) / msDay);
        let dayName =  '';
        let ds =  '' + daysLeft;
        //Вырезаем последнюю цифру
        let dd = parseInt(ds.substr(ds.length-1));
        //Склоняем слово ДЕНЬ
        if (daysLeft > 4 && daysLeft < 21) {
            dayName= ' дней ';
        } else if (dd === 1) {
            dayName= ' день ';
        } else if (dd === 2||dd === 3||dd === 4) {
            dayName= ' дня ';
        } else {
            dayName= ' дней ';
        }

        if (daysLeft < 0) {
            return  'С новым годом!!! '
        } else {
            if (daysLeft === 0) {
                return  'Завтра новый год! '
            } else {
                return  'До нового года осталось  '+ daysLeft + dayName +  ' '
            }
        }
    }
}
