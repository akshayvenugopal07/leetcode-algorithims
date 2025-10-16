console.clear();
function debounce(func, time) {
    let timer;
    return (data) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(data);
        }, time);
    };
}

const processChange = debounce(saveFinalResult, 1000);

function saveFinalResult(data) {
    console.log('Final result to process is: ' + data);
}

let inputString = 'user is typing away in the input';
for (var i = 0; i <= inputString.length; i++) {
    processChange(inputString.substring(0, i));
}