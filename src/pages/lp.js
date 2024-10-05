import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import './lp.css';
import { IoAddCircleOutline } from "react-icons/io5";
import Modal from '../component/modal';

function AboutUs() {
  const [usernames, setUsernames] = useState([]);
  const [loggedInUsername, setLoggedInUsername] = useState('');

  useEffect(() => {
    fetch("/members")
      .then(response => response.json())
      .then(data => {
        setUsernames(data.usernames);
        setLoggedInUsername(data.logged_in_username.toUpperCase());
      })
      .catch(error => {
        console.error(error);
      });

    const loggedInUsername = localStorage.getItem('username');
    setLoggedInUsername(loggedInUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setLoggedInUsername('');
  };

  const handleAddTransaction = () => {
    // Fügen Sie hier den Code hinzu, um eine Transaktion hinzuzufügen
    console.log("Transaction added!");
  };

  const [showModal, setShowModal] = useState(false)


  return (
    <div>
      <Navbar loggedInUsername={loggedInUsername} handleLogout={handleLogout} />
      <div className="Members">
        <h1>Welcome {loggedInUsername}</h1>
        <h2>Dashboard</h2>
        <button onClick={()=> setShowModal(true)}>
          <IoAddCircleOutline /> Add Transaction
        </button>
        {showModal && <Modal onClose={() => setShowModal(false)}/>}
      </div>
    </div>
  );
}

export default AboutUs;