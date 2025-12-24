import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Service = styled(Box)`
    padding-top: 64px;
    padding-bottom: 64px;

    @media (min-width:768px) {
        padding-top: 96px;
        padding-bottom: 96px;
         background: linear-gradient(to bottom, white, #F5F7FA);
    }

    @media (min-width:992px) {
        padding-top: 110px;
        padding-bottom: 100px;
    }

`
Service.Title = styled(Heading)`
    font-size: 32px;
    margin-bottom:16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.3;
    position:relative;
    color:#1a1a2e;
    @media (min-width:768px) {
      font-size: 42px;
      font-weight: 700;
    }

    @media (min-width:992px) {
      font-size: 48px;
      font-weight: 700;
    }
`
Service.Subtitle = styled(Heading)`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.5;
     
`

Service.Box = styled(Box)``


export default Service;