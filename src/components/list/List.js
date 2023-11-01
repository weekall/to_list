import "./List.css";
function List({ data }) {
    return (
      <div>
        <ul>
          {data.map(item => (
            <>
              <li>{item.title}</li> 
              <li>{item.description}</li> 
              <li>{item.priority}</li>
            </>
          ))}
        </ul>
      </div>
    );
  }
  export default List;