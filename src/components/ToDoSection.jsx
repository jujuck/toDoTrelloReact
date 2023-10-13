import React from 'react';
import Card from './Card';

const ToDoSection = ({ title, tasks }) => {
  return (
    <section>
      <div>
        <h2>{ `Ceci est mon ${title}` }</h2>
      </div>
      <div className="container">
        {
          tasks
            .filter(task => task.category.toLowerCase() === title.toLowerCase())
            .map(task => <Card task={task} key={task.id} />)
        }
      </div>
    </section>
  )
}

export default ToDoSection;