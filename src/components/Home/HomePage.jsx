import React from 'react';
import './homePage.css';
import Navbar from '../Navgator/Navbar';

const HomePage = () => {
  const getTimeOfDayGreeting = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <div className="home-page">
      <Navbar currentPage="home"></Navbar>
      
      <h1 className="greeting">
        {getTimeOfDayGreeting()} Rescuer! How are you doing today, <span className="user-name">Ritesh</span>?
      </h1>

      
     
    </div>
  );
};

export default HomePage;
