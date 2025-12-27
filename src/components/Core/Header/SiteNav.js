import React from "react"
import { Navbar } from "react-bootstrap"
import Menu from "./Menu"
const SiteNavbar = ({ buttonBlock, darkLogo, customLogo, defaultLogo }) => {

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar container-xl  px-0"
      >
        <Navbar.Brand href="#">
          <div className="d-flex align-items-center gap-2">
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
        <Menu />
        {buttonBlock}
      </Navbar>
    </>
  )
}

export default SiteNavbar
