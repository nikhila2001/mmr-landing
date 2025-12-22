import React from 'react'
// import darklogo from '../../../assets/image/logo/logo-black.png'
// import lightLogo from '../../../assets/image/logo/logo-white.png'
export default function BrandLogo({logoWhite=false,...rest}){
return(
<>
    <img src={logoWhite ? '../../../assets/image/logo/logo-white.png' : '../../../assets/image/logo/logo-black.png' } alt="brand logo" {...rest}/>
</>
)
}