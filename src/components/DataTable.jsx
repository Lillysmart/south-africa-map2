import React, { useState, useEffect } from 'react';
import '../CSS/Table.css';

const DataTable = ({ token }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableData, setTableData] = useState({});
  const [selectedTable, setSelectedTable] = useState('Corporate_1'); // Initial selected table

  // Function to fetch table data from the API
  const fetchTableData = async () => {
    try {
      // Making a GET request to the corporate data endpoint
      const response = await fetch(
        'https://scnetwebapi.azure-api.net/api/DeveloperTest/DeveloperTest/GetCorporateData',
        {
          method: 'GET',
          headers: {
            'Ocp-Apim-Subscription-Key': '91a75aab8cf248d2aca799f8546b1f6c', // Subscription key for the API
            'Authorization': `Bearer ${token}`, // Bearer token for authorization
            'Content-Type': 'application/json' // Content type header
          }
        }
      );

      // Check if the response is not OK (status 200-299)
      if (!response.ok) {
        throw new Error('Fetching corporate data failed'); // Throw an error if the fetch fails
      }

      // Parse the response as JSON
      const data = await response.json();
      setTableData(data); // Update state with the fetched data
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      setError(true); // Set error state to true if there's an error
      setLoading(false); // Set loading to false in case of an error
    }
  };

  // useEffect to fetch table data on component mount or when the token changes
  useEffect(() => {
    fetchTableData(token);
  }, [token]);

  // Function to handle table selection change
  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  // Get the data for the currently selected table
  const currentTableData = tableData[selectedTable] || {};

  // Get the headers for the table
  const tableHeaders = Object.keys(currentTableData);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div>Error: Failed to load data</div>; // Display error message if data fetch fails
  }

  return (
    <div className="data-container">
      <h1>{selectedTable}</h1> {/* Dynamically update heading */}
      <select value={selectedTable} onChange={handleTableChange} className="dropdown">
        {/* Generate dropdown options based on fetched table data */}
        {Object.keys(tableData).map((corporate) => (
          <option key={corporate} value={corporate}>{corporate}</option>
        ))}
      </select>
      <br></br>
      <table>
        <thead>
          <tr>
            {/* Generate table headers */}
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Generate table cells based on current table data */}
            {tableHeaders.map((header) => (
              <td key={header}>{currentTableData[header]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
