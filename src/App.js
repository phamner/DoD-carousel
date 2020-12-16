import logo from './logo.svg';
import './App.css';
import React from 'react';
import CarouselHolder from './CarouselHolder.js';
import styled from 'styled-components';



const AppWrapper = styled.div`
// border-radius: 3px;
// padding: 0.5rem 0;
// margin: 0.5rem 1rem;
// width: 16rem;
background: transparent;
color: black;
border: 2px dashed green;
margin: auto;
text-align: center;
`

const CarouselWrapper = styled.div`
// border-radius: 3px;
// padding: 0.5rem 0;
// margin: 0.5rem 1rem;
// width: 16rem;
background: transparent;
color: black;
border: 2px dashed purple;
margin: auto;
text-align: center;
display: flex;
justify-content: center;
`



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caroselItems: [
        {
          icon: 'Safeway',
          mainText: 'maintext string',
          link: 'url',
          stars: 4,
          starsArray: ['*', '*', '*', '*']
        },
        {
          icon: null,
          mainText: 'maintext stringggg',
          link: null,
          stars: null,
          starsArray: []

        },
        {
          icon: 'Trader Joes',
          mainText: 'the main text will be here',
          link: 'url',
          stars: 2,
          starsArray: ['*', '*']

        }

      ]
    };
    this.readmeLink = this.readmeLink.bind(this);
  }

  readmeLink(store) {
    console.log('click: ', store)
  }

  render() {
    return (
      <AppWrapper>
        <h1>Hello, world react app!</h1>
        <CarouselWrapper>
          {this.state.caroselItems.map(caroselItem => <CarouselHolder key={this.state.caroselItems.mainText} caroselItem={caroselItem} readmeLink={this.readmeLink} />)}

        </CarouselWrapper>
      </AppWrapper>
    );
  }
}

export default App;
