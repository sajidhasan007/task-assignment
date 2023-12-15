import React, { useState, useEffect } from "react";
import axios from "axios";

const ModalB = ({ onClose, onSwitchToAllContacts }) => {
  const [usContacts, setUSContacts] = useState([]);
  const [onlyEven, setOnlyEven] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://contact.mediusware.com/api-doc/contacts",
          {
            params: {
              page: 1,
              page_size: 10,
              search: "US",
            },
          }
        );

        setUSContacts(response.data.results);
      } catch (error) {
        console.error("Error fetching US contacts:", error);
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
      <h2>US Contacts</h2>

      <ul>
        {usContacts
          .filter((contact) => !onlyEven || contact.id % 2 === 0)
          .map((contact) => (
            <li key={contact.id}>
              {contact.id} - {contact.phone} - {contact.country.name}
            </li>
          ))}
      </ul>

      <button style={buttonAStyle} onClick={onSwitchToAllContacts}>
        All Contact
      </button>
      <button style={buttonBStyle} className="mx-2">
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

export default ModalB;
