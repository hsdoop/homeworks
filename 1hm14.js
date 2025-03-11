// Вам необхідно створити конструктор Студента, у якого мають бути властивості:
//  ім'я, прізвище, рік народження, оцінки, відвідуваність, курс. Кількість оцінок і відвіданих занять залежить від курсу,
//  на якому займається студент. Так само у Студента є методи: додати оцінку, 
// додати відвідування, отримати середню успішність, отримати середнє відвідування,
//  отримати кількість пройдених занять, змінити курс (мають оновитися дані про курс), 
// а також отримати всю інформацію про студента.
class Student {
    constructor(name, surname, birthYear, course) {
      this.name = name;
      this.surname = surname;
      this.course = course;
      this.grades = [];
      this.attendance = [];
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  
    addAttendance(attended) {
      this.attendance.push(attended);
    }
  
    getAverage(arr) {
      return arr.length ? arr.reduce((sum, val) => sum + val, 0) / arr.length : 0;
    }
  
    getInfo() {
      return "Студент: " + this.name + " " + this.surname + "Курс: " + this.course + " Середня оцінка: " + this.getAverage(this.grades) + ", Середня відвідуваність: " + this.getAverage(this.attendance);
    }
  }

  const student = new Student("Іван", "Петров", 2002, 3);
  student.addGrade(90);
  student.addGrade(85);
  student.addAttendance(1);
  student.addAttendance(0);
  console.log(student.getInfo());
  