import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServicesCard({icon,title, text,to,iconBackground,shadowColor,...rest}){
return(
<Card itemCenter={false} backgroundColor="#fff" {...rest}>
  <Card.Icon as="div" background={iconBackground} shadowColor={shadowColor || "#0041ff"} >
    {icon}
  </Card.Icon>
  <Card.Title as="">{title}</Card.Title>
  <Card.Text>{text}</Card.Text>
</Card>
)
}