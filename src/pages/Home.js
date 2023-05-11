import React from "react";
import SlickHome from "../component/SlickHome";
import { styled } from "@material-ui/core";
import styled2  from "../styles/home.module.scss"
const Home = () => {
  return (
    <div>
      <section className={styled.section1}>
        <SlickHome style={{width:"100%"}}/>
      </section>
      
      {/* 影片區 */}
      <section className={styled2.section2}>
        <div className={styled2.left}>
          <iframe width="700" height="400" src="https://www.youtube.com/embed/g14_W-H3c20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className={styled2.right}>
          <p>貓咪到底該怎麼吃才對</p>
          <p>歡迎來到寵物之家官方網站！讓我們來看看知名youtuber好味小姐跟大家分享的是關於貓咪的飲食。
            養貓是一件需要負責任的事情，其中一個非常重要的方面就是貓咪的飲食。貓咪是肉食性動物，所以它們需要大量的蛋白質和脂肪來保持健康。但是，每隻貓咪的胃口和口味都有所不同，所以我們需要花一些心思來挑選適合它們的食物。
          </p>
        </div>
      </section>

      {/* icon區 */}
      <section className={styled2.section3}>
        <div className={styled2.wrap}>
          <div className={styled2.item}>
            <div className={styled2.icon}>
              <i className="fa-solid fa-house"></i>
            </div>
            <div className={styled2.txt}>
              <h3>給寵物家的溫暖</h3>
              <p>
                在這個充滿愛的寵物電商平台，我們致力於為您的寵物提供最好的照顧和最優質的商品。無論是食品、玩具還是護理用品，我們只提供最優良的選擇，因為我們深深明白，您的寵物是您生命中最重要的成員之一。所以，讓我們一起為您的寶貝們滿滿的注入愛吧！
              </p>
            </div>
          </div>

          <div className={styled2.item}>
            <div className={styled2.icon}>
            <i class="fa-solid fa-heart"></i>
            </div>
            <div className={styled2.txt}>
              <h3>給寵物滿滿的愛</h3>
              <p>
                我們的使命是為您的寵物家庭注入溫暖和愛。我們不僅提供高品質的商品和服務，還致力於建立一個充滿溫馨和關愛的社群。我們相信，每一個寵物都是家庭的一份子，他們應該得到同等的尊重和照顧。因此，我們承諾在每一個細節上都給予您的寵物家庭最大的關注和支持，並且為您提供最好的產品和體驗。讓我們一起為您的寵物家庭帶來更多溫暖和愛心！
              </p>
            </div>
          </div>


          <div className={styled2.item}>
            <div className={styled2.icon}>
            <i class="fa-solid fa-stethoscope"></i>
            </div>
            <div className={styled2.txt}>
              <h3>給寵物最安心的照料</h3>
              <p>
                我們了解您對寵物的關愛和照顧有多麼重要。因此，我們致力於為您的寵物提供最安心的照料和最優質的商品。我們的產品均經過嚴格的選擇和測試，確保您的寵物能夠獲得最高品質的照顧。此外，我們的專業團隊隨時為您提供支持和建議，以確保您的寵物得到最好的照顧。我們相信，每一個寵物都應該得到最好的照顧和關愛，讓我們一起為您的寵物提供最安心的照料！
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 星星區 */}
      <section className={styled2.section10}>
        <div>
          <p>
            <i className="fa-solid fa-star"></i>
          </p>
          <p>用心</p>
          <p>只給寵物最好的食物</p>
        </div>

        <div>
          <p>
            <i className="fa-solid fa-star"></i>
          </p>
          <p>誠信</p>
          <p>值得信賴的夥伴，透明的服務</p>
        </div>

        <div>
          <p>
            <i className="fa-solid fa-star"></i>
          </p>
          <p>溫暖</p>
          <p>給予流浪的動物支援</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
