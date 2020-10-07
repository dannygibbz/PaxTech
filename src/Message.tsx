import React, { Component } from "react"
import "./App.css"
import moment from "moment"
import Avatar from "@material-ui/core/Avatar"
import Satoshi from "../src/Images/satoshi.jpeg"

function mapNameToAvatar(name: string) {
  if (name === "Dan") {
    return <Avatar alt="Dan" src={Satoshi} />
  }
}

interface MessageShape {
  id: number
  name: string
  text: string
  date: Date
}

interface State {
  count: string
  isCommenting: boolean
}

class Message extends Component<MessageShape, State> {
  state = {
    count: "",
    isCommenting: false,
  }

  render() {
    return (
      <div className="messageContainer">
        <div className="message">
          <div className="messagePicture">
            {mapNameToAvatar(this.props.name)}

            <div className="messageText">{this.props.text}</div>
          </div>
          <div className="time">
            {moment(this.props.date).format(" h:mm a")}
          </div>
        </div>
      </div>
    )
  }
}

export default function MessageList({
  arrayOfMessages,
}: {
  arrayOfMessages: MessageShape[]
}) {
  return (
    <div>
      {arrayOfMessages.map(el => (
        <Message
          key={el.id}
          name={el.name}
          text={el.text}
          date={el.date}
          id={el.id}
        />
      ))}
    </div>
  )
}
