import React from 'react';
import './Dashboard.css'; // Import the Dashboard CSS file

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Dropit</h1>
        <nav>
          <ul>
            <li>
              <a href="#discover">Discover</a>
            </li>
            <li>
              <a href="#gas-delivery">Gas Delivery</a>
            </li>
            <li>
              <a href="#food-delivery">Food Delivery</a>
            </li>
            <li>
              <a href="#parcels">Parcels & Packages</a>
            </li>
            <li>
              <a href="#shop4me">Shop4Me</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="dashboard-content">
        <section id="discover">
          <h2>Discover Agents</h2>
          {/* Add agent discovery content here */}
        </section>
        {/* Add other sections for different services */}
      </main>
    </div>
  );
};

export default Dashboard;