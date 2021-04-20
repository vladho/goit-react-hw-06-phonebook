import { ADDCONTACT, DELETECONTACT } from "./contactsConstants"

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case ADDCONTACT:
      return [...state, action.payload]
    case DELETECONTACT:
      return [...state.filter((item) => item.name !== action.payload)]
    default:
      return state
  }
}

export { contactsReducer }
