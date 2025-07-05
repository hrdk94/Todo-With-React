import { useState } from "react";


function Todo(){
    let [todos, setTodos] = useState(["Sample task"]);
    let [newTodo, setNewTodo] = useState("");


    let AddNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    let UpdateNewTodo = (event)=> {
        setNewTodo(event.target.value);
    };
    return(
        <div>


            <input style={{ marginRight: "8px"}} type="text" placeholder="Write your tasks here..."  value={newTodo} onChange={UpdateNewTodo}/>
            <button onClick={AddNewTask}>ADD TASK</button>
            <br /><br />
            <hr />


            <p>TODO LIST!</p>
            <ul>
                {
                    todos.map((todos)=>(
                        <li>{todos}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Todo;