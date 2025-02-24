import React from 'react';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const mockData = {
    labels: ['Ransomware', 'Phishing', 'Data Leaks'],
    datasets: [
      {
        label: 'Threats',
        data: [12, 19, 8],
        backgroundColor: ['red', 'blue', 'green']
      }
    ]
  };

  return (
    <div style={{ padding: '16px', margin: 'auto', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>Analytics</h2>
      <div style={{ padding: '16px', width: '100%', maxWidth: '100%' }}>
        <Bar data={mockData} />
      </div>
    </div>
  );
};

export default Analytics;
