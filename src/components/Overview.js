import React from 'react';

function Overview(props) {
  const { list } = props;
  const listItems = list.map((item) => {
    return <li>{item}</li>;
  });
  return <ul>{listItems}</ul>;
}

export default Overview;
