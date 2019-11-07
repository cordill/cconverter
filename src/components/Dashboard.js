import {Button, Input} from "antd"
import 'antd/dist/antd.css'
import './Dashboard.scss'
import React, {useEffect, useState} from "react"
import {getCurrencyValues} from "../services/CurrencyService"
import {CurrencySelect} from './CurrecySelectComponent/SelectComponent'

export const regex = new RegExp("^[0-9]*$")

export const Dashboard = () => {

  const [apiRates, setApiRates] = useState([])
  const [fromCurrency, setFromCurrency] = useState(undefined)
  const [toCurrency, setToCurrency] = useState(undefined)
  const [userValue, setUserValue] = useState(0)
  const [converterValue, setConvertedValue] = useState(0)
  const [date, setCurrentDate] = useState('')

  useEffect(() => {
    getCurrencyValues().then(array => {
      setApiRates(array[0].rates)
      setCurrentDate(array[0].effectiveDate)
    })
  }, [])


  useEffect(() => {
    const firstValue = apiRates.find(rate => rate.code === fromCurrency)
    const secondValue = apiRates.find(rate => rate.code === toCurrency)

    if (firstValue && secondValue) {
      const result = firstValue.bid / secondValue.bid

      setConvertedValue((userValue * result).toFixed(2).toString())
    }
  }, [apiRates, fromCurrency, toCurrency, userValue])

  const onChangeValue = (value) => {
    if (regex.test(value.target.value))
      setUserValue(value.target.value)
  }

  const onCurrencySwap = () => {
    const temporaryFromCurrencyKeeper = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(temporaryFromCurrencyKeeper)
  }

  return (
    <div className="converter-container">
      <div className="selector-wrapper">

        <CurrencySelect
          value={fromCurrency}
          onChange={setFromCurrency}
          currencyRates={apiRates}/>

        <div className="source-input">
          <Input
            value={userValue}
            onChange={onChangeValue}/>
        </div>

        <div className="replace-currency-button">
          <Button
            type="primary"
            icon="swap"
            disabled={!fromCurrency || !toCurrency}
            onClick={onCurrencySwap}/>
        </div>

        <div className="destination-input">
          <Input
            value={converterValue}/>
        </div>

        <CurrencySelect
          value={toCurrency}
          onChange={setToCurrency}
          currencyRates={apiRates}/>
      </div>

      <div className="effectiveDate">
        {displayDateInformation(date)}
      </div>
    </div>
  )
}

const displayDateInformation = (date) => {
  return (
    <h4>{date}</h4>
  )
}
