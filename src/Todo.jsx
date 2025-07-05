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
        console.log(id, "Deleted");
        setTodos(todos.filter((todos)=> todos.id != id))
    };
    
    let upperCaseALL = () =>{
        setTodos(todos.map((todos)=>{
            return{
                ...todos,
                task: todos.task.toUpperCase(),
            }
        }
    ))};

    const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      AddNewTask();
    }
  };


    return(
        <div>


            <input
                style={{ marginRight: "8px" }}
                type="text"
                placeholder="Write your tasks here..."
                value={newTodo}
                onChange={UpdateNewTodo}
                onKeyDown={handleKeyDown}
            />
            <button onClick={AddNewTask} onKeyDown={handleKeyDown}>ADD TASK</button>
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
            <br /> <br /> <br />
            <button onClick={upperCaseALL}>UpperCase ALL</button>

        </div>
    )
}

export default Todo;