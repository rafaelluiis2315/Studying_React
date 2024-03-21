import { useReducer, useState } from 'react'

const HookUseReducer = () => {
    // 1 - começando com useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.floor(Math.random(state) * (10 - 1));
    }, 1);

    // 2 - avançando no useReducer
    const initialTasks = [
        { id: 1, text: "Fazer alguma coisa" },
        { id: 2, text: "Fazer outra coisa" },
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.floor(Math.random(state) * (100 - 3) + 3),
                    text: taskText
                }

                setTaskText("");

                return [...state, newTask];
            case "REMOVE":
                return state.filter((task) => task.id !== action.id);
            default:
                return state;
        }
    }

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTask({ type: "ADD" });
    }

    const removeTask = (id) => {
        dispatchTask({ type: "REMOVE", id: id });
    }

    return (
        <div>
            {/* 1 - começando com useReducer */}
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar número!</button>
            {/* 2 - avançando no useReducer */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTaskText(e.target.value)}
                    value={taskText}
                />
                <input type="submit" value="Add" />
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} onDoubleClick={() => removeTask(task.id)} >
                        {task.text}
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    )
}

export default HookUseReducer