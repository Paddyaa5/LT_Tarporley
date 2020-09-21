import React from 'react';
import styled from 'styled-components';

import birthday from '../../images/birthday.jpg'

const Styled = styled.div`
    height: 120vh;
    background-color: ${(props => props.theme.first)};
    position: relative;
    .background{
        height: 120vh;
        background-color: ${(props => props.theme.second)};
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .social-heading{
            position: relative;
            top: 100px;
            left: -400px;
            width: 500px;
            text-align: center;
            h1{
                font-family: ${props => props.theme.font1};
                color: ${props => props.theme.fourth};
                font-weight: 400;   
                font-size: 50px;
            }
        }
        .social-images{
            opacity: 0;
            display: grid;
            grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;
            grid-template-rows: 1fr 1fr;
            gap: 20px 20px;
            grid-template-areas:
                "hashtag hashtag hashtag hashtag image2 image2 image2 image5 image5 image5"
                "hashtag hashtag hashtag hashtag image2 image2 image2 image5 image5 image5"
                "image1 image1 image1 image1 image2 image2 image2 image5 image5 image5"
                "image1 image1 image1 image1 image3 image3 image4 image4 link link"
                "image1 image1 image1 image1 image3 image3 image4 image4 link link"
                "image1 image1 image1 image1 . . . . . .";
            .hashtag{
                grid-area: hashtag;
                display:flex;
                justify-content: center;
                align-items: center;
            }
            .image1{
                grid-area: image1;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .image2{
                grid-area: image2;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .image3{
                grid-area: image3;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .image4{
                grid-area: image4;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .image5{
                grid-area: image5;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }


`

const Social = () => {

    return (
        <Styled>
            <div className="background">
                <div className="social-heading">
                    <h1>FOLLOW US <br></br>#LT</h1>
                    <h6>Keep up with all ours news and come say hi!</h6>
                </div>
                <div>
                    <div className="social-images">
                        <div className="hashtag">@littletap_cw6 #LT</div>
                        <div className="image1">
                            <a href="https://www.instagram.com/p/CDBA5f4FbNS/"><img src={birthday} alt="little-tap-birthday" /></a>
                        </div>
                        
                        <div className="image2">
                            <a href="https://www.instagram.com/p/CDBA5f4FbNS/"><img src={birthday} alt="little-tap-birthday" /></a>
                        </div>
                        <div className="image3">
                        <a href="https://www.instagram.com/p/CDBA5f4FbNS/"><img src={birthday} alt="little-tap-birthday" /></a>
                        </div>
                        <div className="image4">
                        <a href="https://www.instagram.com/p/CDBA5f4FbNS/"><img src={birthday} alt="little-tap-birthday" /></a>
                        </div>
                        <div className="image5">
                        <a href="https://www.instagram.com/p/CDBA5f4FbNS/"><img src={birthday} alt="little-tap-birthday" /></a>
                        </div>
                        <div className="link"></div>
                    </div>
                </div>
            </div>
        </Styled>
    )
};

export default Social;