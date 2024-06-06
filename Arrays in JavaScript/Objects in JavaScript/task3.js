
const car1 = {
    brand: "Hynday",
    model: "Sonata",
    year: 2012
};


const car2 = {
    brand: "Kia",
    model: "Ceed",
    owner: "Anton",
    year: 2015
};


const car3 = { ...car1, ...car2 };


console.log(car3);
