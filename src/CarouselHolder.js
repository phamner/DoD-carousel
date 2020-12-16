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

function CarouselHolder(props) {
    //PREVIOUS IMPLEMENTATION BELOW:
    // let stars = '';
    // let fakeData = ['*', '*', '*', '*']

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

    let currentStore = props.caroselItem.icon;

    return (

        <CarouselItemWrapper>
            <StarWrapper>
                {children}
            </StarWrapper>
            {/* {stars} */}
            <div>icon</div>
            <p>main text</p>
            <p onClick={() => props.readmeLink(currentStore)}>Read article</p>
        </CarouselItemWrapper>
    )
}

export default CarouselHolder;