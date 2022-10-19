import React from 'react'

const TableBody = ({filterItems}) => {
  return (
    <>
        {
            filterItems?.map((item) => (
                <div key={item.id} className={'tbody'}>
                    <div className="td rank"> {item.market_cap_rank} </div>
                    <div className="td icon"> <img src={item.image} alt={item.name} /> </div>
                    <div className="td symbol"> {item.symbol} </div>
                    <div className="td name"> {item.name} </div>
                    <div className="td currentPrice"> ${item.current_price} </div> 
                    {item.price_change_percentage_24h < 0 ? (
                        <div className="td change red"> {(item.price_change_percentage_24h).toFixed(2)}% </div>
                    ) : (<div className="td change green"> {(item.price_change_percentage_24h).toFixed(2)}% </div>)}
                    <div className="td high"> {item.high_24h} </div>
                    <div className="td low"> {item.low_24h} </div>
                    <div className="td total"> {item.total_volume} </div>
                </div>
            ))
        }
    </>
  )
}

export default TableBody
