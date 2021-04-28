
import { createContext, useState} from 'react';

export const GlobalContext = createContext();



export const GlobalProvider= ({children}) => {
    const [todos, setTodos] =useState([]);
    
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