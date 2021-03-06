import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ToDoList() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
      event.preventDefault();
      if(toDo === "") {
        return;
      }
      setToDo("");
      setToDos(currentArray => [toDo, ...currentArray])
    }
  
    return(
      <div>
        <h1>My ToDos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={toDo} type="text" placeholder="write your todo..."/>
          <button>Sumbit</button>
        </form>
        <hr/>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
        <Link to={`${process.env.PUBLIC_URL}/`}>Go Back Home</Link>

      </div>
    )
  
  }

  export default ToDoList;