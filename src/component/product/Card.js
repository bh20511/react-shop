import React from "react";
import { Link } from "react-router-dom";

const Card = ({ props }) => {
  const { sid, img, name, price, inventory, tags } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`http://localhost:3005/product/${img}`}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{tags}</p>
          <Link to={`/product/${sid}`} className="btn btn-primary">
            看更多
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
