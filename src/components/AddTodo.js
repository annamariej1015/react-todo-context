import React, { useState } from 'react';

const AddTodoComponent = (addTodo) =>{
    const [todoItem, setTodoItem] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(todoItem);
        setTodoItem('');
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
                                onChange={e =>setTodoItem(e.target.value)}
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