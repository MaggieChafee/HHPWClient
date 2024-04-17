import React, { useEffect, useState } from 'react';
import getRevenue from '../api/revenueApi';

export default function ViewRevenue() {
  const [revenue, setRevenue] = useState(0);

  const totalRevenue = () => {
    getRevenue().then(setRevenue);
  };

  useEffect(() => {
    totalRevenue();
  });

  return (
    <div className="page-container">
      <h1>Total Sales to Date</h1>
      <h4>{revenue}</h4>
    </div>
  );
}
