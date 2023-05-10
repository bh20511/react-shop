import React from "react";
import styled from "../styles/footer.module.scss"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className={styled.mainFooter}>
      <div className={styled.container}>
        <div className={styled.footerItem}>
          <h4>關於我們</h4>
          <nav>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>關於我們</Link>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>門市據點</Link>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>聯絡我們</Link>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>加入我們</Link>
          </nav>
        </div>

        <div className={styled.footerItem}>
          <h4>合作品牌</h4>
          <nav>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>寵物公園</Link>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>毛孩市集</Link>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>凱朵寵物</Link>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>貓狗隊長</Link>
          </nav>
        </div>

        <div className={styled.footerItem}>
          <h4>服務項目</h4>
          <nav>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>寵物零食</Link>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>寵物美容</Link>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>寵物診所</Link>
            <Link href="/"><i class="fa-solid fa-chevron-right"></i>寵物住宿</Link>
          </nav>
        </div>

        <div className={`${styled.footerItem} ${styled.footerSubs}`}>
          <h4>訂閱電子報</h4>
          <form >
            <input type="text" />
            <input type="submit" value="訂閱電子報"/>
          </form>
        </div>
      </div>
      <div >
      <section className={styled.row}>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/bh20511"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div className={styled.copyright}>&copy; 2023 Copyright github/bh20511</div>
    </footer>
    </>
    
  );
};

export default Footer;
