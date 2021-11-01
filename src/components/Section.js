import React from 'react'
import styled from 'styled-components'
import img3 from '../assets/images/model-3.jpg'
import imgs from '../assets/images/model-s.jpg'
import imgx from '../assets/images/model-x.jpg'
import imgy from '../assets/images/model-y.jpg'
import downA from '../assets/images/down-arrow.svg'
import solara from '../assets/images/solar-panel.jpg'
import solarr from '../assets/images/solar-roof.jpg'
import accessa from '../assets/images/accessories.jpg'
import Fade from 'react-reveal/Fade'

let a = ''

const Section = (props) => {
    a = props.backgroundImg;
    const jack = `img${a.charAt(6)}`;
    //console.log(`img${a.charAt(6)}`);
    //console.log(img+a.charAt(6));
    const logo = require('./../assets/images/model-x.jpg'); 

    return (
        <Wrap imageN={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>
                        {props.rightBtnText&&<RightButton>
                            {props.rightBtnText}
                        </RightButton>}
                    </ButtonGroup>
                    <DownArrow src={downA} />
                </Fade>
            </Buttons>
        </Wrap>
    )

//     return (
//         <Wrapper bgImage={props.backgroundImg}>
//             <ItemText>
//                 <h1>{props.title}</h1>
//                 <p>{props.description}</p>
//             </ItemText>
//             <Buttons>
//                 <ButtonGroup>
//                     <LeftButton>
//                         {props.leftBtnText}
//                     </LeftButton>
//                     {props.rightBtnText&&<RightButton>
//                         {props.rightBtnText}
//                     </RightButton>}
//                 </ButtonGroup>
//                 <DownArrow src={downA} />
//             </Buttons>
//         </Wrapper>
//     )
}

export default Section



// const Wrap = styled.div`
// width: 100%;
// height: 100%;
// background: url(${img3}) center center no-repeat;
// background-size: cover;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// overflow: hidden;
// `

const handletruth= () => {
    switch(a){
        case"model-3.jpg":
            return img3;
        case"model-s.jpg":
            return imgs;
        case"model-y.jpg":
            return imgy;
        case"model-x.jpg":
            return imgx;
        case"solar-panel.jpg":
            return solara;
        case"solar-roof.jpg":
            return solarr;
        case"accessories.jpg":
            return accessa;
    }
}

const handletruth2 = () => {
    
    return JSON.parse(`img${a.charAt(6)}`);
}

const handletruth3 = () => {
    
    return JSON.parse(`img${a.charAt(6)}`);
}

// const Wrapper = ({ bgImage }) => {
//     return <Wrap imageN={bgImage}></Wrap>
// }

const Wrap = styled.div`
width: 100%;
height: 100%;
background: url(${() => handletruth()}) center center no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
overflow: hidden;
`

const ItemText = styled.div`
padding-top: 25%;
text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media(max-width: 768px){
    flex-direction: column;
}
`

const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`

const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;
`

const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
overflow: hidden;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
`

