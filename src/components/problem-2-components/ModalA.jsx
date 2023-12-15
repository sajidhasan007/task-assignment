import React, { useState, useEffect } from "react";
// import axios from "axios";

const ModalA = ({ onClose, onSwitchToUSContacts }) => {
  const [contacts, setContacts] = useState([]);
  const [onlyEven, setOnlyEven] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://contact.mediusware.com/api/contacts?page=1&page_size=10"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setContacts(data.results);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = () => {
    setOnlyEven((prev) => !prev);
  };

  const buttonAStyle = {
    backgroundColor: "#46139f",
    color: "white",
  };
  const buttonBStyle = {
    backgroundColor: "#ff7f50",
    color: "white",
  };
  const closeButtonStyle = {
    backgroundColor: "#46139f",
    color: "white",
  };

  return (
    <div>
      <h2>All Contacts</h2>

      <ul>
        {contacts
          .filter((contact) => !onlyEven || contact.id % 2 === 0)
          .map((contact) => (
            <li key={contact.id}>
              {contact.id} - {contact.phone} - {contact.country.name}
            </li>
          ))}
      </ul>

      <button style={buttonAStyle}>All Contact</button>
      <button
        onClick={onSwitchToUSContacts}
        style={buttonBStyle}
        className="mx-2"
      >
        UD Contact
      </button>
      <button onClick={onClose} style={closeButtonStyle}>
        Close
      </button>
      <hr />
      <label>
        <input
          type="checkbox"
          checked={onlyEven}
          onChange={handleCheckboxChange}
        />
        Only Even
      </label>
    </div>
  );
};

export default ModalA;
