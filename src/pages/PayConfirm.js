import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "../styles/cart.module.scss";
// import { withTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { deleteAllCart} from "../stores/cartSlice";

const PayConfirm = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const transactionId = new URLSearchParams(location.search).get('transactionId')
    const orderId = new URLSearchParams(location.search).get('orderId')
    console.log({ transactionId, orderId })
    
    async function confirm() {
        const { data } = await axios.get(`http://localhost:3005/cart/linePayConfirm?transactionId=${transactionId}&orderId=${orderId}`)
        console.log(data)
        if (data.success) {
            console.log('資料庫完成修改')
        }
        console.log(data)
    }

    useEffect(() => {
        confirm();
        dispatch(deleteAllCart())
    }, [])


    return (
        <div style={{minHeight:"70vh"}}>
            <div className={styled.cardbg} >
                LinePay付款成功感謝您的購買
            </div>
            
        </div>
    );
};

export default PayConfirm;