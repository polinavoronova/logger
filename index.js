function log(message) {
    return console.log(message);
}

function logSecond() {
    const split = ' | ';
    let amountOfArg = arguments.length;
    let message;

    for (let arg = 0; arg < amountOfArg; arg++) {
        if (arg === 0) {
            message = arguments[arg];
        } else {
            message += split + arguments[arg];
        }
    }

    return log(message);
}

function logThird(...arg) {
    let date = new Date();
    let dateFormated = date.toLocaleString('en-US', { hour12: true });
    let args = [dateFormated, ...arguments];
    return logSecond(...args);
}