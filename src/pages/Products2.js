import React, { useState, useEffect } from "react";
import Card from "../component/product/Card";
import styled from "../styles/product.module.scss";
import axios from "axios";

const Product = () => {

    const [products, setPoducts] = useState([]);
    // const [choiceProducts, SetChoiceProducts] = useState([]);

    const product_url = "http://localhost:3005/product/getlist";

    const getList = async function () {
        const result = await axios.get(product_url)
        setPoducts(result.data)
        // SetChoiceProducts(result.data)
    };

    useEffect(() => {
        getList();
    }, []);

    const getChoice = async function (catrgory) {
        const result = await axios.get("http://localhost:3005/product/selectApi?category=" + catrgory)
        setPoducts(result.data)
        console.log(products)
    }

    return (
        <div className={styled.container}>
            <div>
                <button onClick={() => getList()}>全部商品</button>
                <button onClick={() => getChoice('1')}>狗狗商品</button>
                <button onClick={() => getChoice('2')}>貓貓商品 </button>
            </div>
            {products && products.map((e, i) => {
                return <Card key={e.sid} props={e} />;
            })}
        </div>
    );


};



export default Product;
