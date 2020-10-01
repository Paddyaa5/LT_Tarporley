import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

//components
import Button from '../all/Button'
import Title from '../all/Title'
import Headline from '../all/Headline'


const Styled = styled.div`
    height: auto;
    width: 100vw;
    padding: 20px;
    display: grid;
    border-top: 1px solid ${props => props.theme.first};
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;
    grid-template-areas:
    "form location";
    grid-gap: 10px 10px;
    @media screen and (max-width: 900px){
        grid-template-columns: 1fr;
        grid-template-rows: 50% 50%;
        grid-template-areas:
        "form"
        "location";
    }
    
    .form-section{
        grid-area: form;
        .intro{
            height: 300px;
            width: 100%;
        }
        form{
            margin: 60px 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .form-items{
                outline: none;
                font-family: ${props => props.theme.font2};
                color: ${props => props.theme.second};
                background-color: ${(props) => props.theme.first};
            }
            input{
                width: 40vw;
                height: 40px;
                margin-bottom: 10px;
                outline: none;
                @media screen and (max-width: 900px){
                    height: 30px;
                    width: 60vw;
                }
            }
            textarea{
                width: 40vw;
                height: 150px;
                outline: none;
                @media screen and (max-width: 900px){
                    height: 100px;
                    width: 60vw;
                }
            }
            button{
                margin-top: 30px;
                width: 100px;
                height: 40px;
                background-color: ${(props) => props.theme.first};
                color: ${(props) => props.theme.col1}
            }
            button:hover{
                background-color: ${(props) => props.theme.fourth};
                color: ${(props) => props.theme.second};
            }
        }
    }
    .

`

const Main = () => {
    return (
        <Styled>
            <Title text="Say Hello!" />
            <Headline text="We would love to hear from you and will respond as soon as we possible" />
            <div className="form-section">
                <div className="intro"></div>
                <form action="https://send.pageclip.co/3zEd43iTR94cUVrMCL84A2stz6xLHJ1S" method="POST">
                <input 
                    className="form-item"
                    type="text" 
                    placeholder="Name.." 
                    id="name" 
                    name="name"
                />
                <input 
                    className="form-item"
                    type="email" 
                    placeholder="Email.." 
                    id="email" 
                    name="email"
                />
                <input 
                    className="form-item"
                    type="subject" 
                    placeholder="Subject.." 
                    id="subject"
                    name="subject"
                />
                <textarea 
                    className="form-item"
                    id="message"
                    name="message"
                />
                <Button className="form-item" type="submit" text="send" />
            </form>
            </div>
            <div className="location-section">

            </div>
        </Styled>
    )
}

export default Main
