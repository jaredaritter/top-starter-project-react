import React from 'react';

// BUILDS UNORDERED LIST FROM PASSED LIST ARRAY
function Overview(props) {
  const { list } = props; // DESTRUCTURING FOR PRACTICE. UNNECESSARY.
  const listItems = list.map((item, i) => {
    return <li key={i}>{item}</li>; // USING INDEX AS KEY IS NOT RECOMMEND PRACTICE
  });
  return <ul>{listItems}</ul>;
}

export default Overview;
