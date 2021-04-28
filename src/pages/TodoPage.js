import React from 'react';
import TodoList from '../components/TodoList';
import ListItems from '../components/ListItems';
import { todoData} from '../data/todoData';


const TodoPage = ( todos, updateTodo ) => {
    const [todos, setTodos] =useState(todoData);

    
    return(
        <div>
            <div className="row">
                <div className="col">
                    <ul className='list-group'>
                        {todos.map((todo, index)=>  {
                            return(

                                <ListItems todo={todo} updateTodo={updateTodo} key={index} />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default TodoPage;