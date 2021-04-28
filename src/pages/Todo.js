import React from 'react';

import ListItem from '../components/List';


const TodoPage = ( todos, updateTodo ) => {
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