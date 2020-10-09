import React from 'react';

function Edit(props) {
  return (
    <div id={props.item.id}>
      {props.i + 1}){'  '}
      <input
        type="text"
        value={props.item.task}
        onChange={props.handleEditChange}
      />
      <i
        className="fas fa-plus-circle fa-xs"
        onClick={props.handleEditSubmit}
      ></i>
    </div>
  );
}

export default Edit;

// NEED TO PASS I TO KEEP NUMBER (COMPLETED)
// NEED TO PASS ID TO PASS NEW INFORMATION TO APP STATE (COMPLETED)
// MIGHT BE ABLE TO REUSE OTHER SUBMIT BUTTON? (SEEMS UNLIKELY)
// DO I NEED AN ONCHANGE? (YES)
// CAN TIE TO LOCAL STATE IF NEEDED FOR TEMP (LOOKING LIKE THE NEXT STEP)
// HOW TO TOGGLE FOR EDIT? CAN ADD EDITING BOOLEAN TO OBJECT THAT IS SET ON EDIT CLICK CAUSING IT TO RERENDER WITH EDIT COMPONENT IN IT'S PLACE. (COMPLETED)
