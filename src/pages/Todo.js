import React from 'react';
import ListItem from '../components/List';

const TodoPage = () => {
    return(
        <div>
            <div className="row">
                <div className="col">
                    <ul className='list-group'>
                        {todos.map((todo, index)=>{
                            return(
                                <ListItem/>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default TodoPage;