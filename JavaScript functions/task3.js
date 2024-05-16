function checkOrder(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    } else if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    } else {
        return "Your order is accepted";
    }
}

console.log(checkOrder(10, 8)); 
console.log(checkOrder(5, 10)); 
console.log(checkOrder(0, 5)); 
console.log(checkOrder(10, 0));