import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';
import GlobalContext from '../context/GlobalContext';


const TodoList = () => {
    let { todos, addTodo, updateTodo } = useContext(GlobalContext);
    return(
        <div id='todo-list'>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                    {todos.map((todo, index) => {
                            return (
                                <TodoListItem todo={todo} updateTodo={updateTodo} key={index} />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default TodoList;