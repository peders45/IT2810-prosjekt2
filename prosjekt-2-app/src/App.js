import React from 'react';
import HeaderSection from './components/atoms/HeaderSection/HeaderSection'
import MainPage from './components/organisms/MainPage/MainPage';

//Main App class component managing state and functions for modifying state as well ass pasing props to components down the component tree.
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      category: ['Fjell', 'Sjø', 'By', 'Skog'],
      mediaCategories: [{ type: 'Bilde', categories: ['Minimalistisk', 'Silhuett', 'Abstrakt']},{ type: 'Lyd', categories: ['Opphold', 'Regn', 'Storm']}, { type: 'Tekst', categories: ['Dikt', 'Haiku', 'Sangtekst']} ],
      selectedTab: null,
      media: {
        image: null,
        sound: null,
        text: null
      }
    };
  }

  //Lifecycle hook for setting the default state based on the media categories and tabs
  //This is made so that the component in the future could fetch data and set it in the state instead of hard coding it.
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
    localStorage.setItem('favSound', this.state.media.sound);
  }

  onShowFavourite(){
      const favTab = localStorage.getItem('favTab');
      const favText = localStorage.getItem('favText');
      const favImage = localStorage.getItem('favImage');
      const favSound = localStorage.getItem('favSound');
      this.setState({selectedTab: favTab, media: {...this.state.media, text:favText, image:favImage, sound:favSound}});
  }

  render(){
  return (
    <div>
      <HeaderSection />
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
