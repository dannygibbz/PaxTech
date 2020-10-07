import React from "react"
import "./Style.css"

interface Props {
  setCurrentPage: (nextPage: string) => void
}

function TertiaryNavbar({ setCurrentPage }: Props) {
  return (
    <nav className="TertiaryNav">
      <div style={{ width: "100px" }} />
      <div
        className="tertiaryNavItem"
        onClick={() => setCurrentPage("tradeStatus")}
      >
        Trade Status
      </div>
      <div className="tertiaryNavItem" onClick={() => setCurrentPage("chat")}>
        Chat
      </div>
      <div
        className="tertiaryNavItem"
        onClick={() => setCurrentPage("currentTrade")}
      >
        Current Trade
      </div>
    </nav>
  )
}

export default TertiaryNavbar
