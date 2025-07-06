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
    
    let UpperCaseALL = () =>{
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

let UpperCaseOne = (id) => {
  setTodos(todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        task: todo.task.toUpperCase(),
      };
    } else {
      return todo;
    }
  }));
};

let  LowerCaseOne = (id) =>{
    setTodos(todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        task: todo.task.toLowerCase(),
      };
    } else {
      return todo;
    }
  }));
}



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
                            <button style={{margin: "8px"}} onClick={()=>DeleteTodo(todos.id)}>Delete</button>
                            <button style={{margin: "8px"}} onClick={() => UpperCaseOne(todos.id)}>UpperCase One</button>
                            <button onClick={() => LowerCaseOne(todos.id)}>LowerCase One</button>
                            </li>          
                    ))
                }
            </ul>
            <br /> <br /> <br />
            <button onClick={UpperCaseALL}>UpperCase ALL</button>

        </div>
    )
}

export default Todo;