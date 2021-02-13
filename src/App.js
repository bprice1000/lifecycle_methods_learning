import React from 'react'
import Lifecycles from './lifecycles'
import './App.css';

// {This is modified of @buihuyhung's lecture to learn the timing of lifecycle methods}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showChild: true,
      text: ''
    };
  }

  render() {
    return (
      <div className="buttons">
      <button onClick={() => this.setState(state => ({showChild: !state.showChild}))}>Toggle Lifecycles</button>
      <button onClick={() => this.setState(state => ({ text: state.text + '<hi>' }))}>Update Text</button>
      {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
      <h6>Open Console to learn</h6>
      </div>
  );
  }
}

export default App;
