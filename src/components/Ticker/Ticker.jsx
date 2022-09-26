import classes from '../Ticker/Ticker.module.css'

let Ticker = () => {
    return (
        <div>
           <h1 className={classes.marquee}><span>Exchange Rates: 1 USD = 37,63 UAH | 1 EUR = 36,30 UAH</span></h1>
        </div>
    )
}

export default Ticker;