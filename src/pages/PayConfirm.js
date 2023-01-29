import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PayConfirm = () => {

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
    }, [])


    return (
        <div>
            付款成功
        </div>
    );
};

export default PayConfirm;