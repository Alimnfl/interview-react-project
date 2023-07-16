// CONTOH

import React, { useEffect, useState } from 'react';

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Get the authentication token from storage
      const token = localStorage.getItem('authToken');

      // Make the API request with the token
      const response = await fetch('https://api.example.com/data', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if the response is successful
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        // Handle error response
        console.log('Error:', response.status);
      }
    } catch (error) {
      // Handle network or other errors
      console.log('Error:', error.message);
    }
  };

  return (
    <div>
      {/* Display the fetched data */}
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default FetchData;
