import React from 'react'
import styled from 'styled-components'
const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999999;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  display: ${props => props.display};
    img {
      z-index: 9999;
      max-width: 150px;
    }
    animation: floatUpDown 3.5s ease-in-out infinite;
  
  @keyframes floatUpDown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-18px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`
const Loader = ({show}) => {
return(
<LoaderWrapper display={show ? "flex" : "none"}>
    <img src="image/logo/mmr-logo.png" alt="img"/>
</LoaderWrapper>
)
}
 
export default Loader