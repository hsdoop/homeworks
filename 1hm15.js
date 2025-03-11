class TodoList {
    constructor() {
        this.notes = [];
        this.nextId = 1;
    }

    add(text) {
        if (!text.trim()) throw new Error("Нотатка не може бути порожньою");
        this.notes.push({ id: this.nextId++, text, completed: false });
    }

    remove(id) {
        this.notes = this.notes.filter(note => note.id !== id);
    }

    edit(id, newText) {
        let note = this.notes.find(note => note.id === id);
        if (note && newText.trim()) note.text = newText;
    }

    toggleComplete(id) {
        let note = this.notes.find(note => note.id === id);
        if (note) note.completed = !note.completed;
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
}

const todoList = new TodoList();
todoList.add("Купити молоко");
todoList.add("Підготувати звіт");
todoList.toggleComplete(1);
console.log(todoList.getAllNotes());
console.log(todoList.getSummary());