class Student {
  static totalStudents = 0;

  constructor(id, name) {
    // students attributes
    (this.id = id), (this.name = name), (this.attendance = []);
    Student.totalStudents++;
  }

  markPresent(date) {
    this.attendance.push({ date, status: "Present" });
  }

  markAbsent(date) {
    this.attendance.push({ date, status: "Absent" });
  }

  getAttendance() {
    return this.attendance;
  }

  static getStudentCount() {
    console.log(Student.totalStudents);
  }
}

class AttendanceSystem {
  static systemVersion = "1.0";

  constructor() {
    this.students = [];
  }

  addStudent(student) {
    // Register a student to the database
    this.students.push(student);
    console.log("Student " + student.name + " successfully added");
  }

  markAttendance(studentId, date, status) {
    // Track the students attendance using id
    const student = this.students.find((student) => student.id === studentId);

    if (student) {
      if (status === "present" || status === "Present") {
        student.markPresent(date);
      } else {
        student.markAbsent(date);
      }
    } else {
      console.log("Student does not exist");
    }
  }

  getStudentAttendance(studentId) {
    // Check a particular students attendance using id
    const student = this.students.find((student) => student.id === studentId);

    if (student) {
      console.log(student.name);
      console.log(student.getAttendance());
    } else {
      console.log("Student with id " + studentId + " doesn't exist");
    }
  }

  static getSystemVersion() {
    console.log(`System Version : ${AttendanceSystem.systemVersion}`);
  }
}

/*------- SOME SCENARIOS TO TEST THE SYSTEM OUTPUT --------- */

/*
// Create students using the Student class

const student1 = new Student(1, "Favour Okpara");

const student2 = new Student(2, "Ezinne Edmund");

// Register / add students to the Attendance system
const attend = new AttendanceSystem();

attend.addStudent(student1);
attend.addStudent(student2);

// View the attendace system data base
console.log(attend.students);

// Mark attendance for student1
attend.markAttendance(1, "10/10/2024", "Present" )
attend.markAttendance(1, "11/10/2024", "Absent")
attend.markAttendance(1, "12/10/2024", "Present")
attend.markAttendance(1, "13/10/2024", "Absent")
attend.markAttendance(1, "14/10/2024", "Present")

// Mark attendance for student2
attend.markAttendance(2, "10/10/2024", "Absent")
attend.markAttendance(2, "11/10/2024", "Present")
attend.markAttendance(2, "12/10/2024", "Absent")
attend.markAttendance(2, "13/10/2024", "Absent")
attend.markAttendance(2, "14/10/2024", "Present")

//  View the students attendance

attend.getStudentAttendance(1) // Favour Okpara
attend.getStudentAttendance(2) // Ezinne Edmund

// If the student doesnt exist
attend.getStudentAttendance(3) //Student with this id doesnt exist

*/

// Create students using the Student class

const student1 = new Student(1, "Favour Okpara");

const student2 = new Student(2, "Ezinne Edmund");

// Register / add students to the Attendance system
const attend = new AttendanceSystem();

attend.addStudent(student1);
attend.addStudent(student2);
