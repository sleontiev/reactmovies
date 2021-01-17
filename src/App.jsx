import React, { Component } from 'react';
import { Footer } from './Layout/Footer/Footer';
import { Header } from './Layout/Header/Header';
import { Main } from './Layout/Main/Main';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App


