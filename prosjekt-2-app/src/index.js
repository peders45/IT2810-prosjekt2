import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainPage from './components/organisms/MainPage/MainPage';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      category: ['Fjell', 'Sjø', 'By', 'Skog'],
      mediaCategories: [{ type: 'Bilde', categories: ['Minimalistisk', 'Naturlig', 'Abstrakt']},{ type: 'Lyd', categories: ['Opphold', 'Regn', 'Storm']}, { type: 'Tekst', categories: ['Dikt', 'Haiku', 'Sangtekst']} ],
      selectedTab: null,
      media: {
        image: null,
        sound: null,
        text: null
      }
    };
  }

  componentDidMount(){
    this.setState({selectedTab: this.state.category[0], media: {...this.state.media, sound:'Opphold', image:'Minimalistisk', text:'Dikt'}})
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

  onSaveFavourite(){
    localStorage.setItem('favImage', this.state.media.image);
    localStorage.setItem('favTab', this.state.selectedTab);
    localStorage.setItem('favText', this.state.media.text);
  }

  onShowFavourite(){
      const favTab = localStorage.getItem('favTab');
      const favText = localStorage.getItem('favText');
      const favImage = localStorage.getItem('favImage');
      this.setState({selectedTab: favTab, media: {...this.state.media, text:favText, image:favImage}});
  }

  render(){
  return (
    <div>
      <MainPage
      mediaCategories={this.state.mediaCategories}
      category={this.state.category}
      setSelectedTab={this.setSelectedTab.bind(this)}
      selectedTab={this.state.selectedTab}
      selectedSound= {this.state.media.sound}
      selectedImage= {this.state.media.image}
      selectedText= {this.state.media.text}
      setSelectedSound= {this.setSelectedSound.bind(this)}
      setSelectedImage= {this.setSelectedImage.bind(this)}
      setSelectedText= {this.setSelectedText.bind(this)}
      onSaveFavourite={this.onSaveFavourite.bind(this)}
      onShowFavourite={this.onShowFavourite.bind(this)}
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
