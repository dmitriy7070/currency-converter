import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import BlockCurrency from './components/BlockCurrency/BlockCurrency';
import Ticker from './components/Ticker/Ticker';


const App = () => {

  const [firstCurrency, setFirstCurrency] = useState('UAH');
  const [twoCurrency, setTwoCurrency] = useState('USD');
  const [firstPrice, setFirstPrice] = useState(0);
  const [twoPrice, setTwoPrice] = useState(1);

  const ratesRef = useRef({});

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((response) => response.json())
      .then((json) => {
        ratesRef.current = json.rates;
        onChangeTwoPrice(1);
      })
  }, []);

  const onChangeFirstPrice = (value) => {
    const price = value / ratesRef.current[firstCurrency];
    const result = price * ratesRef.current[twoCurrency];
    setTwoPrice(result.toFixed(2));
    setFirstPrice(value);
  }

  const onChangeTwoPrice = (value) => {
    const result = (ratesRef.current[firstCurrency] / ratesRef.current[twoCurrency]) * value;
    setFirstPrice(result.toFixed(2));
    setTwoPrice(value);
  }

  useEffect(() => {
    onChangeFirstPrice(firstPrice)
  }, [firstCurrency])

  useEffect(() => {
    onChangeTwoPrice(twoPrice)
  }, [twoCurrency])

  return (
    <div>
    <Ticker />
    <div className="Main">
      <BlockCurrency value={firstPrice} currency={firstCurrency} onChangeValue={onChangeFirstPrice} onChangeCurrency={setFirstCurrency} />
      <BlockCurrency value={twoPrice} currency={twoCurrency} onChangeValue={onChangeTwoPrice} onChangeCurrency={setTwoCurrency} />
    </div>
    </div>
  )
}

export default App;
