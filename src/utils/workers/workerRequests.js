const onmessage = function(e) {
    let urls = e.data;
    let contents = [];
    urls.forEach( function (item, i) {
        let url = urls[i];
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();
        if (xhr.status !== 200) {
            throw Error(xhr.status + ' ' + xhr.statusText + ' ' + url);
        } else {
            contents.push(JSON.parse(xhr.responseText));
        }
    });
    postMessage(contents);
};
export let strRequest = 'onmessage = ' + onmessage;
