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
            if(this.courses[i].course === course) {
                return;
            }
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
};

let student = new User({name: "John", surname: "Doe", email: "john@example.com", role: "student"});
let teacher = new User({name: "Jane", surname: "Smith", email: "jane@example.com", role: "teacher"});

student.addCourse("math", 2);// student needs math at level 2
teacher.addCourse("math", 5);// teacher can teach math up to level 5

teacher.sendMessage(student, "I can help you with math!");
// stores message in teacher's history, calls sendEmail

teacher.showMessagesHistory();
// john@example.com -> jane@example.com: I can help you with math!