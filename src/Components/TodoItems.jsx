import { useState } from "react";
import { useTodo } from "../Context/TodoContext";

function TodoItem({ todo }) {

    const[todoEditable,settodoEditable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.todo)
    const {updatetodo,deletetodo,toogleComplete} = useTodo()

    const editTodo = () =>{
        updatetodo(todo.id ,{...todo,todo:todo.todoMsg})
        
        settodoEditable(false)
    }

    const toogleCompleted = () =>{
        toogleComplete(todo.id)
    }
    

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toogleCompleted}
            />
            
            
            <input
                type="text"
                
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    todoEditable ? "border-black/10 px-2" : "border-transparent" 
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!todoEditable}
            />
            
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (todoEditable) {
                        
                        editTodo();
                    } else settodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                
                {todoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deletetodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
