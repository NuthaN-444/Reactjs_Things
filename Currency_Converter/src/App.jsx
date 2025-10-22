import React, { useState,useEffect, useCallback } from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';


const App = () => {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usb");
  const [to,setTo] = useState("inr");
  const [convertedAmount , setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to);
    setTo(From);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
      setConvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <>
    <form onSubmit={(e) => {
      e.preventDefault();
      convert()}}>
        <div className='container'>
            <InputBox lable={"From"} amount={amount} currencyOptions={options} onCurrencyChange={(currency)=>setAmount(amount)} selectCurrency={from} />
            <InputBox lable={"To"} amount={amount} currencyOptions={options} onCurrencyChange={(currency)=>setAmount(amount)} selectCurrency={to} />
            <button className='swap-btn'>Swap</button>
            <button className='Converter-btn'>Convert {} to {} </button>
        </div>
        </form>
    </>
  )
}

export default App
