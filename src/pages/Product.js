import React, { useState, useEffect } from "react";
import Card from "../component/product/Card";
import styled from "../styles/product.module.scss";
import axios from "axios";
import PaginationExample from "../component/product/PaginationExample";


const Product = () => {

  const [products, setPoducts] = useState([]);
  //記錄一個總頁數
  const [totalPages, seTotalPages] = useState(0);

  //這邊是處理搜尋商品種類改變 頁數改變 或者是未來要有其他搜尋條件 都可以放在裡面處理
  const [condition, setCondition] = useState({
    category:"",
    page:1,
  });


  const product_url = "http://localhost:3005/product/getlist";
  const getList = async function () {
    const newCondition = {}
    //這邊我不知道在幹嘛 可能是要解決非同步
    // for(let key in condition){
    //   if(condition[key]){
    //     newCondition[key] = condition[key]
    //   }
    // }
    // const u = new URLSearchParams(newCondition);
    const u = new URLSearchParams({...condition});
    const {data}= await axios.get(product_url+'?'+u.toString());
    setPoducts(data.result)
    
    console.log('總筆數',data.count)
    //應該還要裝個totalPage
    console.log('總頁數',data.totalPages)
    seTotalPages(data.totalPages)
 };

  useEffect(() => {
    getList();
  }, [condition]);


  return (
    <div className={styled.container}>
      <div >
        <button onClick={() => setCondition({...condition,category:0,page:1})}>全部商品</button>
        <button onClick={() => setCondition({...condition,category:1,page:1})}>狗狗商品</button>
        <button onClick={() => setCondition({...condition,category:2,page:1})}>貓貓商品 </button>
      </div>
      <div> <PaginationExample totalPages={totalPages} condition={condition} setCondition={setCondition}/> </div>
      
      {products && products.map((e, i) => {
        return <Card key={e.sid} props={e} />;
      })}
    </div>
  );


};



export default Product;
