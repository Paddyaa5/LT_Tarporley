import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//images
import inside1 from '../../images/wall2.jpg';

//animations
import { textFadeIn, lineExpand, imageReveal } from '../../animations/HomeAnimations';


const Styled = styled.div`
    height: 220vh;
    background-color: ${(props => props.theme.first)};
    .about-section{
        height: 110vh;
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 15% 70% 15%;
        gap: 10px 10px;
        grid-template-areas:
            ". image"
            "text image"
            ". image";
        padding: 20px 20px;
        @media screen and (max-width: 950px){
            height: 100vh;
        }
        @media screen and (max-width: 500px){
            height: 80vh;
        }
        .about-text{
            grid-area: text; 
            padding: 20px 20px;
            .section-text{
                margin-left: 40px;
                height: 200px;
                border-left: 2px solid;
                padding-top: 5px;
                hr{
                    border: 1px solid ${(props => props.theme.second)};
                    margin-top: 20px;
                    margin-bottom: 10px;
                    margin-left: -25px;
                    width: 0px
                }
            }

            h4{
                opacity: 0;
                color: ${(props => props.theme.third)};
                font-family: ${(props => props.theme.font1)};
                font-size: 40px;
                font-weight: 200;
                margin-bottom: 20px;
                margin-left: 20px;
            }
            p{
                opacity: 0;
                font-family: ${(props => props.theme.font3)};
                font-size: 14px;
                column-count: 2;
                column-gap: 20px;
                margin-left: 20px;
                text-transform: justify;
            }
        }
        .about-image{
            grid-area: image;
            display: flex;
            justify-content: center;
            align-items: center;
            .long-image{
                position: relative;
                top: 120px;
                opacity: 0;
                margin: 0 auto;
                height: 50%;
                width: 70%;
                object-fit: cover;
                @media screen and (max-width: 950px){
                    height: 60%;
                }
                @media screen and (max-width: 500px){
                    height: 50%;
                }
            }
        }
    }
    .concept-section{
        height: 110vh;

        h1{
            font-family: ${props => props.theme.font1};
            color: ${props => props.theme.second};
            font-size: 50px;
            font-weight: 200;
            margin-left: 50px;
        }
        h6{
            margin-top: 20px;
            font-family: ${props => props.theme.font2};
            color: ${props => props.theme.second};
            font-size: 40px;     
            text-align: center;
       }
        p{
            margin: 20px 530px;
            font-family: ${props => props.theme.font3};
            color: ${props => props.theme.second};
            font-size: 14px;     
            text-align: justify;
       }
    }
`

const About = () => {

    let title = useRef(null)
    let text = useRef(null)
    let horizontal = useRef(null)
    let sectionText = useRef(null)
    let longImage = useRef(null)

    useEffect(() => {
        textFadeIn(title, text, sectionText)
        lineExpand(horizontal, sectionText)
        imageReveal(longImage)
    })

    return (
        <Styled>
            <div className="about-section">
                <div className="about-text">
                    <div className="section-text" ref={ el => sectionText = el}>
                        <hr ref={ el => horizontal = el}></hr>
                        <h4 className="section-title" ref={ el => title = el}>About Us</h4>
                        <p ref={ el => text = el}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <div className="about-image">
                    <img src={inside1} alt="little-tap-restaurant" className="long-image" ref={ el => longImage = el}></img>
                </div>
            </div>
            <div className="concept-section">

            </div>
        </Styled>
    )
};

export default About;
