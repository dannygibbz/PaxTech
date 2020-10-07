import React, { useEffect, useState } from "react"
import dgibbons from "../src/Images/dgibbons.jpeg"
import { FaCircle } from "react-icons/fa"
import { useHistory } from "react-router-dom"

export interface Trade {
  tradeId: number
  buyerUsername: string
  paymentMethod: string
  amount: number
  amountUnit: string
  tradeStatusPaid: boolean
  hasUnreadMessage: boolean
}

function SingleTrade({
  tradeId,
  buyerUsername,
  paymentMethod,
  amount,
  amountUnit,
  tradeStatusPaid,
  hasUnreadMessage,
}: Trade) {
  const [usdRate, setUsdRate] = useState(0)
  const [readStatus, setReadStatus] = useState("#73f866")
  const history = useHistory()
  let paid = tradeStatusPaid ? "PAID" : <span>NOT&nbsp;PAID</span>

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
      .then(response => response.json())
      .then(result => setUsdRate(Number(result.bpi.USD.rate.replace(",", ""))))
  })

  let convertedAmount = amount * 0.000094
  let finalBitcoinValue = convertedAmount.toFixed(5)

  function changeColor() {
    setReadStatus("gray")
  }

  return (
    <div
      className="singleTradeContainer"
      onClick={() => {
        history.push(`/${tradeId}`)
        changeColor()
      }}>
      <div className="informationContainer">
        <span>
          <FaCircle size=".7em" color={readStatus} />
        </span>
        <div>
          <span>{buyerUsername} is buying </span>
          <br></br>
          <span className="paymentMethod">{paymentMethod}</span>
          <br></br>
          <span className="amount">
            ${amount} {amountUnit} ({finalBitcoinValue} BTC)
          </span>
        </div>

        <div className="imageContainer">
          <img className="avatarImage" alt="Dan Gibbons" src={dgibbons}></img>
          <p
            id="paidOrNot"
            style={{ color: tradeStatusPaid ? "green" : "gray" }}>
            {paid}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleTrade
