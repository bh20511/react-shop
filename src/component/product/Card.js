import React from "react";
import { Link } from "react-router-dom";
import styled from "../../styles/product.module.scss";


const Card = ({ props }) => {
  const { sid, img, name, price, member_price, tags } = props;
  return (
    <>
      <div className="card round shadow" style={{ width: "18rem",marginBottom: "20px"}}>
        <img
          src={`http://localhost:3005/product/${img}`}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{tags}</p>
          <p className={styled.price}>售價：＄{price} </p>
          <div clasName={styled.detail}>
            <p className={styled.memberPrice}> $會員價：{member_price}</p>
            <span>
              <Link to={`/product/${sid}`} className="btn btn-primary">
                看更多
              </Link>
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Card;
