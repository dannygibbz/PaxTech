import React from "react"
import "./App.css"
import TradeStatus from "./TradeStatus"
import CurrentTrade from "./CurrentTrade"
import Chat from "./Chat"
import useViewport from "./useViewport"
import { Trade } from "./SingleTrade"

interface Props {
  tradeList: Trade[]
  setTradeList: (tradeList: Trade[]) => void
  tradeId: number
  currentPage: string
}

export default function TradeView({
  tradeList,
  setTradeList,
  tradeId,
  currentPage,
}: Props) {
  const width = useViewport()
  const breakpoint = 600
  const isMobile = width < breakpoint
  let innerPage = null

  if (!isMobile) {
    return (
      <div className="componentContainer">
        <TradeStatus tradeList={tradeList} />
        <Chat
          setTradeList={setTradeList}
          tradeList={tradeList}
          tradeId={tradeId}
        />
        <CurrentTrade />
      </div>
    )
  }

  if (currentPage === "chat") {
    innerPage = (
      <Chat
        setTradeList={setTradeList}
        tradeList={tradeList}
        tradeId={tradeId}
      />
    )
  }

  if (currentPage === "tradeStatus") {
    innerPage = <TradeStatus tradeList={tradeList} />
  }

  if (currentPage === "currentTrade") {
    innerPage = <CurrentTrade />
  }

  return <div className="componentContainer">{innerPage}</div>
}
