import React from "react";
import Card from "../component/product/Card";
import styled from "../styles/product.module.scss";
import data from "../data/product.json";

const Product = () => {
  return (
    <div
      style={{
        width: "1200px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data.map((e, i) => {
        return <Card key={i} props={e} />;
      })}
    </div>
  );
};

export default Product;
