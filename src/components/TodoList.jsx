import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ mode }) {
  const test = mode ? "dark TodoItem" : "light TodoItem";
  const [todo, setTodo] = useState([
    { task: "hello world", id: crypto.randomUUID(), isCompleted: false },{ task: "hello world", id: crypto.randomUUID(), isCompleted: false }
  ]);
  return (
    <>
      <div className={test}>

        {
          todo.map(to=>{
            return(
               <TodoItem key={to.id} mode={mode} todo={to}/>
            )
           
          })
        }
        
        
        
        
        <div className="info-flex">
          <div className="info">
            <p>{todo.length} Item left</p>

            <div className="task-flex">
              <p>All</p>
              <p>Active</p>
              <p>Completed</p>
            </div>

            <p>Clear completed</p>
          </div>
        </div>
      </div>
    </>
  );
}
