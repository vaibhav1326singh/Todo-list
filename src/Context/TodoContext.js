import { useContext,createContext } from "react";


export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo:"go to college",
        completed:false
    }],
    addtodo:(todo) =>{},
    updatetodo:(id,todo) =>{},
    deletetodo:(id) =>{},
    toogleComplete:(id) =>{}

})


export const useTodo = () =>{
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider