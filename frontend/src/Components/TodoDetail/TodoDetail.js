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

  return (
    <div>
      <strong>{todoDetail.title}</strong>
      <p>{todoDetail.body}</p>
    </div>
  );
}

export default TodoDetail;
