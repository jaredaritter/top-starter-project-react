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

  handleSubmitClick = (e) => {
    const temp = this.state.temp;
    this.props.handleEditSubmit(e, temp);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitClick} id={this.props.item.id}>
        {this.props.i + 1}){'  '}
        <input
          type="text"
          value={this.state.temp}
          onChange={this.handleChange}
        />
        <button type="submit" className="edit-button">
          <i className="fas fa-plus-circle fa-lg"></i>
        </button>
      </form>
    );
  }
}

export default Edit;

// MULLINGS AND THOUGHTS
// NEED TO PASS I TO KEEP NUMBER (COMPLETED)
// NEED TO PASS ID TO PASS NEW INFORMATION TO APP STATE (COMPLETED)
// MIGHT BE ABLE TO REUSE OTHER SUBMIT BUTTON? (SEEMS UNLIKELY)
// DO I NEED AN ONCHANGE? (YES)
// CAN TIE TO LOCAL STATE IF NEEDED FOR TEMP (LOOKING LIKE THE NEXT STEP)
// HOW TO TOGGLE FOR EDIT? CAN ADD EDITING BOOLEAN TO OBJECT THAT IS SET ON EDIT CLICK CAUSING IT TO RERENDER WITH EDIT COMPONENT IN IT'S PLACE. (COMPLETED)
// GOT WEIRD WITH PASSING VALUES DIRECTLY THROUGH ONCLICK BUT WORKS WELL WITH OTHER FUNCTIONS (NEED TO SEE WHY EXACTLY IT PREFERS ARROW FUNCTIONS) THAT THEN CALL ORIGINAL PARENT FUNCTION WITH A PASSED VALUE.
