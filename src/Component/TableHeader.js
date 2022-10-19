import React from 'react'

const TableHeader = () => {
  return (
    <>
        <div className="tableHeader thead">
            <div className="td rank">Rank</div>
            <div className="td icon">Coin</div>
            <div className="td symbol"></div>
            <div className="td name"></div>
            <div className="td currentPrice">Price</div>
            <div className="td change">Change</div>
            <div className="td high">24H High</div>
            <div className="td low">24H Low</div>
            <div className="td total">Total Volume</div>
        </div>
    </>
  )
}

export default TableHeader
