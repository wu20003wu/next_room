import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';

function AboutUs() {
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    fetch("/members")
      .then(response => response.json())
      .then(data => {
        setUsernames(data.usernames);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="Members">
        <h1>Our Member</h1>
        {usernames.length === 0 ? (
          <p>Loading...</p>
        ) : (
          usernames.map((username, i) => (
            <p key={i}>{username}</p>
          ))
        )}
      </div>
    </div>
  );
}

export default AboutUs;