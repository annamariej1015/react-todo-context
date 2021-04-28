import React from 'react';
import ListItems from '../components/List';

const TodoPage = ( todos, updateTodogit ) => {
    return(
        <div>
            <div className="row">
                <div className="col">
                    <ul className='list-group'>
                        {todos.map((todo, index)=>{
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