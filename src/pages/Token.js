import React, { useContext } from "react";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";

const Token = () => {
  const { myAuth } = useContext(AuthContext);

  async function test_token() {
    // if (!myAuth.authorised) {
    //     console.log('前端直接擋')
    //   return;
    // }
    const testToken = "http://localhost:3005/test-token";
    const { data } = await axios.get(testToken, {
      headers: {
        Authorization: "Bearer " + myAuth.token,
      },
    });
    console.log(data);
  }
  return (
    <>
      <div>Token</div>
      <button
        onClick={() => {
          test_token();
        }}
      >有登入才看得到資料</button>
    </>
  );
};

export default Token;
