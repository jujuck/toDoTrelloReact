import { useState } from 'react';
import { FaRegStar, FaTrash } from 'react-icons/fa';

const Card = ({ task }) => {
  const [like, setLike] = useState(false);

  console.log(like)
  return (
    <div className="card">
      <h3>Titre : {task.title }</h3>
      <h5>Description de la tache: <span>{task.description }</span></h5>
      <h6>Status: {task.status }</h6>
      <p>Date butoire: {task.date }</p>
      <div className="stars" onClick={() => setLike(!like)}>
        <FaRegStar fill={like ? "yellow" : "black" } />
      </div>
      <div className="trash">
        <FaTrash />
      </div>
    </div>
  )
}

export default Card