/* функция принимает первым параметром строку, которая содержит код для вычислений
* например: onmessage =  ...
* вторым параметром this - текущий компонент Vue
* третим параметром watch поле компонента Vue, ожидающее ответа, без this. и  ввиде строки
* четвертым параметром  и далее по необходимости для реализации вычислений/запросов в onmessage*/
export const runWorker = function  (str, linkThis, linkNameStr, data) {
    let blob = new Blob([str]);
    let blobURL = window.URL.createObjectURL(blob);
    let worker = new Worker(blobURL);
    let self = linkThis;
    worker.onmessage = function (event) {
        self[linkNameStr] = event.data;
        worker.terminate();
    };
    worker.postMessage(data);
    window.URL.revokeObjectURL(blobURL);

}
