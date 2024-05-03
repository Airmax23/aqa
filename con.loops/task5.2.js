
let averageGrade = -100; 
let gradeCategory;


if (averageGrade < 60) {
    gradeCategory = "F";
} else if (averageGrade <= 70) {
    gradeCategory = "D";
} else if (averageGrade <= 80) {
    gradeCategory = "C";
} else if (averageGrade <= 90) {
    gradeCategory = "B";
} else if (averageGrade <= 100) {
    gradeCategory = "A";
}


switch (gradeCategory) {
    case "F":
        console.log("Незадовільно");
        break;
    case "D":
        console.log("Задовільно");
        break;
    case "C":
        console.log("Добре");
        break;
    case "B":
        console.log("Дуже добре");
        break;
    case "A":
        console.log("Відмінно");
        break;
}