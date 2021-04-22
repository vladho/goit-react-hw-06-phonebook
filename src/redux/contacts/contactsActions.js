import {
  DELETECONTACT,
  ADDCONTACT,
  FILTERCONTACTS,
  GETCONTACTS,
} from "./contactsConstants";

const addContact = (contact) => ({
  type: ADDCONTACT,
  payload: contact,
});

const deleteContact = (id) => ({
  type: DELETECONTACT,
  payload: id,
});
const filterContacts = (name) => ({
  type: FILTERCONTACTS,
  payload: name,
});

const getContacts = (contacts) => ({
  type: GETCONTACTS,
  payload: contacts,
});

export { addContact, deleteContact, filterContacts, getContacts };
