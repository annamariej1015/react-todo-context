import ListItem from '../components/ListItems';

const TodoList = (todos, updateTodo) =>{
    return(
        <div id='todo-list'>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        {todos.map((todo,index)=>{
                            return(
                                <ListItem todo={todo} updateTodo={updateTodo} key={index}
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