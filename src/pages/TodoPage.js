import React, { useContext } from 'react';
import TodoList from '../components/TodoList';
import AddTodoComponent from '../components/AddTodo';
import GlobalContext from '../context/GlobalContext';



const TodoPage = () => {
    let { todos, addTodo, updateTodo } = useContext(GlobalContext);
    
    return(
        <div>
            <AddTodoComponent addTodo={addTodo}/>
            <TodoList todos={todos} updateTodo={updateTodo}/>
        </div>
        
    );
};

export default TodoPage;