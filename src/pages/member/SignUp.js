import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    email: "",
    password: "",
    nickname :"",
  });

  async function member_signUp() {
    // console.log(member);
    const member_signUp = "http://localhost:3005/member/signUp/api";
    const { data } = await axios.post(member_signUp, member);
    console.log(data);
    // alert('註冊成功')
    if(data.success){
        alert('註冊成功')
        navigate('/')
    }else{
        alert(data.error)
    }
  }

  return (
    <div style={{ width: "800px", margin: "0 auto" }}>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            會員信箱
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => {
              const mail = e.target.value;
              setMember({ ...member, email: mail });
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            會員密碼
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => {
              const password = e.target.value;
              setMember({ ...member, password: password });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nickname" className="form-label">
            暱稱
          </label>
          <input
            type="nickname"
            className="form-control"
            id="nickname"
            onChange={(e) => {
              const nickname = e.target.value;
              setMember({ ...member, nickname: nickname });
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            member_signUp();
          }}
        >
          註冊會員
        </button>
      </form>
    </div>
  );
};

export default SignUp;
