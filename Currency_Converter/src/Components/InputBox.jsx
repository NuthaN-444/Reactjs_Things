import React, { use, useEffect, useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo';

const InputBox = ({lable,amount,onChangeAmount,onCurrencyChange,currencyOptions=[],selectCurrency,amountDisable=false,currencyDisable=false}) => {

  return (
    <>
          <p>{lable}</p>

      <input type="number" className='InputBox-From-To' min={0} value={amount} onChange={(e) => onChangeAmount(Number(e.target.value))}/>

      <select onChange={(e) => set(e.target.value)}>
        {<option value={selectCurrency}>{selectCurrency}</option>}
        {
          currencyOptions.map((curr,idx)=>(
            <option key={idx} value={curr}>{curr}</option>
          ))
        }
      </select>
    </>
  )
}

export default InputBox
