import React from "react"
import Image from "next/image"
import { Navbar } from "react-bootstrap"
// import siteBrandDark from "./image/logo/logo-black.png"
// import siteBrandLight from "./image/logo/logo-white.png"
import Menu from "./Menu"
const SiteNavbar = ({buttonBlock,darkLogo,customLogo,defaultLogo}) => {

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar container-xl  px-0"
      >
        {/* <Navbar.Brand href="/">

          {defaultLogo ? (<img src={defaultLogo} alt="site-brand"/>) : customLogo ? (
            <img src={customLogo} alt="site-brand" />
          ) : (
            <img src={darkLogo? "/image/logo/logo-black.png" : "/image/logo/logo-white.png"} alt="site-brand"/>
          )}
        </Navbar.Brand> */}

        <Navbar.Brand href="/">
  <div className="d-flex align-items-center gap-3">
    <img
      src={
        defaultLogo
          ? defaultLogo
          : customLogo
          ? customLogo
          : darkLogo
          ? "/image/logo/mmr-logo.png"
          : "/image/logo/mmr-logo.png"
      }
      alt="MMR Logo"
      className="img-fluid"
      style={{
        height: "40px",        // h-10
        width: "40px",         // w-10
      }}
    />

    <span
      className="fw-bold"
      style={{
        fontSize: "24px",
        color: "#2B9FE8",
      }}
    >
      MMR
    </span>
  </div>
</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburgur"
        />
        <Menu/>
        {buttonBlock}
      </Navbar>
    </>
  )
}

export default SiteNavbar
