import React from "react";
import './App.css';
import {observer} from "mobx-react-lite";
import Todolist from "./Todolist";

const App = observer(({store}) => {
    return (
        <div className="App">
            <h1>Список завдань</h1>
            <Todolist />
        </div>
    );
})

export default App;
