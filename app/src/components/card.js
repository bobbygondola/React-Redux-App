import React from 'react'

const Card = props => {
    return (
        
        <div className="card">
            <p>{props.item.name}</p>
            <p>Current Price: {props.item.current_price}</p>
            <p>Highest 24 Hour Price: ${props.item.high_24h}</p>
            <p>Lowest 24 Hour Price: ${props.item.low_24h}</p>
            <p>Market Cap: {props.item.market_cap}</p>
            <p>Market Cap Rank: {props.item.market_cap_rank}</p>
            <p>Total Supply: {props.item.total_supply}</p>
        </div>
        
    )
}

export default Card;