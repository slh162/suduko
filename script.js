let student = {
  name: "sagi",
  age: 40,
  id: "211632310",
};
student.age++;
console.log(student.age);
console.log(student.id);
console.log(student);
student.car = "chevi";
console.log(student);
// מערך של אובייקטים כל אובייקט יכיל שם,גיל ותז, תצרו פונקציה שמדפיסה רק את השם

function obj(student) {
  for (let i = 0; i < student.length; i++) {
    console.log(student[i].name);
  }
}
obj([
  { name: "yoni", age: 16, id: "213345" },
  { name: "avi", age: 18, id: "28834599" },
  { name: "yuval", age: 33, id: "21547845" },
]);
//
function objC(stu) {
  for (let i = 0; i < stu.length; i++) {
    if (stu[i].addrees.city == "tel aviv") {
      console.log(stu[i].name);
    }
  }
}
objC([
  { name: "ahi", age: 45, addrees: { city: "ashkelon", street: "yoseftal" } },
  { name: "ani", age: 33, addrees: { city: "tel aviv", street: "boulevard" } },
  { name: "anochi", age: 13, addrees: { city: "tel aviv", street: "13th" } },
]);
// oop
class Student {
  id = "";
  name = "";
  grades = [];

  avg() {
    //מתודה שבודקת את ממוצע הציונים
    let avg = 0;
    for (let i = 0; i < this.grades.length; i++) {
      avg += this.grades[i];
    }
    avg /= this.grades.length;
    return avg;
  }
}
// סטודנט חדש במחלקה
let newstudent = new Student();
newstudent.name = "yaniv";
newstudent.id = "6543546547";
newstudent.grades = [88, 99, 60];
console.log(newstudent);
console.log(newstudent.avg());
let newstudent2 = new Student();
newstudent2.name = "yahav";
newstudent2.id = "4334533";
newstudent2.grades = [80, 90, 62];
console.log(newstudent2);
console.log(newstudent2.avg());
class newstudents{
    constructor(id,name,grades){
        this.id=id;
        this.name=name;
        this.grades=grades;
    }
    avg() {
        //מתודה שבודקת את ממוצע הציונים
        let avg = 0;
        for (let i = 0; i < this.grades.length; i++) {
          avg += this.grades[i];
        }
        avg /= this.grades.length;
        return avg;
      }
    
}
class Age{
    constructor(name,birthYear){
    this.name=name;
    this.birthYear=birthYear;

}
howO(){
let year=2022;
year-=this.birthYear;
return year
}
};
let ppl= new Age('pop',2000);
console.log(ppl.howO());
// 
class Person{
constructor(id,name){
    this.id=id;
    this.name=name;
}
}
class Studentss extends Person{
constructor(id,name,grades){
super(id);
super(name);
this.grades=grades;
}
}
// צרו מחלקה בשם סמארטפון, הבנאי של המחלקה יכיל את המאפיינים שם, סוג ושנת יצור, צרו מתודה שתבדוק אם שנת היצור
class Smartphone{
    constructor(name,type,year)
    {
        this.name=name;
        this.type=type;
        this.year=year;
    }
    letest(
    ){
        let year1=2022-this.year;
        if (year1<=1) {alert ('newphone')
            
        }
    }
}
let newS=new Smartphone('iphone','x',2021)
newS.letest();