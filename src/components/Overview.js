import React from 'react';
import Task from './Task';
import Edit from './Edit';

// BUILDS UNORDERED LIST FROM PASSED LIST ARRAY
function Overview(props) {
  const { list, handleDelete, handleEdit } = props; // DESTRUCTURING FOR PRACTICE. UNNECESSARY.
  const dummyObj = { id: 'abc', task: 'Dummy Task' };
  const listItems = list.map((item, i) => {
    return (
      <Task
        item={item}
        i={i}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
  });
  return (
    <ul>
      {listItems}
      <Edit item={dummyObj} />
    </ul>
  );
}

export default Overview;
