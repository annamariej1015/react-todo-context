import React, { useState, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const AddTodoComponent = () =>{
    let { todoItem, addTodo, updateTodo } = useContext(GlobalContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(todoItem);
        updateTodo('');
    };

    return(
        <div id='add-todo'>
            <div className="row my-3">
                <div className="col">
                    <form action="">
                        <div className="input-group">
                            <input 
                                type="text"
                                className='form-control'
                                value={todoItem}
                                onChange={e =>handleSubmit(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <button 
                                        className="btn btn-secondary"
                                        onClick={handleSubmit}
                                        >Add
                                    </button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTodoComponent;