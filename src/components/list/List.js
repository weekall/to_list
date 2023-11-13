import "./List.css";
import { useState } from "react";
function List() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "walk with dog",
      description: "walk with dog",
      priority: 1
    },
    {
      id: 2,
      title: "go for the milk",
      description: "go for the milk",
      priority: 2
    },
    {
      id: 3,
      title: "buy new clothes",
      description: "buy new clothes",
      priority: 3
    }
  ]);
  const [formData, setFormData] = useState({
    id: list.length + 1,
    title:'',
    description:'',
    priority:1
  });
  function handlePriorityDisplay(priorityNumber){
    switch(+priorityNumber){
      case 1:
        return "high-priority";
      case 2:
        return "medium-priority";
      case 3:
        return "low-priority";
    }
  }
  function handleInputChange(e){
    const {name,value} = e.target;
    setFormData(
      {
        ...formData,
        [name]:value
      }
    )
    
    
  }
  const [isErrorTitle,setIsErrorTitle] = useState(false)
  const [isErrorDescription,setIsErrorDescription] = useState(false)
  function handleAddItem(e){
    e.preventDefault()
    if(formData.title.trim() == ''){
      setIsErrorTitle(true)
    } 
    else if(formData.description.trim() == ''){
      setIsErrorDescription(true)
    }
    else{
      setList([...list,formData])
    }
    
  }
    return (
      <div>
        <div className="container-search">
          <label className="search-label">Search</label>
          <form action="" method="" name="search_form" className="search-form">
            <input name="search" placeholder="Search..." className="search-input"></input>
            <button name="search_button" type="" className="search-button">Go</button>
          </form>
          <div className="tasks-list">
            {list.map(item => (
              <div className={`list-item ${handlePriorityDisplay(item.priority)}`} key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
        </div>
        <div className="create-container">
          <label className="create">Create</label>
          <form action="" method="" name="create_form" className="create_form">
              <div className="form-container">
                  <label>title</label>
                  <textarea 
                  className={`${isErrorTitle == true ? 'create-form-error' : null}`}
                  type="text" 
                  name="title" 
                  value={formData.title}
                  onChange={handleInputChange}
                  ></textarea>
              </div> 
              <div className="form-container">
                  <label>description</label>
                  <textarea
                  className={`${isErrorDescription == true ? 'create-form-error' : null}`}
                  type="text" 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  ></textarea>
              </div>
              <div className="form-container">
                  <label>priority</label>
                  <select name="priority" value={formData.priority} onChange={handleInputChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
              </div>
              <div className="button-container">
                  <button className="btn" type="" name="create" onClick={handleAddItem}>Create</button>
              </div>
          </form>
          <div class={`error-message ${isErrorTitle || isErrorDescription == true ? 'show-error-message' : null}`}>Error</div>
        </div>
        
       
      </div>
    );
  }
  export default List;