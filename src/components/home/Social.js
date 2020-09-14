import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//animations
import { backgroundFadeIn } from '../../animations/HomeAnimations';
import birthday from '../../images/birthday.jpg'

const Styled = styled.div`
    height: 110vh;
    background-color: ${(props => props.theme.first)};
    position: relative;
    .background{
        height: 110vh;
        background-color: ${(props => props.theme.second)};
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 100vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .social-images{
            opacity: 1;
            display: grid;
            grid-template-columns: 180px 180px 180px 180px 180px;
            grid-template-rows: 180px 180px;
            gap: 20px 30px;
            grid-template-areas:
                "Image1 Image1 Image2 Image4 Image6"
                "Image1 Image1 Image3 Image5 Link";
            .image1{
                grid-area: Image1;
                background-color: #282c34;
                img{
                    height:100%;
                    width: 100%;
                }
            }
            .image2{
                grid-area: Image2;
                background-color: #282c34;
            }
            .image3{
                grid-area: Image3;
                background-color: #282c34;
            }
            .image4{
                grid-area: Image4;
                background-color: #282c34;
            }
            .image5{
                grid-area: Image5;
                background-color: #282c34;
            }
            .image6{
                grid-area: Image6;
                background-color: #282c34;
            }
        }
    }


`

const Social = () => {

    let section = useRef(null);
    let background = useRef(null);
    let images = useRef(null);

    useEffect(() => {

        backgroundFadeIn(background, section)
    })


    return (
        <Styled ref={el => section = el}>
            <div className="background" ref={el => background = el}>
                <div className="social-heading">
                    <h1>FOLLOW US ON INSTAGRAM</h1>
                    <h6>Keep up with all ours news and come say hi!</h6>
                </div>
                <div>
                    <h3>@littletap_cw6 #LT</h3>
                    <div className="social-images" ref={ el => images = el}>
                        <div className="image1">
                            <a href="https://www.instagram.com/p/CDBA5f4FbNS/"><img src={birthday} alt="little-tap-birthday" /></a>
                        </div>
                        <div className="image2"></div>
                        <div className="image3"></div>
                        <div className="image4"></div>
                        <div className="image5"></div>
                        <div className="link"></div>
                        <div className="image6"></div>
                    </div>
                </div>
            </div>
        </Styled>
    )
};

export default Social;