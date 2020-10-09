import React from 'react';
import { nanoid } from 'nanoid';
import Overview from './components/Overview';
import './App.css';

// TODO
// STYLE DELETE BUTTON, USE FONT AWESOME (COMPLETED)
// ADD EDIT BUTTON

// THINKING THROUGH THE EDIT PROCESS
// SUBSTITUTING COMPONENT SEPERATE FROM EDITING STATE IN MAIN FUNCTION?
// OVERVIEW CLICK FUNCTION SUBS COMPONENT. THAT NEW COMPONENT HAS EDIT FUNCTION FROM APP?
// SEPERATE PROCESSES.
//   EXTRACT INTO NEW COMPONENTS
//   SUB COMPONENT
//   EDIT STATE

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      list: [{ id: '31245', task: 'Test' }],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      temp: e.target.value,
    });
  }

  handleDelete(e) {
    // IS USING PARENT ID THE BEST WAY TO TARGET WAY TO REMOVE?
    const parentId = e.target.parentNode.id;
    const newList = this.state.list.filter((a) => {
      if (a.id !== parentId) return a;
    });
    this.setState({
      list: newList,
    });
  }

  handleEdit(e) {
    const parentId = e.target.parentNode.id;
    const newList = this.state.list.filter((a) => {
      if (a.id === parentId) {
        a.task = 'Test';
      }
      return a;
    });
    this.setState({
      list: newList,
    });
  }

  handleSubmit(e) {
    const id = nanoid(10);
    this.setState({
      list: [...this.state.list, { id: id, task: this.state.temp }],
      temp: '',
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Tiny List</h1>
        {/* CONTROLLED COMPONENT USED FOR REACT FORMS */}
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            value={this.state.temp}
            onChange={this.handleChange}
          />
          <input className="submit" type="submit" value="Submit" />
        </form>
        <Overview
          list={this.state.list}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
