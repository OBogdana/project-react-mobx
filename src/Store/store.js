import { makeObservable, observable, action } from 'mobx';

class ToDoStore {
    todos = [];

    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo: observable
        })
    }
    addTodo = (todo) => {
        this.todos.push(todo);
    };

    // @action
    // removeTodo = (todo) => {
    //     this.todos = this.todos.filter((item) => item !== todo);
    // };

}

const store = new ToDoStore();
export default store;