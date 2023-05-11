import React, { useContext } from "react";
// import axios from "axios";
// import AuthContext from "../contexts/AuthContext";
import styled from "../styles/adopt.module.scss"
const Adopt = () => {
  // const { myAuth } = useContext(AuthContext);

  // async function test_token() {
  //   // if (!myAuth.authorised) {
  //   //     console.log('前端直接擋')
  //   //   return;
  //   // }
  //   const testToken = "http://localhost:3005/test-token";
  //   const { data } = await axios.get(testToken, {
  //     headers: {
  //       Authorization: "Bearer " + myAuth.token,
  //     },
  //   });
  //   console.log(data);
  // }
  return (
    <>
      {/* <div>Token</div>
      <button
        onClick={() => {
          test_token();
        }}
      >有登入才看得到資料</button> */}

      <div className={styled.container}>

        <div className={styled.section}>
          <h3>毛孩領養專區</h3>
          <div className={styled.web}>
            <div className={styled.webitem}>
                <a href="https://www.pet.gov.tw/AnimalApp/AnnounceMent_Announce.aspx?PageType=null">
                  <img src="大頭照.png" alt="" />
                  <p>全國收容所</p>
                </a>
                
            </div>
            <div className={styled.webitem}>
              <a href="https://taw.tycg.gov.tw/">
                <img src="貓狗收容所.jpg" alt=""  />
                <p>桃園新屋收容所</p>
              </a>
                
            </div>
            <div className={styled.webitem}>
            <a href="https://www.afurkid.com/Adoption/List?Shelter=%E8%87%BA%E5%8C%97%E5%B8%82%E5%8B%95%E7%89%A9%E4%B9%8B%E5%AE%B6">
                <img src="貓.jpg" alt=""  />
                <p>台北動物之家</p>
              </a>
            </div>
            <div className={styled.webitem}>
              <a href="https://taw.tycg.gov.tw/">
                <img src="吉娃娃.jpg" alt=""  />
                <p>新北動物保護防疫處</p>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Adopt;
