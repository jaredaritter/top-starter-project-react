import React from 'react';

// BUILDS UNORDERED LIST FROM PASSED LIST ARRAY
function Overview(props) {
  const { list, handleDelete } = props; // DESTRUCTURING FOR PRACTICE. UNNECESSARY.
  const listItems = list.map((item, i) => {
    return (
      <div key={item.id} id={item.id}>
        {i + 1}) {item.task} <button onClick={handleDelete}>Delete</button>
      </div>
    ); // USING INDEX AS KEY IS NOT RECOMMEND PRACTICE
  });
  return <ul>{listItems}</ul>;
}

export default Overview;
