import React from 'react';
import Overview from './components/Overview';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      list: ['Make list form work', 'Second item to do'],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      temp: e.target.value,
    });
  }

  handleSubmit(e) {
    // WHAT TO POINT TO HERE?
    this.setState({
      list: [...this.state.list, this.state.temp],
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
        <Overview list={this.state.list} />
      </div>
    );
  }
}

export default App;
