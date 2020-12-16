import styled from 'styled-components';

const CarouselItemWrapper = styled.div`
width: 15rem;
background: transparent;
color: black;
border: 2px solid black;
margin: 1rem;
padding: 0.5rem;
border-radius: 25px;

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
color: black;
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
    console.log(props.caroselItem.mainText)
    //PREVIOUS IMPLEMENTATION BELOW:
    // let stars = '';

    // if (props.stars !== null) {
    //     let allStars = ''
    //     for (let i = 0; i < props.caroselItem.stars; i++) {
    //         stars += `STAR`
    //     }
    // }

    //NEW IMPLEMENTATION
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

    let publication = props.caroselItem.icon;

    return (

        <CarouselItemWrapper>
            <StarWrapper>
                {children}
            </StarWrapper>
            {/* {stars} */}
            <div>icon</div>
            <MainTextWrapper>
                <p>{props.caroselItem.mainText}</p>
            </MainTextWrapper>
            <ReadArticleDivWrapper>
                <ReadArticlePWrapper onClick={() => props.readmeLink(publication)}>Read article</ReadArticlePWrapper>

            </ReadArticleDivWrapper>
        </CarouselItemWrapper>
    )
}

export default CarouselHolder;