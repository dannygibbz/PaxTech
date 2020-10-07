import React from "react"
import SingleTrade, { Trade } from "./SingleTrade"

function TradeStatus({ tradeList }: { tradeList: Trade[] }) {
  return (
    <div className="tradeStatusContainer">
      {tradeList.map((el) => (
        <SingleTrade {...el} />
      ))}
    </div>
  )
}

export default TradeStatus
