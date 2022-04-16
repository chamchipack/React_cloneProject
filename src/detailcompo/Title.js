import React from "react";
import styled from "styled-components";

const Title = (props) => {

  return (
    <>
      <Wrap>
        <PostTitle>05_AA음성 Self_quarantine ok</PostTitle>

        <Btngroup>
          <CommentLocal>
            <p style={{ marginRight: "5px" }}>별 · comment.length ·</p>
            <p style={{ color: "gray" }}>post.adress</p>
          </CommentLocal>

          <div>
            <ShareBtn>공유하기</ShareBtn>
            저장
          </div>
        </Btngroup>
      </Wrap>
    </>
  );
};

export default Title;

const Wrap = styled.div``;

const PostTitle = styled.p`
  display: block;
  text-align: left;
  margin-bottom: 5px;
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
    font-size: 26px;
    font-weight: 550;
    margin-top:0px;

`;

const Btngroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
  line-height: 5px;
`;

const CommentLocal = styled.div`
  display: flex;
  flex-direction: row;
`;

const ShareBtn = styled.span`
  margin-right: 25px;
`;

