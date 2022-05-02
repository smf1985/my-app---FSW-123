import {useState} from 'react';

function EditToDoForm({toDo, addToDo, id, cancelBtn, editToDo}) {

    const [userInput, setUserInput] = useState(toDo.text);

    const validateForm = (e) => {
        e.preventDefault();
        if (userInput !== "") {
            editToDo(toDo, userInput);
        } 

        const cancel = cancelBtn;
        cancel();
    }

    const changeState = (e) => {
        setUserInput(e.target.value);
    }

    return (
        <form id={id} onSubmit={validateForm}>
            <label>Edit Todo: </label>
            <input id={`todoText ${id}`} value ={userInput} onChange ={changeState} required></input>
            {userInput.length > 0 && userInput.charAt(0) !== " " ? <button id={`updateFor${id}`}>Update</button> : <button type="button" disabled>Update</button>} 
            <button onClick ={cancelBtn}>Cancel</button>
        </form>
    );
}

export default EditToDoForm;