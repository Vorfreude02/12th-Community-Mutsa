import React, { useState } from "react";
import styled from "styled-components";
import { Grey2 } from "../../styles/color";
import { LoginButton } from "../login/LoginSection";
import { instance } from "../../api/instance";
import { useNavigate } from "react-router-dom";

function WritePostSection() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ title: "", content: "" });
  //input 컴퍼넌트 안에 title, content
  const handleClickPostButton = async () => {
    const body = {
      title: input.title,
      content: input.content,
    };
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
    try {
      const res = await instance.post("board/post-create/", body, { headers });
      if (res.status === 201) {
        navigate("/");
        alert("글 작성을 완료했습니다!");
      }
    } catch (err) {
      alert(err);
    }
  };

  //TODOS
  // 1. 글쓰기
  return (
    <WritePostSectionWrapper>
      <TitleInput
        placeholder="제목을 입력해주세요"
        maxLength={30}
        onChange={(e) => {
          setInput({ ...input, title: e.target.value });
        }}
        name="title" //객체에서 동일한 이름의 키가 2개일 때는 마지막 키를 읽어온다.
      />
      <ContentTextArea
        placeholder="내용을 입력해주세요"
        maxLength={200}
        onChange={(e) => {
          setInput({ ...input, content: e.target.value });
        }}
      />
      <PostButton onClick={handleClickPostButton}>글 작성하기</PostButton>
    </WritePostSectionWrapper>
  );
}
const WritePostSectionWrapper = styled.section`
  padding: 1rem 3.7rem 0;
`;

const TitleInput = styled.input`
  display: inline-block;
  width: 100%;
  background-color: ${Grey2};
  padding: 0.3rem 1rem;
  height: 4rem;
  margin-top: 0.6rem;
  border-radius: 1rem;
`;
const ContentTextArea = styled.textarea`
  display: inline-block;
  width: 100%;
  height: 40rem;
  background-color: ${Grey2};
  padding: 1rem 1rem;
  outline: none;
  border: none;
  resize: none;
  font-family: Pretendard;
  margin-top: 0.6rem;
  border-radius: 1rem;
`;

const PostButton = styled(LoginButton)``;

export default WritePostSection;
