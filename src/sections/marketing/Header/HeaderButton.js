import React from 'react'
import { Link } from '~components'
import styled from 'styled-components'
import { Box } from '~styled'

export const HeaderButtonWrapper = styled(Box)`
  display: flex;
  align-items: center;
  font-size: 14px;
    .lang-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #1f2230;
    margin-right: 8px;
  }
    .btn{
        min-width:auto;
        height: 42px;
        border-radius: 3px;
        color: var(--bs-white);
        font-size: 16px;
        font-weight: 400;
        line-height: 1.2;
        display:flex;
        align-items:center;
        justify-content:center;
        padding-left:15px;
        padding-right:15px;
        letter-spacing: -0.4px;
        color:#262729;
        margin-left:10px;
        &:hover {
      color: #1a73e8;
      text-decoration: none;
    }
        &-2{
            min-width: 129px;
            height: 42px;
            background-color: #f2f5fb;
            border-color: #f2f5fb;
        }
    }
          .divider {
    width: 1px;
    height: 16px;
    background: #d4d7e2;
    margin: 0 4px;
  }
`
const HeaderButton = ({btnOneLink,btnTwoLink,btnOneText,btnTwoText,btnThreeText,...rest})=>{
    return(
        <HeaderButtonWrapper {...rest}>
               <span className="lang-icon">
        <i className="fa fa-globe" aria-hidden="true" />
      </span>
            <Link target="_blank" className="btn" to={btnOneLink ? btnOneLink : "/"}>
                {btnOneText}
            </Link>
            <span className="divider" />
            <Link target="_blank" className="btn" to={btnTwoLink ? btnTwoLink : "/"}>
                {btnTwoText}
            </Link>
            <span className="divider" />
            <Link target="_blank" className="btn" to={btnTwoLink ? btnTwoLink : "/"}>
                {btnThreeText}
            </Link>
        </HeaderButtonWrapper>
    )
}

export default HeaderButton;