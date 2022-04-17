import Todo from './Todo.js';

function ToDoList({todos, completeTodo, deleteTodo}) {

    const todoList = todos.map((todo) => {return <Todo todo ={todo} key ={todo.id} completeTodo ={completeTodo} deleteTodo ={deleteTodo}/>});
    return (
        <>
            <h1>List of Todos</h1>
            <ul>
                <div className="divItems">
                    {todoList}
                </div>
            </ul>
        </>
    );
}

export default ToDoList;