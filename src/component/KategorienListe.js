import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';

function AboutUs() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/kategorien")
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="categories">
        <Navbar/>
        <h1>Your Categories</h1>
        {categories.length === 0 ? (
          <p>Loading...</p>
        ) : (
            categories.map((categories, i) => (
            <p key={i}>{categories}</p>
          ))
        )}
      </div>
    </div>
  );
}

export default AboutUs;