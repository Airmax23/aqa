function handleNum(number, cbEven, cbOdd) {
    if (number % 2 === 0) {
        cbEven();
    } else {
        cbOdd();
    }
}

function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

handleNum(5, handleEven, handleOdd);
