function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const age1 = 25;
const age2 = 15;

console.log("Чи є особа з віком 25 дорослою?", isAdult(age1));
console.log("Чи є особа з віком 15 дорослою?", isAdult(age2));
