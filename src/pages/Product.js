import React, { useState, useEffect } from "react";
import Card from "../component/product/Card";
import styled from "../styles/product.module.scss";
import axios from "axios";

const Product = () => {
  const [products, setPoducts] = useState([]);

  const product_url = "http://localhost:3005/product/pageApi";
  const getList = async function () {
    const result= await axios.get(product_url)
    setPoducts(result.data)
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className={styled.container}>
      {products && products.map((e, i) => {
        return <Card key={e.sid} props={e} />;
      })}
    </div>
  );
};

export default Product;
