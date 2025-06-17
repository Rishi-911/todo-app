import "../App.css";
import { useState } from "react";
import TableList from "./TableList";
function AddItem() {
  const [allTodos, setAllTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");
  const [count, setCount] = useState(0)

  const addTodo = () => {
    if (newTodos.trim() !== "") {

      const newTask = {
        text: newTodos,
        Status: "Pending",
        count: 0

      }
      setAllTodos([...allTodos, newTask]);
      setNewTodos("");
      setCount(count + 1)
    } else {
      alert("Please enter the items");
    }

  };

  const handleAdd = (e) =>{
    if(e.key === "Enter"){
      addTodo()
    }

  }

  const handleDelete = (index) => {
    const updateTodos = [...allTodos];
    const taskToDelete = updateTodos[index]; 

    updateTodos.splice(index, 1);
    setAllTodos(updateTodos);
    
  if (taskToDelete?.Status === "Pending") {
    setCount(prev => Math.max(prev - 1, 0)); 
  }
  };

  const handleStatus = (index, checked) =>{
    const updateTodos = allTodos.map((items, i) =>
      i === index
    ? {...items, Status: checked? "Completed":"Pending", count: checked? setCount(count - 1 ): setCount(count + 1)}
    : items
    )
    setAllTodos(updateTodos);
  }

  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="Enter items"
          value={newTodos}
          onChange={(e) => setNewTodos(e.target.value)}
          onKeyDown={handleAdd}
          style={{textTransform: "capitalize"}}
        />
      </div>
      <div className="count">
        <h4> Task active: <span style={{backgroundColor: "#f9f9f9"}}>{count}</span> </h4>
       
         </div>
      

      <TableList
        addTodo={allTodos}
        handleDelete={handleDelete}
        handleStatus={handleStatus}
      />
    </>
  );
}

export default AddItem;
