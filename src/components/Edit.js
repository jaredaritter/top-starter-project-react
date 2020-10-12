import React from 'react';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: this.props.item.task,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      temp: e.target.value,
    });
  }

  render() {
    return (
      <div id={this.props.item.id}>
        {this.props.i + 1}){'  '}
        <input
          type="text"
          value={this.state.temp}
          onChange={this.handleChange}
        />
        <i
          className="fas fa-plus-circle fa-xs"
          onClick={this.props.handleEditSubmit}
        ></i>
      </div>
    );
  }
}

// function Edit(props) {
//   return (
//     <div id={props.item.id}>
//       {props.i + 1}){'  '}
//       <input
//         type="text"
//         value={props.item.task}
//         onChange={props.handleEditChange}
//       />
//       <i
//         className="fas fa-plus-circle fa-xs"
//         onClick={props.handleEditSubmit}
//       ></i>
//     </div>
//   );
// }

export default Edit;

// NEED TO PASS I TO KEEP NUMBER (COMPLETED)
// NEED TO PASS ID TO PASS NEW INFORMATION TO APP STATE (COMPLETED)
// MIGHT BE ABLE TO REUSE OTHER SUBMIT BUTTON? (SEEMS UNLIKELY)
// DO I NEED AN ONCHANGE? (YES)
// CAN TIE TO LOCAL STATE IF NEEDED FOR TEMP (LOOKING LIKE THE NEXT STEP)
// HOW TO TOGGLE FOR EDIT? CAN ADD EDITING BOOLEAN TO OBJECT THAT IS SET ON EDIT CLICK CAUSING IT TO RERENDER WITH EDIT COMPONENT IN IT'S PLACE. (COMPLETED)
