// import React from "react";
 import CardWrapper from "./style";
// export default function TestiomialCard({
//   userName,
//   userPosition,
//   text,
//   icon,
//   image,
//   ...rest
// }) {
//   return (
//     <Card
//       hoverbackground="#5034fc"
//       elemColor="#262729"
//       backgroundColor="#fff"
//       {...rest}
//     >
//       <Card.Top mb="20px">
//         <Card.UserBlock>
//           <Card.Image mr="10px">
//             <img src={image} alt="Testimonial" />
//           </Card.Image>
//           <Card.Box>
//             <Card.Title as="h3">{userName}</Card.Title>
//             <Card.UserPosition>{userPosition}</Card.UserPosition>
//           </Card.Box>
//         </Card.UserBlock>
//         <Card.Icon>
//           <i className={icon} />
//         </Card.Icon>
//       </Card.Top>
//       <Card.Text>{text}</Card.Text>
//     </Card>
//   );
// }
import { CiCircleCheck } from "react-icons/ci";

const TestimonialCard = ({ image, userName, userPosition, hospital, text }) => (
  <CardWrapper>
    <CardWrapper.Header>
      <CardWrapper.Avatar src={image} />
      <div>
        <CardWrapper.NameRow>
          <h3>{userName}</h3>
         < CiCircleCheck strokeWidth={2} color="#4caf50"/>
        </CardWrapper.NameRow>
        <CardWrapper.Role>{userPosition}</CardWrapper.Role>
        <CardWrapper.Hospital>{hospital}</CardWrapper.Hospital>
      </div>
    </CardWrapper.Header>

    <CardWrapper.Quote>"{text}"</CardWrapper.Quote>
  </CardWrapper>
);

export default TestimonialCard;