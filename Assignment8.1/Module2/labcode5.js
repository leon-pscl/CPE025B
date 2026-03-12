function sendEmail(from, to, message) {}

class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.messages = [];
        this.courses = [];
    }
    addCourse(course, level) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) return;
        }
        this.courses.push({course, level});
    }
    removeCourse(course) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses.splice(i,1);
                break;
            }
        }
    }
    editCourse(course, level) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses[i].level = level;
                break;
            }
        }
    }
    sendMessage(from, message) {
        this.messages.push({from: from.email, to: this.email, content: message});
        sendEmail(from.email, this.email, message);
    }
    showMessagesHistory() {
        for(let message of this.messages) {
            console.log(`${message.from} -> ${message.to}: ${message.content}`)
        }
    }
}

class ExtendedUser extends User {
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
    set fullName(value) {
        let parts = value.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
    }
    static match(teacher, student, course = undefined) {
        if (course) {
            let studentCourse = student.courses.find(c => c.course === course);
            let teacherCourse = teacher.courses.find(c => c.course === course);
            if (studentCourse && teacherCourse && teacherCourse.level >= studentCourse.level) {
                return teacherCourse;
            }
            return undefined;
        } else {
            let matches = [];
            for (let studentCourse of student.courses) {
                for (let teacherCourse of teacher.courses) {
                    if (studentCourse.course === teacherCourse.course && teacherCourse.level >= studentCourse.level) {
                        matches.push(teacherCourse);
                    }
                }
            }
            return matches;
        }
    }
}

class Teacher extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'teacher'});
    }
}

class Student extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'student'});
    }
}

class Tutoring {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    getStudentByName(name, surname) {
        return this.students.find(s => s.name === name && s.surname === surname);
    }

    getTeacherByName(name, surname) {
        return this.teachers.find(t => t.name === name && t.surname === surname);
    }

    getStudentsForTeacher(teacher) {
        return this.students.filter(student => ExtendedUser.match(teacher, student).length > 0);
    }

    getTeacherForStudent(student) {
        return this.teachers.filter(teacher => ExtendedUser.match(teacher, student).length > 0);
    }

    addStudent(name, surname, email) {
        this.students.push(new Student({name, surname, email}));
    }

    addTeacher(name, surname, email) {
        this.teachers.push(new Teacher({name, surname, email}));
    }
}

class ExtendedTutoring extends Tutoring {
    sendMessages(from, to, message) {
        for (let recipient of to) {
            recipient.sendMessage(from, message);
        }
    }
}
//Testing
let tutoring = new ExtendedTutoring();

tutoring.addStudent('Rafael', 'Fife', 'rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');

let student1 = tutoring.getStudentByName('Rafael', 'Fife');
let student2 = tutoring.getStudentByName('Kelly', 'Estes');
let teacher1 = tutoring.getTeacherByName('Paula', 'Thompkins');

student1.addCourse('maths', 2);
student2.addCourse('maths', 1);
teacher1.addCourse('maths', 4);

// teacher sends a message to all matching students
let matchingStudents = tutoring.getStudentsForTeacher(teacher1);
tutoring.sendMessages(teacher1, matchingStudents, 'Hi! I can help you with maths!');

// check message history for each student
student1.showMessagesHistory();
// -> PaulaThompkins@jourrapide.com -> rfife@rhyta.com: Hi! I can help you with maths!
student2.showMessagesHistory();
// -> PaulaThompkins@jourrapide.com -> k_estes@dayrep.com: Hi! I can help you with maths!

// student replies to all matching teachers
let matchingTeachers = tutoring.getTeacherForStudent(student1);
tutoring.sendMessages(student1, matchingTeachers, 'Great, when are you available?');

teacher1.showMessagesHistory();
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: Great, when are you available?