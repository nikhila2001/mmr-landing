import styled from "styled-components"
import { Box, Heading, Paragraph } from "~styled"

const Feature = styled(Box)`
    position: relative;
    overflow: hidden;
     background-color:white;
   padding-top: 60px;
  padding-bottom: 60px;
    @media (min-width:768px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media (min-width:992px) {
        padding-top: 125px;
        padding-bottom: 105px;
    }
    /* .newsletter-form {
        max-width: 521px;
    } */
`
Feature.Shapes = styled(Box)`
    position: absolute;
    right: 0;
    top: -7%;
    width: 25%;
    z-index: 1;
`
Feature.ShapeOne = styled(Box)`
`
Feature.ShapeTwo = styled(Box)`
    width: 50%;
    position: absolute;
    top: 30%;
    right: -30%;
    z-index: -1;
`
Feature.Title = styled(Heading)`
    text-align:center;
    font-size: 42px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 16px;

    @media (min-width:480px) {
        font-size: 40px;
    }

    @media (min-width:768px) {
        letter-spacing: -2px;
        font-size: 42px;
        font-weight: 700;
    }

    @media (min-width:992px) {
        font-size: 42px;
    }
`
Feature.Text = styled(Paragraph)`
    font-size: 16px;
    font-weight: 400;
    color:#4a5565;
    letter-spacing: normal;
    line-height: 1.5;
    opacity:.7;
    margin-bottom:0;
    @media (min-width:992px) {
        font-size: 16px;
    }
`

Feature.Tab = styled(Box).attrs(props => ({
    className: "row"
}))`
    .nav{
        display:flex;
        /* justify-content:center; */
        a{
            color:#fff;
            padding:0;
            &.active{
                .nav-widget{
                    background-color: var(--bs-white);
                    color: var(--bs-blue-ribbon);
                    border-radius: 10px;
                    color: #2b59ff!important;
                    i {
                        color:var(--bs-primary);
                    }
                }
                
            }
        }
    }
`
Feature.TabNavWrapper = styled(Box)`
    @media (min-width:1200px){
        padding-right: 65px;
    }
    @media (min-width:1400px){
        padding-right: 110px;
    }
`
Feature.Box = styled(Box)`
text-align:start;
`
Feature.Icon = styled(Box)`
  width: 64px;
  height: 64px;
  border-radius: 16px; /* rounded-2xl */
  background: linear-gradient(135deg, #2b9fe8, #6cc4f0);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-bottom: 1.5rem; /* mb-6 */`

Feature.Wrapper = styled.div`
 max-width: 520px;
  width: 100%;
  height: 400px;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  transition: all 0.35s ease;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.07);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 45px rgba(0, 0, 0, 0.12);
  }
`
Feature.Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`
export default Feature
