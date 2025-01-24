import React, { useState, useEffect } from 'react';
import AgentCard from '../AgentCard/AgentCard';
import './MainContent.css';

const MainContent = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      // Mock API call (replace with actual API endpoint)
      const mockAgents = [
        {
          id: 1,
          name: 'Andy William',
          location: 'Buea',
          image: 'pexels-kindelmedia-6868459.jpg',
          number_of_deliveries: 43,
          last_delivery: '1 week ago',
          active_time: '8:00 AM - 5:00 PM',
        },
        {
          id: 2,
          name: 'Matt Blandine',
          location: 'Douala',
          image: 'pexels-kindelmedia-6869041.jpg',
          number_of_deliveries: 42,
          last_delivery: '1 week ago',
          active_time: '9:00 AM - 6:00 PM',
        },
      ];
      setAgents(mockAgents);
    } catch (error) {
      console.error('Error fetching agents:', error);
    }
  };

  return (
    <div className="main-container">
      <div className="main-header anim" style={{ '--delay': '0s' }}>Discover</div>
      <button id="showAllBtn" onClick={fetchAgents}>See All Agents</button>
      <h1>Discover Agents</h1>
      <div className="agents-container" id="agentsContainer">
        {agents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;