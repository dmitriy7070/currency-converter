import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import BlockCurrency from './components/BlockCurrency/BlockCurrency';


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
        onChangeOutPrice(1);
      })
  }, []);

  const onChangeInPrice = (value) => {
    const price = value / ratesRef.current[firstCurrency];
    const result = price * ratesRef.current[twoCurrency];
    setTwoPrice(result.toFixed(2));
    setFirstPrice(value);
  }

  const onChangeOutPrice = (value) => {
    const result = (ratesRef.current[firstCurrency] / ratesRef.current[twoCurrency]) * value;
    setFirstPrice(result.toFixed(2));
    setTwoPrice(value);
  }

  useEffect(() => {
    onChangeInPrice(firstPrice)
  }, [firstCurrency])

  useEffect(() => {
    onChangeOutPrice(twoPrice)
  }, [twoCurrency])

  return (
    <div className="Main">
      <BlockCurrency value={firstPrice} currency={firstCurrency} onChangeValue={onChangeInPrice} onChangeCurrency={setFirstCurrency} />
      <BlockCurrency value={twoPrice} currency={twoCurrency} onChangeValue={onChangeOutPrice} onChangeCurrency={setTwoCurrency} />
    </div>
  )
}

export default App;
