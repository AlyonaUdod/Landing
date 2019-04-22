import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

class App extends Component {

  state = {
    toggle: false,
  }

  toggleModal = () => {
    this.setState(prev=>({
      toggle: !prev.toggle,
    }))
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Header toggle={this.state.toggle} toggleModal={this.toggleModal}/>
        <Main/>
        <Footer/>
      </React.Fragment>
    );
  };
};

export default App;