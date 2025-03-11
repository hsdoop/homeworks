class TodoList {
    constructor() {
        this.notes = [];
        this.nextId = 1;
    }

    add(text) {
        if (!text.trim()) throw new Error("Нотатка не може бути порожньою");
        const timestamp = new Date();
        this.notes.push({ id: this.nextId++, text, completed: false, createdAt: timestamp, updatedAt: timestamp });
    }

    remove(id) {
        this.notes = this.notes.filter(note => note.id !== id);
    }

    edit(id, newText) {
        let note = this.notes.find(note => note.id === id);
        if (note && newText.trim()) {
            note.text = newText;
            note.updatedAt = new Date();
        }
    }

    toggleComplete(id) {
        let note = this.notes.find(note => note.id === id);
        if (note) {
            note.completed = !note.completed;
            note.updatedAt = new Date();
        }
    }

    getAllNotes() {
        return this.notes;
    }

    getSummary() {
        return {
            total: this.notes.length,
            remaining: this.notes.filter(note => !note.completed).length
        };
    }

    findNoteByName(name) {
        return this.notes.filter(note => note.text.includes(name));
    }

    findNotesByDate(date) {
        return this.notes.filter(note => note.createdAt.toDateString() === date.toDateString());
    }

    sortByStatus(descending = false) {
        return this.notes.sort((a, b) => descending ? b.completed - a.completed : a.completed - b.completed);
    }

    sortByDate(descending = false) {
        return this.notes.sort((a, b) => descending ? b.createdAt - a.createdAt : a.createdAt - b.createdAt);
    }
}

const todoList = new TodoList();
todoList.add("Купити молоко");
todoList.add("Підготувати звіт");
todoList.toggleComplete(1);
console.log(todoList.getAllNotes());
console.log(todoList.getSummary());
console.log("Пошук нотатки:", todoList.findNoteByName("молоко"));
console.log("Пошук нотаток за датою:", todoList.findNotesByDate(new Date()));
console.log("Сортування за статусом (спочатку виконані):", todoList.sortByStatus(true));
console.log("Сортування за статусом (спочатку невиконані):", todoList.sortByStatus(false));
console.log("Сортування за датою (спочатку новіші):", todoList.sortByDate(true));
console.log("Сортування за датою (спочатку старіші):", todoList.sortByDate(false));