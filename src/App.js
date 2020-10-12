import React from 'react';
import { nanoid } from 'nanoid';
import Overview from './components/Overview';
import './App.css';

// TODO
// CHANGE EDIT TO USING A FORM SO THAT THE ENTER BUTTON WORKS CORRECTLY FOR SUBMISSION

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      list: [{ id: '31245', task: 'Test', editting: false, temp: '' }],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
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
        a.editting = true;
      }
      return a;
    });
    this.setState({
      list: newList,
    });
  }

  handleEditSubmit(e, temp) {
    const parentId = e.target.parentNode.id;
    const newList = this.state.list.filter((a) => {
      if (a.id === parentId) {
        a.task = temp;
        a.editting = false;
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
      list: [
        ...this.state.list,
        { id: id, task: this.state.temp, editting: false, temp: '' },
      ],
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
          handleEditSubmit={this.handleEditSubmit}
        />
      </div>
    );
  }
}

export default App;
