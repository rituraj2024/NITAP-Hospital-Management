import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Receptionists.css";

const Receptionists = () => {
  const [receptionists, setReceptionists] = useState([]);

  useEffect(() => {
    // Static receptionists data
    const staticReceptionists = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        photo: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        photo: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        photo: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        firstName: "Bob",
        lastName: "Williams",
        photo: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        firstName: "Emily",
        lastName: "Brown",
        photo: "https://via.placeholder.com/150",
      },
    ];

    setReceptionists(staticReceptionists);
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Receptionists</h1>
      <ul>
        {receptionists.map((receptionist) => (
          <li key={receptionist.id}>
            <img
              src={receptionist.photo}
              alt={`${receptionist.firstName} ${receptionist.lastName}`}
            />
            {receptionist.firstName} {receptionist.lastName}
          </li>
        ))}
      </ul>
      <Link to="/add-receptionist">
        <div className="button-container">
          <button className="add-button">Add Receptionist</button>
        </div>
      </Link>
    </div>
  );
};

export default Receptionists;
