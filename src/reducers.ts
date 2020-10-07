import { combineReducers } from "redux"
import { ADD_MESSAGE } from "./actions"

function messages(state = [], action: any) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          ...action.message,
        },
      ]

    default:
      return state
  }
}

export default combineReducers({
  messages,
})
