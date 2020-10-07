import React from "react"
import dgibbons from "../src/Images/dgibbons.jpeg"

function CurrentTradeDisplay() {
  return (
    <div>
      <div className="top">
        <span className="headline">
          You are trading with <b>Dan</b>
        </span>
        <br></br>
        <span className="sub-headline">Started 23 minutes ago</span>
        <br></br>
        <button className="releaseBitcoins">Release Bitcoins</button>
      </div>
      <div className="bottomContainer">
        <div className="row">
          <div className="box-left">
            <img className="avatarImage" alt="Dan Gibbons" src={dgibbons}></img>
            <br></br>
            <div id="reputationRating">
              <span className="positiveRating">+37 </span>/
              <span className="negativeRating"> -1</span>
            </div>
          </div>
          <div className="box">
            Number of Trades
            <p className="box-p">4</p>
          </div>
        </div>
        <div className="row">
          <div className="box-left">
            Trade Status
            <p id="paidStatus">PAID</p>
          </div>
          <div className="box">
            Trade Hash
            <p className="box-p">45aFD3Rr</p>
          </div>
        </div>
        <div className="row">
          <div className="box-left">
            Amount USD
            <p className="box-p">25.00</p>
          </div>
          <div className="box">
            Amount BTC
            <p className="box-p">0.00234524</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentTradeDisplay
