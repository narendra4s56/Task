import React from 'react';
import './CryptoTransactions.css';

const CryptoTransactions = () => {
  const mockData = [
    { id: 1, wallet: "abc", amount: 1.5, currency: "BTC", status: "Suspicious" },
    { id: 2, wallet: "def", amount: 10.2, currency: "ETH", status: "Normal" }
  ];

  return (
    <div className="crypto-container">
      <h2 className='crheading'></h2>
      <div className="crypto-table-container">
        <table className="crypto-table">
          <thead>
            <tr style={{color:'blue'}}>
              <th>Wallet</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map(row => (
              <tr key={row.id} className="crypto-row">
                <td>{row.wallet}</td>
                <td>{row.amount}</td>
                <td>{row.currency}</td>
                <td className={row.status === 'Suspicious' ? 'crypto-status-suspicious' : 'crypto-status-normal'}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTransactions;
