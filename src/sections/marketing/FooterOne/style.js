// import styled from "styled-components"
// import { Link } from "~components"
// import { Box, Button, Heading, Paragraph } from "~styled"

// const Footer = styled(Box)`
//   padding-top: 60px;
//   padding-bottom: 20px;

//   @media (min-width: 768px) {
//     padding-top: 80px;
//   }

//   @media (min-width: 992px) {
//     padding-top: 100px;
//     padding-bottom: 20px;
//   }
// `
// Footer.Widgets = styled(Box)``
// Footer.Newsletter = styled(Box)`
//   form {
//     text-align: right;

//     input {
//       width: 100%;
//       border: none;
//       height: 56px;
//       border-radius: 50px;
//       background-color: #fff;
//       margin-bottom: 20px;
//       padding: 0 20px;

//       &:focus {
//         outline: none;
//         box-shadow: none;
//       }
//     }
//   }
// `
// Footer.Link = styled(Box)``

// Footer.Title = styled(Heading)`
//   font-size: 16px;
//   font-weight: 400;
//   letter-spacing: normal;
//   line-height: 28px;
//   margin-bottom: 25px;
//   color: #fff;
//   opacity: 0.7;
// `

// Footer.Text = styled(Paragraph)`
//   color: rgba(255, 255, 255, 0.7);
//   margin-top: 38px;
//   font-size: 16px;
//   font-weight: 400;
//   letter-spacing: normal;
//   line-height: 1.875;
// `

// Footer.Address = styled(Box).attrs({ className: "list-unstyled", as: "ul" })`
//   padding: 0;
//   margin: 0;
//   margin-bottom: 30px;
//   @media (min-width: 992px) {
//     margin-bottom: 0;
//   }
// `
// Footer.AddressItem = styled(Box).attrs({ className: "list-items", as: "li" })`
//   font-size: 16px;
//   font-weight: 400;
//   letter-spacing: normal;
//   line-height: 30px;
//   display: flex;
//   flex-wrap: wrap;
//   margin-bottom: 15px;
//   color: #fff !important;
//   a {
//     color: #fff !important;
//     font-size: inherit;
//     font-weight: 400;
//     letter-spacing: normal;
//     line-height: 30px;
//     transition: 0.4s;
//     &:hover {
//       color: #fd346e !important;
//     }
//   }
//   i {
//     margin-right: 5px;
//     margin-top: 7px;
//     font-size: 20px;
//     width: 35px;
//     color: #fff;
//   }
//   span {
//     color: #fff !important;
//     display: inline-block;
//     word-break: break-all;
//   }
// `

// Footer.List = styled(Box).attrs({
//   className: "widgets-list list-unstyled",
//   as: "ul",
// })`
//   padding: 0;
//   margin: 0;
//   margin-bottom: 30px;
//   @media (min-width: 992px) {
//     margin-bottom: 0;
//   }
// `
// Footer.ListItems = styled(Box).attrs({ className: "list-items", as: "li" })`
//   font-size: 16px;
//   font-weight: 400;
//   letter-spacing: normal;
//   line-height: 30px;
//   display: flex;
//   margin-bottom: 15px;
//   color: rgba(38, 39, 41, 0.7) !important;
//   a {
//     color: #fff !important;
//     font-size: inherit;
//     font-weight: 400;
//     letter-spacing: normal;
//     line-height: 30px;
//     transition: 0.4s;
//     &:hover {
//       color: #fff;
//     text-decoration: underline;
//     }
//   }
//   i {
//     margin-right: 5px;
//     margin-top: 10px;
//     font-size: 20px;
//     width: 35px;
//     color: #fff;
//   }
//   span {
//     color: rgba(38, 39, 41, 0.7) !important;
//   }
// `
// Footer.SocialShare = styled(Box).attrs({
//   className: "footer-social-share list-unstyled",
//   as: "ul",
// })`
//   padding: 0;
//   margin: 0 -10px;
//   margin-top: 30px;
//   @media (min-width: 992px) {
//     margin-top: 0;
//   }
// `
// Footer.SocialShareItem = styled(Box).attrs({
//   className: "list-items",
//   as: "li",
// })`
//   display: inline-flex;
//   align-items: center;
//   a {
//     display: inline-flex;
//     align-items: center;
//     position: relative;
//     padding: 0 8px;
//     transition: 0.4s;
//     color: #fff;
//     font-size: 15px;
//     &::before {
//       content: ".";
//       position: absolute;
//       left: 0;
//       bottom: 0;
//     }
//     &:hover {
//       color: #fd346e;
//     }
//   }
//   &:first-child {
//     a:before {
//       display: none;
//     }
//   }
// `

// Footer.Copyright = styled(Box)`
//   text-align: center;
//   padding-top: 25px;
//   padding-bottom: 10px;
//   border-top: 1px solid rgba(255, 255, 255, 0.08);
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//     justify-content: center;
//   @media (min-width: 576px) {
//   justify-content: space-between;
//   }
//   @media (min-width: 992px) {
//     text-align: left;
//   }
// `

// Footer.CopyrightText = styled(Box)`
//   font-size: 13px;
//   font-weight: 400;
//   font-style: normal;
//   letter-spacing: normal;
//   line-height: 22px;
//   color: #fff;
// `

// Footer.Box = styled(Box)``
// export default Footer

import styled from "styled-components";
import { Box, Heading, Paragraph } from "~styled";

const Footer = styled(Box)`
  padding-top: 60px;
  padding-bottom: 20px;
  background: #020617; /* deep navy background */

  @media (min-width: 768px) {
    padding-top: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 24px;
  }
`;

Footer.Box = styled(Box)``;

Footer.Widgets = styled(Box)`
  color: #e5e7eb;
`;

Footer.Newsletter = styled(Box)`
  form {
    text-align: right;

    input {
      width: 100%;
      border: none;
      height: 56px;
      border-radius: 50px;
      background-color: #fff;
      margin-bottom: 20px;
      padding: 0 20px;

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }
`;

Footer.Link = styled(Box)``;

Footer.Title = styled(Heading)`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 28px;
  margin-bottom: 18px;
  color: #f9fafb;
`;

Footer.Text = styled(Paragraph)`
  color: #9ca3af;
  margin-top: 12px;
  margin-bottom: 18px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.7;
  max-width:300px;
`;

/* Brand row (logo + MMR text) */
Footer.BrandRow = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

Footer.LogoWrapper = styled(Box)`
  width: 48px;
  height: 48px;
  // border-radius: 12px;
  overflow: hidden;
  background: #020617;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

Footer.BrandName = styled(Heading)`
  font-size: 24px;
  font-weight: 700;
  color: #2b9fe8;
  margin: 0;
`;

/* Contact list under brand */
Footer.ContactList = styled(Box).attrs({
  as: "ul",
  className: "list-unstyled",
})`
  padding: 0;
  margin: 0;
  margin-top: 12px;
`;

Footer.ContactItem = styled(Box).attrs({
  as: "li",
})`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 14px;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #9ca3af;
  }

  a {
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #2b9fe8;
    }
  }
`;

/* Generic list sections */
Footer.Address = styled(Box).attrs({
  className: "list-unstyled",
  as: "ul",
})`
  padding: 0;
  margin: 0 0 30px 0;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

Footer.AddressItem = styled(Box).attrs({
  className: "list-items",
  as: "li",
})`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  color: #e5e7eb !important;

  a {
    color: #e5e7eb !important;
    font-size: inherit;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    transition: 0.4s;

    &:hover {
      color: #2b9fe8 !important;
    }
  }

  i {
    margin-right: 5px;
    margin-top: 7px;
    font-size: 20px;
    width: 35px;
    color: #e5e7eb;
  }

  span {
    color: #e5e7eb !important;
    display: inline-block;
    word-break: break-all;
  }
`;

Footer.List = styled(Box).attrs({
  className: "widgets-list list-unstyled",
  as: "ul",
})`
  padding: 0;
  margin: 0 0 24px 0;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

Footer.ListItems = styled(Box).attrs({
  className: "list-items",
  as: "li",
})`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 28px;
  display: flex;
  margin-bottom: 10px;
  color: #9ca3af !important;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    margin-top: 2px;
    color: #9ca3af;
  }

  a {
    display: inline-flex;
    align-items: center;
    color: #9ca3af !important;
    font-size: inherit;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 28px;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #2b9fe8 !important;
      text-decoration: underline;
    }
  }
`;

/* Social share kept for backward compatibility (unused now) */
Footer.SocialShare = styled(Box).attrs({
  className: "footer-social-share list-unstyled",
  as: "ul",
})`
  padding: 0;
  margin: 0 -10px;
  margin-top: 30px;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

Footer.SocialShareItem = styled(Box).attrs({
  className: "list-items",
  as: "li",
})`
  display: inline-flex;
  align-items: center;

  a {
    display: inline-flex;
    align-items: center;
    position: relative;
    padding: 0 8px;
    transition: 0.4s;
    color: #fff;
    font-size: 15px;

    &::before {
      content: ".";
      position: absolute;
      left: 0;
      bottom: 0;
    }

    &:hover {
      color: #2b9fe8;
    }
  }

  &:first-child {
    a:before {
      display: none;
    }
  }
`;

/* Bottom bar */
Footer.Copyright = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 16px;
  border-top: 1px solid rgba(31, 41, 55, 0.9);
  gap: 12px;

  @media (min-width: 576px) {
    justify-content: space-between;
    text-align: left;
  }
`;

Footer.CopyrightText = styled(Box)`
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  color: #9ca3af;
`;

/* Shield + privacy text */
Footer.PrivacyBadge = styled(Box)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #9ca3af;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #4caf50;
  }
`;

/* Disclaimer text at very bottom */
Footer.Disclaimer = styled(Paragraph)`
  margin-top: 12px;
  text-align: center;
  font-size: 11px;
  line-height: 1.6;
  color: #6b7280;
`;

export default Footer;
