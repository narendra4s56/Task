import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './DarkWebThreats.css'; 

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DarkWebThreats = () => {
  const mockData = {
    alerts: [
      { id: 1, message: "New ransomware variant detected", severity: "High" },
      { id: 2, message: "Leaked credentials found on dark web", severity: "Medium" }
    ],
    trends: {
      labels: ['2025-01-01', '2025-01-10', '2025-01-20', '2025-01-30'],
      datasets: [
        {
          label: 'Threats Detected',
          data: [12, 18, 15, 16],
          borderColor: 'red',
        }
      ]
    }
  };

  return (
    <div style={{ padding: '16px', margin: 'auto', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="dheading"></h2>
      <div>
        {mockData.alerts.map(alert => (
          <div key={alert.id} style={{ padding: '12px', borderRadius: '8px', marginBottom: '8px', backgroundColor: alert.severity === 'High' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 165, 0, 0.1)', borderLeft: `4px solid ${alert.severity === 'High' ? 'red' : 'orange'}` }}>
            <p>{alert.message}</p>
            <p style={{ fontWeight: 'bold', color: alert.severity === 'High' ? 'red' : 'orange' }}>Severity: {alert.severity}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '16px' }}>
        <Line data={mockData.trends} />
      </div>
    </div>
  );
};

export default DarkWebThreats;
