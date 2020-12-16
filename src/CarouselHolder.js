import styled from 'styled-components';

const CarouselItemWrapper = styled.div`
width: 15rem;
background: transparent;
color: black;
border: 2px dashed red;
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
            <p onClick={() => props.readmeLink(publication)}>Read article</p>
        </CarouselItemWrapper>
    )
}

export default CarouselHolder;