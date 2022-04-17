import './App.css';
import ToDoList from './ToDoList.js'
import todos from './STORE.js'

function App() {
  return (
    <ToDoList items = {todos}/>
  );
}

export default App;