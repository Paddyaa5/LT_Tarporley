import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./Navigation";
import Hambrg from "./Hambrg";

const Styled = styled.header`
  position: fixed;
  font-family: ${(props) => props.theme.font1};
  z-index: 1000;
  width: 100vw;
  min-width: 100vw;
  button{
    outline: none;
    border: none;
  }
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;  
  }
  .menu-box{
    position: fixed;
    top: 20px;
    right: 20px;
    height: 50px;
    width: 50px;
    background-color: ${(props => props.theme.first)};
    color: ${(props => props.theme.second)};
    border: ${(props => props.theme.second)} 3px solid;
    font-family: ${(props => props.theme.font1)};
    font-size: 30px;
    font-weight: 200;
  }
  .menu-rectangle{
    position: fixed;
    top: 20px;
    right: 70px;
    height: 50px;
    width: 100px;
    background-color: ${(props => props.theme.second)};
    color: ${(props => props.theme.first)};
    font-family: ${(props => props.theme.font2)};
    font-size: 22px;
  }
`

const Header = ({ history }) => {
  // initial = site first load, menu not visible (false)
  // clicked = has the user clicked the menu button
  // menuName = the string shown in the menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // state to determine if our menu button is disabled
  const [disabled, setDisabled] = useState(false);

  //Effect for pages changes - Listen to page changes via withRouter history prop.
  useEffect(() => {
    history.listen(() => {
      setState({
        clicked: false,
        menuName: "Menu",
      });
    });
  });
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: false,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: true,
        menuName: "Close",
      });
    }
  };
  const disableMenu = () => {
    setDisabled(!disabled);

    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  return (
    <>
      <Styled>
          <button disabled={disabled} onClick={handleMenu}>
            <div className="menu-box">
              <Hambrg state={state} />
            </div>
            <div className="menu-rectangle">Menu</div>
          </button>
      </Styled>
      <Navigation state={state} />
    </>
  );
};

export default withRouter(Header);
