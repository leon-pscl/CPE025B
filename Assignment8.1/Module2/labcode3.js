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


//Testing
let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
student1.addCourse('chemistry', 2);
student1.addCourse('biology', 3);
teacher1.addCourse('maths', 4);
teacher1.addCourse('chemistry', 2);

console.log(ExtendedUser.match(teacher1, student1));
// -> [{course: 'maths', level: 4}]  (biology not matched, chemistry not in student list)

console.log(ExtendedUser.match(teacher1, student1, 'maths'));
// -> {course: 'maths', level: 4}  (teacher level 4 >= student level 2, match!)

console.log(ExtendedUser.match(teacher1, student1, 'biology'));
// -> undefined  (teacher doesn't teach biology)

console.log(ExtendedUser.match(teacher1, student1, 'chemistry'));
// -> undefined  (student doesn't need chemistry)