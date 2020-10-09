import React from 'react';

function Task(props) {
  return (
    <div key={props.item.id} id={props.item.id}>
      {props.i + 1}) {props.item.task}
      {'  '}
      <i className="fas fa-plus-circle fa-xs" onClick={props.handleEdit}></i>
      <i className="fas fa-minus-circle fa-xs" onClick={props.handleDelete}></i>
    </div>
  );
}

export default Task;
