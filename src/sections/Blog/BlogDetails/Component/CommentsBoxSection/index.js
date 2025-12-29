import React from "react";
// import commentsUserImg1 from "/image/mixed/user-img-1.png";
// import commentsUserImg2 from "/image/mixed/user-img-2.png";
// import commentsUserImg3 from "/image/mixed/user-img-3.png";
import Widgets from "../Widgets";
import CommentsBox from "./style";
export default function CommentsBoxSection({ UserName, ...rest }) {
  return (
    <CommentsBox>
      <CommentsBox.Title>Comments</CommentsBox.Title>
      <CommentsBox.Comments as="ul">
        {/* Single Comments */}
        <CommentsBox.MetaSingle>
          <Widgets UserImage={"/image/mixed/user-img-1.png"} UserName="Brandon Howard" />
          <CommentsBox.Sub>
            <Widgets
              UserImage={"/image/mixed/user-img-2.png"}
              UserName="Jennifer Ashley"
            />
          </CommentsBox.Sub>
        </CommentsBox.MetaSingle>
        {/*/ .Single Comments */}
        {/* Single Comments */}
        <CommentsBox.MetaSingle>
          <Widgets UserImage={"/image/mixed/user-img-3.png"} UserName="Mark Ruffins" />
        </CommentsBox.MetaSingle>
        {/*/ .Single Comments */}
      </CommentsBox.Comments>
    </CommentsBox>
  );
}
