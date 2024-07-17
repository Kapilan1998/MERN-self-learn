class Student {
    static total = 0;
    static average = 0;
    constructor(id, fname, lname, maths, tamil, english) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.maths = maths;
        this.tamil = tamil;
        this.english = english;
    }

    calculateTotal() {
        Student.total = this.maths + this.tamil + this.english;
        console.log(`Total is ${Student.total}`);
    }

    findaverage() {
        Student.average = Student.total / 3;
        console.log(`Average is ${Student.average}`);
    }

    displayResult() {
        if (Student.average >= 75) {
            console.log("Your grade is A");
        } else if (Student.average >= 65) {
            console.log("Your grade is B");
        } else if (Student.average >= 50) {
            console.log("Your grade is C");
        } else {
            console.log("Your grade is F");
        }
    }

    printDetails() {
        console.log(`Details of ${this.fname} ${this.lname} are \n Maths marks ${this.maths} , English marks ${this.english}, Tamil marks ${this.tamil} \n  total = ${Student.total} and average = ${Student.average}`);
    }
}

let student1 = new Student(1, "Lasith", "Malinga", 1, 2, 4);
let student2 = new Student(2, "Kumar", "sangakkara", 84, 53, 75);
let student3 = new Student(3, "Mohamad", "Hafeez", 74, 54, 43);
let student4 = new Student(4, "David", "Warner", 91, 32, 98);
let student5 = new Student(5, "Kevin", "Peterson", 64, 87, 74);

// student1.calculateTotal();
// student1.findaverage();
// student1.displayResult();
// student1.printDetails();

// student2.calculateTotal();
// student2.findaverage();
// student2.displayResult();
// student2.printDetails();

// student3.calculateTotal();
// student3.findaverage();
// student3.displayResult();
// student3.printDetails();

// student4.calculateTotal();
// student4.findaverage();
// student4.displayResult();
// student4.printDetails();

// student5.calculateTotal();
// student5.findaverage();
// student5.displayResult();
// student5.printDetails();

let multiStudentArray = [student1, student2, student3, student4, student5];
// console.log(multiStudentArray);
multiStudentArray.forEach((student, index, array) => {
    // console.log(student); 
    student.calculateTotal();
    student.findaverage();
    student.displayResult();
    student.printDetails();
});

