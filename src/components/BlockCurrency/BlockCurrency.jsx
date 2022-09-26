import React from 'react';


const BlockCurrency = ({ value, currency, onChangeValue, onChangeCurrency }) => {

  const defaultCurrencies = ['UAH', 'USD', 'EUR'];

  return (
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? 'active' : ''}
            key={cur}>
            {cur}
          </li>
        ))}
      </ul>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        placeholder={0}
      />
    </div>
  )
};

export default BlockCurrency;

