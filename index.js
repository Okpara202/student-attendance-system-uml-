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
    }
  }

  static getSystemVersion() {
    console.log(`System Version : ${AttendanceSystem.systemVersion}`);
  }
}


