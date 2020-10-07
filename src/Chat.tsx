import React, { useState } from "react"
import "./App.css"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import MessageList from "./Message"
import { Trade } from "./SingleTrade"
import { FaTrash } from "react-icons/fa"
import { connect } from "react-redux"
import { addMessage } from "./actions"
export interface NextMessage {
  tradeId: number
  name: string
  text: string
  date: Date
  id: number
}

interface Props {
  tradeList: Trade[]
  setTradeList: (tradeList: Trade[]) => void
  tradeId?: number
  storeMessages: NextMessage[]
  dispatch: (action: any) => void
}

function Chat({
  tradeList,
  setTradeList,
  tradeId,
  storeMessages,
  dispatch,
}: Props) {
  // Didn't finish the user switching functionality

  const [value, setValue] = useState("")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentUsername, setCurrentUsername] = useState("Dan")

  const currentTrade = tradeList.find(
    el => Number(el.tradeId) === Number(tradeId)
  )

  const saveMessage = () => {
    if (!tradeId) {
      return
    }
    let nextMessage: NextMessage = {
      tradeId: tradeId,
      name: currentUsername,
      text: value,
      date: new Date(),
      id: Math.random(),
    }

    dispatch(addMessage(nextMessage))
    setValue("")
  }

  const removeTrade = () => {
    if (!tradeId) {
      return
    }
    setTradeList(tradeList.filter(el => Number(el.tradeId) !== Number(tradeId)))
  }

  let currentMessages = storeMessages.filter(
    el => Number(el.tradeId) === Number(tradeId)
  )

  return (
    <div className="chatContainer">
      <div className="userInformation">
        <div
          className="trashIcon"
          style={{ cursor: "pointer" }}
          onClick={removeTrade}>
          <FaTrash className="trash" />
        </div>
        <div className="paymentType">{currentTrade?.paymentMethod}</div>
        <br></br>
      </div>
      <div className="nameAndReputation">
        <span>
          {currentUsername} <span style={{ color: "#4fe73e" }}>+37 </span>
          <span>/ </span>
          <span style={{ color: "red" }}>-1</span>
        </span>
      </div>
      <hr></hr>

      <div style={{ height: "70vh", overflow: "scroll" }}>
        <MessageList arrayOfMessages={currentMessages} />
      </div>
      <div
        style={{
          minWidth: "400px",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}>
        <TextField
          style={{
            minWidth: "400px",

            marginLeft: "1rem",
            marginRight: "1rem",
          }}
          id="outlined-basic"
          label="Type your message"
          variant="outlined"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <Button onClick={saveMessage} style={{ color: "green" }}>
                Send
              </Button>
            ),
          }}></TextField>
      </div>

      <div />
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    storeMessages: state.messages,
  }
}

export default connect(mapStateToProps)(Chat)
