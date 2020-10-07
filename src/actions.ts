import { NextMessage } from "./Chat"

export const ADD_MESSAGE = "ADD_MESSAGE"

export function addMessage(message: NextMessage) {
  return { type: ADD_MESSAGE, message }
}
