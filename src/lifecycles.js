import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('didMount');
  }

  componentDidUpdate() {
    console.log('didUpdate');
  }

  componentWillUnmount() {
    console.log('willUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldUpdate', nextProps);
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log('render');
    return (
      <div className='lifecycles'>
        <h1>Lifecycles Component</h1>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
