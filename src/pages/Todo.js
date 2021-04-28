import React from 'react';

const TodoPage = () => {
    return(
        <div>
            <div className="row">
                <div className="col">
                    <ul className='list-group'>
                        {todos.map((todo, index)=>{
                            return(
                                <div>todos</div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default TodoPage;