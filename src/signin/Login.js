import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;


function Login() {
  // 아이디, 비밀번호 설정
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  //
  const handleInputId = (e) =>{
    setInputId(e.target.value);
  }
  const handleInputPw = (e) =>{
    setInputPw(e.target.value);
  }
  
  const onClickLogin = () =>{
    console.log('로그인 클릭');
  }

  // 페이지 렌더링 후 가장 처음 호출되는 함수
//   useEffect(() => {
//     axios.get('/signin/Login')
//     .then(res => console.log(res))
//     .catch()
// },
//  페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
// [])


  return  (
    <Container>
      <h2>로그인</h2>
      <Input id="id" name="id" type="email" placeholder="아이디를 입력해주세요" value={inputId} onChange={handleInputId}/>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요" value={inputPw} onChange={handleInputPw}
      />
      <Button onClick={onClickLogin}>로그인</Button>
      <Button>회원가입</Button>
    </Container>
  );
}

export default Login;