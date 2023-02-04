import React from "react";
import logo from "../../imgs/logo.png";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const StyledBanner = styled.div`
  color:white;
  background-color: ${(props) => props.theme.dark};
`
const theme = {
  dark : "#000000"
}

const Banner = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBanner>
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <span> the cool stuff.</span>
        </div>
      </div>
      </StyledBanner>
    </ThemeProvider>
  );
};

export default Banner;
