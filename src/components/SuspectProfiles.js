import React from 'react';
import './SuspectProfiles.css'

const SuspectProfiles = () => {
  const mockData = [
    { id: 1, name: "John Doe", aliases: ["JD", "DarkLord"], riskScore: 85 },
    { id: 2, name: "Jane Smith", aliases: ["JS", "Phantom"], riskScore: 72 }
  ];

  return (
    <div className="card">
      <h2>Suspect Profiles</h2>
      <ul className="list">
        {mockData.map(suspect => (
          <li key={suspect.id} className="list-item">
            <div className="avatar">{suspect.name[0]}</div>
            <div>
              <p>{suspect.name}</p>
              <p>Aliases: {suspect.aliases.join(", ")} | Risk Score: {suspect.riskScore}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuspectProfiles;