import './App.css'

function ToDoList({items}) {
    return (
        <>
            <h1>List of Todos</h1>
            <ul>
                {items.map((item, index) => (
                    <div className = "divItems">
                        <input type="checkbox"/><li key={index}>{item.text}</li>
                    </div>
                ))}
            </ul>
        </>
    );
}

export default ToDoList;