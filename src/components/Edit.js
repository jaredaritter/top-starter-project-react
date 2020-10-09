import React from 'react';

function Edit(props) {
  return (
    <div>
      <input type="text" value={props.item.task} />
      <i className="fas fa-plus-circle fa-xs" onClick={props.handleEdit}></i>
    </div>
  );
}

export default Edit;

// NEED TO PASS I TO KEEP NUMBER
// NEED TO PASS ID TO PASS NEW INFORMATION TO APP STATE
// MIGHT BE ABLE TO REUSE OTHER SUBMIT BUTTON?
// DO I NEED AN ONCHANGE? CAN TIE TO LOCAL STATE IF NEEDED FOR TEMP
// HOW TO TOGGLE FOR EDIT? CAN ADD EDITING BOOLEAN TO OBJECT THAT IS SET ON EDIT CLICK CAUSING IT TO RERENDER WITH EDIT COMPONENT IN IT'S PLACE.
