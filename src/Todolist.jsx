import React from 'react';
import { observer } from 'mobx-react';
import store from './Store/store.js';

const Todolist = observer(() => {
    const handleAddTodo = () => {
        const todo = prompt('Введіть нове завдання:');
        if (todo) {
            store.addTodo(todo);
        }
    };

    const handleRemoveTodo = (todo) => {
        store.removeTodo(todo);
    };

    return (
        <div>
            <button onClick={handleAddTodo}>Виконано</button>
            <ul>
                {store.todos.map((todo) => (
                    <li key={todo}>
                        {todo}
                        <button onClick={() => handleRemoveTodo(todo)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Todolist;
