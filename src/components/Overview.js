import React from 'react';
import Task from './Task';
import Edit from './Edit';

// BUILDS UNORDERED LIST FROM PASSED LIST ARRAY
function Overview(props) {
  const listItems = props.list.map((item, i) => {
    if (item.editting) {
      return (
        <Edit
          key={item.id}
          item={item}
          i={i}
          handleEditSubmit={props.handleEditSubmit}
          handleEditChange={props.handleEditChange}
        />
      );
    } else {
      return (
        <Task
          key={item.id}
          item={item}
          i={i}
          handleEdit={props.handleEdit}
          handleDelete={props.handleDelete}
        />
      );
    }
  });
  return <ul>{listItems}</ul>;
}

export default Overview;
