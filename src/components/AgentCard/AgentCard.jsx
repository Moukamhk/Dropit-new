import React from 'react';
import './AgentCard.css';

const AgentCard = ({ agent }) => {
  return (
    <div className="agent-card">
      <img src={`/images/agents/${agent.image}`} alt={agent.name} />
      <div className="agent-info">
        <h2>{agent.name}</h2>
        <p>{agent.location}</p>
        <p>{agent.number_of_deliveries} Deliveries</p>
        <p>Last Delivery: {agent.last_delivery}</p>
        <p>Active Time: {agent.active_time}</p>
      </div>
    </div>
  );
};

export default AgentCard;