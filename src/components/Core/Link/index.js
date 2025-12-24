import React from "react"

import  Link  from "next/link"

const LinkComponent = ({children,to,...rest}) => {
  return <>
    <Link href={to} legacyBehavior>
        <a {...rest}>
          {children}
        </a>
    </Link>
  </>
}

export default LinkComponent
