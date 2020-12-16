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
          icon: 'TIME',
          mainText: '“It can take more than three weeks to get an appointment with a new doctor, but now, people in all 50 states can visit a physician throught their smartphone. Telemedicine has been touted as the next big thing for several years, and it’s finally…”',
          link: 'https://time.com/4766297/digital-doctors-future/',
          stars: 4,
          starsArray: ['*', '*', '*', '*']
        },
        {
          icon: 'ABC News',
          mainText: '"Because this has been such a bad flu season, we have seen a 100 percent increase in volume," Dr. Ian Tong, the chief medical officer at Doctor On Demand, told...',
          link: 'https://abcnews.go.com/Health/people-turning-virtual-health-care-options-amidst-deadly/story?id=52564574',
          stars: null,
          starsArray: []

        },
        {
          icon: 'THE WALL STREET JOURNAL',
          mainText: 'An online dollar store. Two services that link board-certified physicians and licensed psychiatrists and patients by video chat. A cybersecurity company that keeps hackers out of cars. These startups are part of the eclectic mix that makes up The Wall Street Journal’s ranking of 25 technology co…',
          link: 'https://www.wsj.com/articles/top-25-tech-companies-to-watch-1497492480',
          stars: 2,
          starsArray: ['*', '*']

        }

      ]
    };
    this.readmeLink = this.readmeLink.bind(this);
  }

  readmeLink(publication) {
    console.log('click: ', publication)
  }

  render() {
    return (
      <AppWrapper>
        <h1>Doctor on Demand Carousel</h1>
        <CarouselWrapper>
          {this.state.caroselItems.map(caroselItem => <CarouselHolder key={this.state.caroselItems.mainText} caroselItem={caroselItem} readmeLink={this.readmeLink} />)}

        </CarouselWrapper>
      </AppWrapper>
    );
  }
}

export default App;
