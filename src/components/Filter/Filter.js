import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsActions";
import Contacts from "../Contacts/Contacts";
import styles from "./Filter.module.css";

const Filter = ({ filter, onChange, items, deleteContact }) => {
  const filterItems = () => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <>
      <div className={styles.filter}>
        <label>
          <p>Find contacts by name</p>
          <input
            type="text"
            value={filter}
            onChange={onChange}
            className={styles.inpt}
          />
        </label>
      </div>
      <ul className="contacts__name">
        {filterItems().map((el) => (
          <Contacts key={el.id} contacts={el} deleteContact={deleteContact} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ contacts }) => ({
  filter: contacts.filter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
