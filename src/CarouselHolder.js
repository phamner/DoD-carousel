import styled from 'styled-components';
// import TIME from './src/images/TIME.png';
import ABCNews from './images/ABCNews.png';
import HuffingtonPost from './images/HuffingtonPost.png';
import Inc from './images/Inc.png';
import MobiHealthNews from './images/MobiHealthNews.png';
import TheWallStreetJournal from './images/TheWallStreetJournal.png';
import TIME from './images/TIME.png';

const CarouselItemWrapper = styled.div`
width: 240px;
background-color: #ffffff;
color: black;
border: 2px solid #ffffff;
margin: 16px;
padding: 8px;
box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.13);
`

const StarWrapper = styled.div`
width: 15rem;
background: transparent;
color: black;
// border: 2px dashed blue;
display: flex;
justify-content: center;
`

const MainTextWrapper = styled.div`
width: 15rem;
background: transparent;
color: black;
height: 12rem;
// border: 2px dashed blue;
`

const ReadArticlePWrapper = styled.p`
color: blue;
// border: 2px dashed blue;
cursor: pointer;
width: 7rem;
height: 1rem;
`
const ReadArticleDivWrapper = styled.div`
color: black;
// border: 2px dashed blue;
width: 15rem;
height: 2rem;
display: flex;
justify-content: center;
`

function CarouselHolder(props) {
    //PREVIOUS IMPLEMENTATION BELOW:
    // let stars = '';

    // if (props.stars !== null) {
    //     let allStars = ''
    //     for (let i = 0; i < props.caroselItem.stars; i++) {
    //         stars += `STAR`
    //     }
    // }

    //NEW IMPLEMENTATION

    console.log('In CarouselHolder component: ', props.caroselItem.link)


    let currentIcon;
    if (props.caroselItem.icon === 'ABCNews') {
        currentIcon = ABCNews
    } else if (props.caroselItem.icon === 'HuffingtonPost') {
        currentIcon = HuffingtonPost
    } else if (props.caroselItem.icon === 'Inc') {
        currentIcon = Inc
    } else if (props.caroselItem.icon === 'MobiHealthNews') {
        currentIcon = MobiHealthNews
    } else if (props.caroselItem.icon === 'TheWallStreetJournal') {
        currentIcon = TheWallStreetJournal
    } else if (props.caroselItem.icon === 'TIME') {
        currentIcon = TIME
    }

    let starCounterId = 0;

    let children = props.caroselItem.starsArray.map((val) => {
        starCounterId++;
        return (
            <div id={starCounterId}>*&nbsp;&nbsp;</div>
        )
    });

    if (props.caroselItem.starsArray.length < 1 || props.caroselItem.starsArray === null) {
        children = <div id={starCounterId}>&nbsp;</div>
    }

    let linkToArticle = props.caroselItem.link;

    return (
        <CarouselItemWrapper>
            <StarWrapper>
                {children}
            </StarWrapper>
            {/* {stars} */}
            <img src={currentIcon} alt="ICON" height="28" />

            <MainTextWrapper>
                <p>{props.caroselItem.mainText}</p>
            </MainTextWrapper>
            <ReadArticleDivWrapper>
                <ReadArticlePWrapper onClick={() => window.location.href = linkToArticle}>Read article</ReadArticlePWrapper>
            </ReadArticleDivWrapper>
        </CarouselItemWrapper>
    )
}

export default CarouselHolder;