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

      <button onClick={onClose}>Close</button>
      <button onClick={onSwitchToAllContacts}>Switch to All Contacts</button>
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
