import { DELETECONTACT, ADDCONTACT, FILTERCONTACTS } from "./contactsConstants"

const addContact = (contact) => ({
  type: ADDCONTACT,
  payload: contact,
})

const deleteContact = (id) => ({
  type: DELETECONTACT,
  payload: id,
})
const filterContacts = (name) => ({
  type: FILTERCONTACTS,
  payload: name,
})

export { addContact, deleteContact, filterContacts }
