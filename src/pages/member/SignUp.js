import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "../../styles/signUp.module.scss"

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
    <>
      {/* <div style={{ width: "800px", margin: "0 auto" }}>
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
      </div> */}

      <div>
        <div className={styled.container}>
          <div className={styled.login}>
            <div className={styled.form}>
              <div className={styled.group}>
                <h2>會員註冊</h2>
                <label htmlFor="email">會員信箱</label>
                <input type="email" name="" id="email" 
                  onChange={(e) => {
                    const mail = e.target.value;
                    setMember({ ...member, email: mail });
                  }}/>
              </div>

              <div className={styled.group}>
                <label htmlFor="password">密碼</label>
                <input type="password" name="" id="password"
                  onChange={(e) => {
                    const password = e.target.value;
                    setMember({ ...member, password: password });
                  }}
                />
              </div>
              <div className={styled.group}>
                <label htmlFor="nickname">暱稱</label>
                <input type="text" name="" id="nickname"
                  onChange={(e) => {
                    const nickname = e.target.value;
                    setMember({ ...member, nickname: nickname });
                  }}
                />
              </div>

              <div className={styled.btnGroup}>
                <button type="submit" className={styled.btn}
                  onClick={(e) => {
                    e.preventDefault();
                    member_signUp();
                  }}>
                  註冊
                </button>
                <button className={styled.btn}>
                  <Link to="/login" className="nav-link">
                    返回登入
                  </Link>
                </button>
              </div>
          </div>
        </div>
        </div>
      </div>
    </>
    
  );
};

export default SignUp;
