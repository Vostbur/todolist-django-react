import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Todos() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/api/"
    }).then(response => {
      setTodos(response.data)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div>
      <ul>
        {todos.map(i => (
          <li key={i.id}>
            <Link to={{ pathname: `/${i.id}`, fromDashboard: false }}>{i.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
