import { useState, useEffect } from 'react';
import axios from 'axios';


function TodoDetail({ match }) {

  const [todoDetail, setTodoDetail] = useState({})
  const id = match.params.id

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:8000/api/${id}/`
    }).then(response => {
      setTodoDetail(response.data)
    }).catch(err => {
      console.log(err);
    })
  }, [id])

  const handleRemoveItem = (e) => {
    const id = e.target.getAttribute("value")
    todoDetail.active = !todoDetail.active
    axios({
      method: "PUT",
      url: `http://localhost:8000/api/${id}/`,
      data: todoDetail
    }).then(response => {
      console.log(response.data)
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <strong>{todoDetail.title}</strong>
      <p>{todoDetail.body}</p>
      <span value={todoDetail.id} onClick={handleRemoveItem}>
        x
      </span>
    </div>
  );
}

export default TodoDetail;
