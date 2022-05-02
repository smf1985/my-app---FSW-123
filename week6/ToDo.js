import { useState } from 'react';
import EditToDoForm from './EditToDoForm';

function ToDo({toDo, completeToDo, deleteToDo, editToDo}) {
    const [isChecked, setIsChecked] = useState(toDo.isCompleted);
    const [isEdited, setIsEdited] = useState(false);
    
    const handleChange = (text) => {
        toDo.isCompleted = !isChecked;
        !isChecked ? document.getElementById(text).disabled = true : document.getElementById(text).disabled = false;
        setIsChecked(!isChecked);
    }

    const handleEdit = () => {
        setIsEdited(!isEdited);
    }

    return (
        isEdited ? <EditTodoForm todo ={toDo} id ={`editForm ${toDo.id}`} cancelBtn ={handleEdit} editTodo ={editToDo}/> : 
        <li key ={toDo.id} id={toDo.id}>
            <input type="checkbox" checked ={isChecked} onChange ={() => handleChange(`editBtnFor ${toDo.text}`)}/>
            <span style ={{ textDecoration: toDo.isCompleted ? "line-through" : "" }}>{toDo.text}</span>
            <button id ={`deleteBtnFor ${toDo.text}`} onClick ={() => deleteToDo(toDo.id)}>X</button>
            <button id ={`editBtnFor ${toDo.text}`} onClick ={handleEdit}>Edit</button>
        </li>
    );
}

export default ToDo;