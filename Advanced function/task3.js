function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number' || denominator === 0) {
        throw new Error('Аргументи повинні бути числами, і знаменник не може дорівнювати 0.');
    }
    return numerator / denominator;
}

try {
    console.log(divide(1090490, 456)); 
    console.log(divide(8, 0)); 
    console.log(divide('a', 2)); 
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}
