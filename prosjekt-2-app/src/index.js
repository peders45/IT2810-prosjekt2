import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CheckboxSection from './components/molecules/checkboxSection/CheckboxSection'

const category = ['fisk', 'eple'];


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {selected: null};
  }

  setSelected(sel){
    this.setState(({selected: sel}))
  };

  render(){
  return (
    <div>
      <header>
        <p>This will be the main page where everything will be placed.</p>
      </header>
      <p>Example of react radio buttons:</p>
      <CheckboxSection category={category} setSelected={this.setSelected.bind(this)} selected={this.state.selected}/>
    </div>
  );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();