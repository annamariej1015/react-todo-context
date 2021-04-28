const ListItems = (todo, updateTodo) => {
    return(
        <li className='list-group-item'>
            <label htmlFor="">
                <input 
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => updateTodo(todo)}
                />
            </label>{' '}
            <span>{todo.text}</span>
        </li>
    );
};

export default ListItems;