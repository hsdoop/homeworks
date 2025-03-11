class Student {
    constructor(name, surname, courses = []) {
      this.name = name;
      this.surname = surname;
      this.courses = {};
      courses.forEach(course => this.addCourse(course));
    }
  
    addCourse(course) {
      this.courses[course] = { grades: [], attendance: [] };
    }
  
    removeCourse(course) {
      delete this.courses[course];
    }
  
    addGrade(course, grade) {
      this.courses[course]?.grades.push(grade);
    }
  
    addAttendance(course, attended) {
      this.courses[course]?.attendance.push(attended);
    }
  
    getAverage(arr) {
      return arr.length ? arr.reduce((sum, val) => sum + val, 0) / arr.length : 0;
    }
  
    getInfo() {
      let info = "Студент: " + this.name + " " + this.surname + "\n";
      for (let course in this.courses) {
        info += "Курс " + course + " - Оцінка: " + this.getAverage(this.courses[course].grades) + " Відвідуваність: " + this.getAverage(this.courses[course].attendance);
      }
      return info;
    }
  }
  
  const student = new Student("Іван", "Петров", ["Математика", "Фізика"]);
  student.addGrade("Математика", 90);
  student.addGrade("Фізика", 85);
  student.addAttendance("Математика", 1);
  student.addAttendance("Фізика", 0);
  console.log(student.getInfo());
  student.addCourse("Програмування");
  student.addGrade("Програмування", 95);
  console.log(student.getInfo());