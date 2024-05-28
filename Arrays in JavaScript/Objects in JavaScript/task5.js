
const users = [
    { name: "Anton", email: "anton@trubin.com", age: 37 },
    { name: "Zlata", email: "zlata@trubina.com", age: 10 },
    { name: "Nika", email: "nika@trubina.com", age: 10 }
];


for (const user of users) {
   
    const { name, email, age } = user;

 
    console.log("Ім'я:", name);
    console.log("Електронна пошта:", email);
    console.log("Вік:", age);
    console.log("***");
}
