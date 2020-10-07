import React, { useState } from "react"
import { Route, BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Navbar from "./Navbar"
import TradeStatus from "./TradeStatus"
import CurrentTrade from "./CurrentTrade"
import Chat from "./Chat"
import SecondaryNavBar from "./SecondaryNavbar"
import TertiaryNavbar from "./TertiaryNavBar"
import useViewport from "./useViewport"
import { Trade } from "./SingleTrade"
import exampleTradeList from "./tradeList.json"
import TradeView from "./TradeView"
import { createStore } from "redux"
import todoApp from "./reducers"
import { Provider } from "react-redux"
const store = createStore(todoApp)

function App() {
  const [tradeList, setTradeList] = useState<Trade[]>(exampleTradeList)
  const [currentPage, setCurrentPage] = useState("chat")

  const width = useViewport()
  const breakpoint = 600
  const isMobile = width < breakpoint

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        {isMobile ? (
          <TertiaryNavbar setCurrentPage={setCurrentPage} />
        ) : (
          <SecondaryNavBar setCurrentPage={setCurrentPage} />
        )}

        {/* For small screens, we only show TradeStatus List*/}
        <Route exact path="/">
          <div className="componentContainer">
            <TradeStatus tradeList={tradeList} />
            {!isMobile && (
              <Chat setTradeList={setTradeList} tradeList={tradeList} />
            )}
            {!isMobile && <CurrentTrade />}
          </div>
        </Route>

        <Route
          path="/:tradeId"
          render={(props) => {
            return (
              <TradeView
                tradeId={props.match.params.tradeId}
                tradeList={tradeList}
                setTradeList={setTradeList}
                currentPage={currentPage}
              />
            )
          }}
        />
      </Router>
    </Provider>
  )
}

export default App
