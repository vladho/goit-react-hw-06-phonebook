import { DELETECONTACT, ADDCONTACT } from "./contactsConstants"

const addContact = (contact) => ({
  type: ADDCONTACT,
  payload: contact,
})

const deleteContact = (name) => ({
  type: DELETECONTACT,
  payload: name,
})

export { addContact, deleteContact }
