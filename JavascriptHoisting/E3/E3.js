let student1 = [
    "Ahmad",
    "Omar",
    "Yazan",
    "Mohammad",
    "Ali",
    "Khaled",
    "Othman",
    "Hamza",
    "Zaid",
    "Anas",
    "Tareq",
    "Laith",
    "Samer",
    "Fadi",
    "Rami",
    "Hussein",
    "Mahmoud",
    "Yousef",
    "Ibrahim",
    "Ayman",
    "Malek",
    "Baraa",
    "Sultan",
    "Amer",
    "Murad",
    "Bilal",
    "Qasem",
    "Nour",
    "Lina",
    "Sara",
    "Aya",
    "Dana",
    "Rana",
    "Hala",
    "Farah",
    "Maya",
    "Lama",
    "Jana",
    "Reem",
    "Dina",
    "Leen",
    "Tasneem",
    "Razan",
    "Shahd",
    "Rawan",
    "Yara",
    "Salma",
    "Malak",
    "Jouri",
    "Saja"
];

let student2 = ["Ronaldo","Messi","Hazard"];

let NewStudentArray = student1.concat(student2);

console.log(NewStudentArray);

let alphabetically = student1.sort();

console.log(alphabetically);

let reverse = student1.reverse();

console.log(reverse)

let include = student1.includes("Ahmad");

console.log(include);

student1.forEach(function(item,index){

    console.log(`My Name Is ${item} , My Number ${index}`); 
})