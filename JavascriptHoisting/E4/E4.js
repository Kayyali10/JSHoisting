let students = [
    { id: 1, name: "Ahmad", grade: 85 },
    { id: 2, name: "Omar", grade: 92 },
    { id: 3, name: "Yazan", grade: 78 },
    { id: 4, name: "Mohammad", grade: 88 },
    { id: 5, name: "Ali", grade: 74 },
    { id: 6, name: "Khaled", grade: 95 },
    { id: 7, name: "Othman", grade: 81 },
    { id: 8, name: "Hamza", grade: 69 },
    { id: 9, name: "Zaid", grade: 90 },
    { id: 10, name: "Anas", grade: 77 },
    { id: 11, name: "Tareq", grade: 84 },
    { id: 12, name: "Laith", grade: 73 },
    { id: 13, name: "Samer", grade: 91 },
    { id: 14, name: "Fadi", grade: 66 },
    { id: 15, name: "Rami", grade: 87 },
    { id: 16, name: "Hussein", grade: 79 },
    { id: 17, name: "Mahmoud", grade: 93 },
    { id: 18, name: "Yousef", grade: 75 },
    { id: 19, name: "Ibrahim", grade: 89 },
    { id: 20, name: "Ayman", grade: 71 },
    { id: 21, name: "Malek", grade: 96 },
    { id: 22, name: "Baraa", grade: 82 },
    { id: 23, name: "Sultan", grade: 68 },
    { id: 24, name: "Amer", grade: 86 },
    { id: 25, name: "Murad", grade: 80 },
    { id: 26, name: "Bilal", grade: 94 },
    { id: 27, name: "Qasem", grade: 72 },
    { id: 28, name: "Nour", grade: 97 },
    { id: 29, name: "Lina", grade: 83 },
    { id: 30, name: "Sara", grade: 90 },
    { id: 31, name: "Aya", grade: 76 },
    { id: 32, name: "Dana", grade: 88 },
    { id: 33, name: "Rana", grade: 65 },
    { id: 34, name: "Hala", grade: 81 },
    { id: 35, name: "Farah", grade: 99 },
    { id: 36, name: "Maya", grade: 78 },
    { id: 37, name: "Lama", grade: 85 },
    { id: 38, name: "Jana", grade: 92 },
    { id: 39, name: "Reem", grade: 70 },
    { id: 40, name: "Dina", grade: 87 },
    { id: 41, name: "Leen", grade: 73 },
    { id: 42, name: "Tasneem", grade: 95 },
    { id: 43, name: "Razan", grade: 82 },
    { id: 44, name: "Shahd", grade: 89 },
    { id: 45, name: "Rawan", grade: 77 },
    { id: 46, name: "Yara", grade: 91 },
    { id: 47, name: "Salma", grade: 69 },
    { id: 48, name: "Malak", grade: 84 },
    { id: 49, name: "Jouri", grade: 96 },
    { id: 50, name: "Saja", grade: 80 }
];

//splice
//splice => add Student
students.splice(50,0,{id:51,name:"kayyali",grade:100});
console.log(students);

//splice => remove Student 
students.splice(41,1);
console.log(students);

// splice => Replice Student
students.splice(46,1,{id: 48, name: "Noor", grade: 95 });
console.log(students);

//slice
let NewAraay = students.slice(46,48);
console.log(NewAraay);

//sort by grade
students.sort(function(a,b){
    return b.grade - a.grade ;

});
console.log(students)

//ForEach by all student

students.forEach(function(item){

    console.log(item);
});