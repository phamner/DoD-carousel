import logo from './logo.svg';
import './App.css';
import React from 'react';
import CarouselHolder from './CarouselHolder.js';
import styled from 'styled-components';

const AppWrapper = styled.div`
background-color: #F9F9F9;
color: black;
border: 2px dashed green;
margin: auto;
text-align: center;
`

const CarouselWindowWrapper = styled.div`
background: transparent;
color: black;
border: 2px dashed purple;
margin: auto;
text-align: center;
display: flex;
justify-content: center;

overflow: hidden;
width: 876px;
`

const CarouselWrapper = styled.div`
color: black;
// border: 2px dashed purple;
margin: auto;
text-align: center;
display: flex;
justify-content: center;
width: 100%
transition: transform 500ms ease;
transform: translate(${props => props.carouselPosition + 'px'});
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
          icon: 'ABCNews',
          mainText: '"Because this has been such a bad flu season, we have seen a 100 percent increase in volume," Dr. Ian Tong, the chief medical officer at Doctor On Demand, told...',
          link: 'https://abcnews.go.com/Health/people-turning-virtual-health-care-options-amidst-deadly/story?id=52564574',
          stars: null,
          starsArray: []

        },
        {
          icon: 'TheWallStreetJournal',
          mainText: 'An online dollar store. Two services that link board-certified physicians and licensed psychiatrists and patients by video chat. A cybersecurity company that keeps hackers out of cars. These startups are part of the eclectic mix that makes up The Wall Street Journal’s ranking of 25 technology co…',
          link: 'https://www.wsj.com/articles/top-25-tech-companies-to-watch-1497492480',
          stars: 2,
          starsArray: ['*', '*']
        },
        {
          icon: 'MobiHealthNews',
          mainText: '“The launch of Synapse marks a major milestone for Doctor On Demand and the larger telemedicine industry...',
          link: 'https://www.mobihealthnews.com/content/doctor-demand-launches-integrated-virtual-primary-care-platform',
          stars: 3,
          starsArray: ['*', '*', '*']
        },
        {
          icon: 'Inc',
          mainText: '“Yosselyn Dupuis, Director of HR, PHR for telemedicine company Doctor On Demand, says there are three big hurdles that people have to overcome to get a plan that...',
          link: 'https://www.inc.com/wanda-thibodeaux/3-major-challenges-of-getting-great-healthcare-how-to-overcome-them.html',
          stars: 5,
          starsArray: ['*', '*', '*', '*', '*']

        },
        {
          icon: 'HuffingtonPost',
          mainText: '“If you want to feel better faster, see a doctor as soon as you can,” he said. “If you fall outside the window, Tamiflu [a flu treatment medicine] will not be effective, but your doctor can still recommend symptom…',
          link: 'https://www.huffpost.com/entry/cold-and-flu-tips_n_5a1eff05e4b0d52b8dc23eb5',
          stars: 4,
          starsArray: ['*', '*', '*', '*']
        }

      ],
      // carouselPosition: starting position is 436px
      carouselPosition: 436
    };
    this.readmeLink = this.readmeLink.bind(this);
    this.shiftCarouselRight = this.shiftCarouselRight.bind(this);
    this.shiftCarouselLeft = this.shiftCarouselLeft.bind(this);
  }

  readmeLink(publication) {
    // console.log('redirect user to: ', publication)
    'https://www.w3schools.com/jsref/event_onclick.asp'
  }

  shiftCarouselRight() {
    let currentPosition = this.state.carouselPosition;
    let newPosition = currentPosition + 292;
    if (currentPosition <= 144) {
      this.setState({
        carouselPosition: newPosition
      })
      console.log('RIGHT: add 292px to current position: ', this.state.carouselPosition)
    }
    console.log('RIGHT: no movement: ', this.state.carouselPosition)
  }

  shiftCarouselLeft() {
    let currentPosition = this.state.carouselPosition;
    let newPosition = currentPosition - 292;
    if (currentPosition >= -148) {
      this.setState({
        carouselPosition: newPosition
      })
      console.log('LEFT: add 292px to current position: ', this.state.carouselPosition)

    }
    console.log('LEFT: no movement: ', this.state.carouselPosition)


  }

  render() {
    return (
      <AppWrapper>
        <h1>Doctor on Demand Carousel</h1>
        <CarouselWindowWrapper>
          <CarouselWrapper carouselPosition={this.state.carouselPosition}>
            {this.state.caroselItems.map(caroselItem => <CarouselHolder key={this.state.caroselItems.mainText} caroselItem={caroselItem} readmeLink={this.readmeLink} />)}
          </CarouselWrapper>
        </CarouselWindowWrapper>
        <button type="button" onClick={this.shiftCarouselRight}>-</button>
        <button type="button" onClick={this.shiftCarouselLeft}>+</button>

      </AppWrapper>
    );
  }
}

export default App;
