import { useState,useEffect } from "react";


function useCurrencyInfo(currency) {
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/165ba89737cb8efc868be226/latest/${currency}`).then((res) => res.json()).then((res) => setData(res["conversion_rates"][currency]));
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;