import TodoListItem from './TodoListItems';

const TodoList = (todos, updateTodo) =>{
    return(
        <div id='todo-list'>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        {todos.map((todo, index)=>{
                            return(
                                <TodoListItem todo={todo} updateTodo={updateTodo} key={index}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default TodoList;