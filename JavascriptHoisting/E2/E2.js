function Person(name,age){
    this.name = name ;
    this.age = age;

}
 Person.prototype.greet = function (){

    console.log(this.name)
    console.log(this.age)
 }




 function Employee (name,age,employeeid,position){
    this.name = name;
    this.age = age;
    this.employeeid = employeeid;
    this.position = position;
 }

 Employee.prototype = Object.create(Person.prototype);

  Employee.prototype.greet = function (){
        console.log(this.name);
        console.log(this.age);
        console.log(this.employeeid);
        console.log(this.position);
    }
 

 let student1 = new Employee("ahmad",23,1,"Developer");
 let student2 = new Employee("omar",19,2,"QA");
 let student3 = new Employee("yazan",30,3,"Full Stack Developer"); 

student1.greet();
student2.greet();
student3.greet();