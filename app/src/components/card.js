import React from 'react'

const Card = props => {
    return (
        
        <div className="card">
            <h2>{props.item.name}</h2>
            <div >
                <div><h3>Prices of the day</h3></div>
                <div className="prices">
            <p>Current Price: {props.item.current_price}</p>
            <p>Highest 24 Hour Price: ${props.item.high_24h}</p>
            <p>Lowest 24 Hour Price: ${props.item.low_24h}</p>
            </div>
            </div>
            <div><h3>Coin Specs</h3></div>
            <p>Market Cap Rank: {props.item.market_cap_rank}</p>
            <p>Market Cap: {props.item.market_cap}</p>
            <p>Total Supply: {props.item.total_supply}</p>
        </div>
        
    )
}

export default Card;