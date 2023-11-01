import "./List.css";
import { useState } from "react";
function List() {
  const [list, setList] = useState([
    {
      title: "walk with dog",
      description: "walk with dog",
      priority: 1
    },
    {
      title: "go for the milk",
      description: "go for the milk",
      priority: 2
    },
    {
      title: "buy new clothes",
      description: "buy new clothes",
      priority: 3
    }
  ]);
  function handlePriorityDisplay(priorityNumber){
    switch(priorityNumber){
      case 1:
        return "high-priority";
      case 2:
        return "medium-priority";
      case 3:
        return "low-priority";
    }
  }
    return (
      <div>
        <label class="create">Create</label>
        <form action="" method="">
            <div class="form-container">
                <label>title</label>
                <textarea type="text" name="title"></textarea>
            </div> 
            <div class="form-container">
                <label>description</label>
                <textarea type="text" name="description"></textarea>
            </div>
            <div class="form-container">
                <label>priority</label>
                <input name="prioroty" type="number"></input>
            </div>
        </form>
        <div className="tasks-list">
          {list.map(item => (
            <div className={`list-item ${handlePriorityDisplay(item.priority)}`}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default List;