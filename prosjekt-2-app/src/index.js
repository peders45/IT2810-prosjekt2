import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import CheckboxSection from './components/molecules/checkboxSection/CheckboxSection'
import MainPage from './components/organisms/MainPage/MainPage';
const category = ['fisk', 'eple'];
const mediaCategories = [{ type: 'Bilde', categories: ['Minimalistisk', 'Naturlig', 'Abstrakt']},{ type: 'Lyd', categories: ['Opphold', 'Regn', 'Storm']}, { type: 'Tekst', categories: ['Dikt', 'Haiku', 'Sangtekst']} ]


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: null,
      media: {
        image: null,
        sound: null,
        text: null
      }
    };
  }

  componentDidMount(){
    this.setState({selectedTab: category[0]})
  }

  setSelectedTab(sel){
    this.setState({selectedTab: sel})
  };

  setSelectedSound(sel){
    this.setState({media: {...this.state.media, sound:sel}})
  };
  setSelectedImage(sel){
    this.setState({media: {...this.state.media, image:sel}})
  };
  setSelectedText(sel){
    this.setState({media: {...this.state.media, text:sel}})
  };

  render(){
  return (
    <div>
      <MainPage
      mediaCategories={mediaCategories}
      category={category}
      setSelectedTab={this.setSelectedTab.bind(this)}
      selectedTab={this.state.selectedTab}
      selectedSound= {this.state.media.sound}
      selectedImage= {this.state.media.image}
      selectedText= {this.state.media.text}
      setSelectedSound= {this.setSelectedSound.bind(this)}
      setSelectedImage= {this.setSelectedImage.bind(this)}
      setSelectedText= {this.setSelectedText.bind(this)}
      />
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
