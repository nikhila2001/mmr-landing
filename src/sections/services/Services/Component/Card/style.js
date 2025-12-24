import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

import {transparentize,rgba} from "polished"
const propToColor = (arg = "#1787FC" ) => transparentize(0.70, arg);
const Card = styled(Box).attrs({className:"service-card"})`
    border: 1px solid white;
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    height:100%;
    border-radius: 15px;
    transition: 0.4s;
    display:flex;
    flex-direction:column;
    align-items:${props => props.itemCenter ? "center" : null};
    text-align:${props => props.itemCenter ? "center" : null};
    color:#25373f;
    @media (min-width:575px) {
        padding-left: 32px;
        padding-right: 32px;
    }
    @media (min-width:768px) {
        padding-left: 32px;
        padding-right: 32px;
    }
    @media (min-width:992px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    &:hover{
       box-shadow:  0 10px 30px rgba(0, 0, 0, 0.08);
    }
    
`
Card.Icon = styled(Box)`
        min-width: 60px;
        max-width: 60px;
        min-height: 60px;
        max-height: 60px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        margin-bottom: 16px;
        background:${props => props.background};
        box-shadow:  ${props => props.background ? "-12px 12px 50px " + rgba(props.background,.3): "none"};
        
`
Card.Title = styled(Heading)`
        font-size: 20px;
        font-weight: 600;
        letter-spacing: normal;
        color:#1a1a2e;
        margin-bottom:8px;

`
Card.Text = styled(Paragraph)`
        font-size: 15px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.5;
        opacity:.5;
        color:#4a5565;
        margin-bottom:0;
`
Card.Button = styled(Box)`
        font-size: 15px;
        font-weight: 500;
        font-style: normal;
        letter-spacing: normal;
        line-height: 26px;
        display: flex;
        align-items: center;
        color: inherit;
        transition: 0.4s;

        i {
            margin-left: 10px;
        }
`

export default Card;