import ToDo from './ToDo.js';

function ToDoList({toDos, completeToDo, deleteToDo, editToDo}) {

    const toDoList = toDos.map((toDo) => {return <ToDo toDo ={toDo} key ={toDo.id} completeToDo ={completeToDo} deleteToDo ={deleteToDo} editToDo ={editToDo}/>});
    return (
        <ul>
            <div className="divItems">
                {toDoList}
            </div>
        </ul>
    );
}

export default ToDoList;