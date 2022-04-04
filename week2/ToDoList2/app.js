import ToDoList from "./ToDoList.js"
import "./app.css"
import todos from "./store.js"

function App() {
  return (
    <ToDoList items = {todos}/>
  );
}

export default App;