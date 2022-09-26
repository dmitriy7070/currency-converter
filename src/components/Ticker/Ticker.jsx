import classes from '../Ticker/Ticker.module.css'
import mainLogo from '../../image/logo.png'

let Ticker = ({ratesRef}) => {

    const priceUsdUah = ratesRef.current['USD'] * ratesRef.current['UAH'];
    const priceUsdEur = ratesRef.current['USD'] * ratesRef.current['EUR'];
    const priceEurUah = ratesRef.current['UAH'] / ratesRef.current['EUR'];
    const result = [priceUsdUah.toFixed(4), priceUsdEur.toFixed(4), priceEurUah.toFixed(4)]

    return (
        <div>
           <h1 className={classes.marquee}>
            <span>Exchange Rates: 1 USD = {result[0]} UAH | 1 USD = {result[1]} EUR | 1 EUR = {result[2]} UAH</span>
            </h1>
            <h2 className={classes.header}> Currency Converter <img className={classes.headerLogo} src={mainLogo} alt="logo" /></h2>
           
        </div>
    )
}

export default Ticker;