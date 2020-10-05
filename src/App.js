import React from 'react';
import Overview from './components/Overview';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 'test',
      list: ['Make list form work', 'Second item to do'],
    };
  }

  handleClick() {
    console.log('clicked');
    // ADD NEW ITEM TO LIST ON CLICK
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="task" placeholder="task" />
          {/* WHAT DO I REFERENCE FOR THE FORM? */}
          <button type="button" onClick={this.handleClick}>
            Submit
          </button>
        </form>
        <Overview list={this.state.list} />
      </div>
    );
  }
}

export default App;
