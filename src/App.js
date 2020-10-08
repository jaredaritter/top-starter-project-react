import React from 'react';
import { nanoid } from 'nanoid';
import Overview from './components/Overview';
import './App.css';

// TODO
// STYLE DELETE BUTTON, USE FONT AWESOME
// ADD EDIT BUTTON

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      list: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
        <Overview list={this.state.list} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
