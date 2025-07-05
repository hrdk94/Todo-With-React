import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'


function Todo(){
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");


    let AddNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4()}]
        });
        setNewTodo("");
    };

    let UpdateNewTodo = (event)=> {
        setNewTodo(event.target.value);
    };

    let DeleteTodo = (id) =>{
        console.log(id, "Deleted")
        setTodos(todos.filter((todos)=> todos.id != id))
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
                        <li key={todos.id}>
                            {todos.task}
                            <button style={{margin: "8px"}} onClick={()=>DeleteTodo(todos.id)}>Delete</button></li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Todo;