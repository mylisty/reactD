import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clock from './Clock'
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(row,f) {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log("aaaaaaaaaaa"+row +' '+ f)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this,'b')}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={(e,f) => this.handleClick('c','f',e,f)}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>

    );
  }
}

ReactDOM.render(<Toggle/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
