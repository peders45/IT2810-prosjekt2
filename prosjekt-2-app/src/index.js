import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import CheckboxSection from './components/molecules/checkboxSection/CheckboxSection'
import MainPage from './components/organisms/MainPage/MainPage'
const category = ['fisk', 'eple'];


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {selectedTab: null};
  }

  componentDidMount(){
    this.setState(({selectedTab: category[0]}))
  }

  setSelectedTab(sel){
    this.setState(({selectedTab: sel}))
  };

  render(){
  return (
    <div>
      <MainPage category={category} setSelectedTab={this.setSelectedTab.bind(this)} selectedTab={this.state.selectedTab} />
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
