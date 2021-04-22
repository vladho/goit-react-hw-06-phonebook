import {
  ADDCONTACT,
  DELETECONTACT,
  FILTERCONTACTS,
  GETCONTACTS,
} from "./contactsConstants";
import { combineReducers } from "redux";

// const initialState = {
//   items: [],
//   filter: "",
// }

const contactsItems = (state = [], { type, payload }) => {
  switch (type) {
    case ADDCONTACT:
      return [...state, payload];
    case DELETECONTACT:
      return [...state.filter((item) => item.id !== payload.id)];
    case GETCONTACTS:
      return [...payload];
    default:
      return state;
  }
};

const contactsFilter = (state = "", { type, payload }) => {
  switch (type) {
    case FILTERCONTACTS:
      return payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: contactsItems,
  filter: contactsFilter,
});

export { contactsReducer };
