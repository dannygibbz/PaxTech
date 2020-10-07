import React from "react"
import { Link } from "react-router-dom"
import "./Style.css"

interface Props {
  setCurrentPage: (nextPage: string) => void
}

function SecondaryNavbar({ setCurrentPage }: Props) {
  return (
    <nav className="secondaryNav">
      <div style={{ width: "100px" }} />
      <a href="/" className="secondaryNavItem">
        Overview
      </a>
      <a href="/" className="secondaryNavItem">
        Trades
      </a>
      <a href="/" className="secondaryNavItem">
        Disputes
      </a>
      <a href="/" className="secondaryNavItem">
        Your Offers
      </a>
      <a href="/" className="secondaryNavItem">
        My Team
      </a>
      <a href="/" className="secondaryNavItem">
        Trade History
      </a>
    </nav>
  )
}

export default SecondaryNavbar
