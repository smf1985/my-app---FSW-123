<<<<<<< HEAD
function ToDoList(props){
    return(
      props.text.map((todos, index) => {
        return(
        
        <li key = {index}>
        <input type="checkbox"></input>{todos.text}</li>)
      })
    );
}

=======
function ToDoList(props){
    return(
      props.text.map((todos, index) => {
        return(
        
        <li key = {index}>
        <input type="checkbox"></input>{todos.text}</li>)
      })
    );
}

>>>>>>> 850d0484639a444fba5abeb9d8f977ad4446637a
export default ToDoList;