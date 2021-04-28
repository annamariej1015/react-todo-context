
import { createContext, useState} from 'react';
import todoData from '../data/todoData';
export const GlobalContext = createContext();



export const GlobalProvider= ({children}) => {
    const [todos, setTodos] =useState(todoData);
    
    const addTodo = todoItem => {
        setTodos([...todos, {text:todoItem, completed: false, alert: false}]);
    };
    
    const updateTodo = selectedTodo =>{
        const updated = todos.map ((todo, index) =>{
            if (selectedTodo === todo) {
                return{...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updated);
    }
    const defaultContext = {
        todos,
        addTodo,
        updateTodo
    };

    return(
        <GlobalContext.Provider value={{defaultContext}}>
            {children} {/* <AppRouter/>*/}
        </GlobalContext.Provider>
    );
};


export default GlobalContext;