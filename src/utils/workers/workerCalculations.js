/*создает команду в виде строки вида 'onmessage = function(e) {let result = 0;for(let i = 0; i < 10000000000; i++) { result += i;} postMessage(result); };'*/
const onmessage = function(e) {
        let result = 0;
        for(let i = 0; i < 10000000000; i++) {
            result += i;
        }
        postMessage(result);
    };
export let str = 'onmessage = ' + onmessage;
