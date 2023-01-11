import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { setMyAuth } = useContext(AuthContext);
  const [member, setMember] = useState({
    email: "",
    password: "",
  });

  async function member_login() {
    // console.log(member);
    const member_login = "http://localhost:3005/member/login/api";
    const { data } = await axios.post(member_login, member);
    console.log(data);
    if (data.success) {
      localStorage.setItem("auth", JSON.stringify(data));
      setMyAuth({ ...data, authorised: true });
      alert("登入成功");
      navigate("/");
    } else {
      localStorage.removeItem("auth");
      alert("登入失敗");
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
            autoComplete="true"
            id="password"
            onChange={(e) => {
              const password = e.target.value;
              setMember({ ...member, password: password });
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            member_login();
          }}
        >
          登入
        </button>

        <button type="button" className="btn btn-primary ms-3">
          <Link to="/signUp" className="nav-link">
            註冊會員
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
