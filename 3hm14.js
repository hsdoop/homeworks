class Student {
    constructor(name, attendance, performance) {
        this.name = name;
        this.attendance = attendance;
        this.performance = performance;
    }
}

class Group {
    constructor() {
        this.students = [];
    }

    add(student) {
        this.students.push(student);
    }

    remove(name) {
        this.students = this.students.filter(s => s.name !== name);
    }

    rankByAttendance() {
        return [...this.students].sort((a, b) => b.attendance - a.attendance);
    }

    rankByPerformance() {
        return [...this.students].sort((a, b) => b.performance - a.performance);
    }
}

const group = new Group();
group.add(new Student("Іван", 90, 85));
group.add(new Student("Марія", 80, 95));
group.add(new Student("Петро", 95, 75));

group.remove("Марія");

console.log("За відвідуваністю:", group.rankByAttendance());
console.log("За успішністю:", group.rankByPerformance()); 