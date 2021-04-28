import React, { useState, useEffect, useContext } from 'react';
import TodoList from '../components/TodoList';
import AddTodoComponent from '../components/AddTodo';
import { todoData} from '../data/todoData';




const TodoPage = () => {
    
    return(
        <div>
           <AddTodoComponent addTodo={addTodo}/>
           <TodoList todos={todos} updateTodo={updateTodo}/>
        </div>
        
    );
};

export default TodoPage;