import React, { useState , useEffect } from 'react';
import '../CSS/Table.css'

const tableData = {
  Corporate_1: {
    number_of_vendors: 0,
    active_bees: 0,
    expired_bees: 0,
    active_tccs: 0,
    expired_tccs: 0,
    active_workman_comp: 0,
    expired_workman_comp: 0,
  },
  Corporate_2: {
    number_of_vendors: 0, 
    active_bees: 0,
    expired_bees: 0,
    active_tccs: 0,
    expired_tccs: 0,
    active_workman_comp: 0,
    expired_workman_comp: 0,
  },
  Corporate_3: {
    number_of_vendors: 0, 
    active_bees: 0,
    expired_bees: 0,
    active_tccs: 0,
    expired_tccs: 0,
    active_workman_comp: 0,
    expired_workman_comp: 0,
  },
}

const DataTable = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableData, setTableData] = useState({});
  const [selectedTable, setSelectedTable] = useState('Corporate_1'); // Initial selected table
  
   // Function to fetch table data from the API
  const fetchTableData= async()=>{
    try { const response = await fetch('https://scnetwebapi.azure-api.net/api/DeveloperTest/DeveloperTest/GetCorporateData',
            // Making a GET request to the corporate data endpoint
      {method :'GET' ,
       headers :{
        'Ocp-Apim-Subscription-Key': '91a75aab8cf248d2aca799f8546b1f6c',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
       }

    });
 if (!response){
  throw new Error("'Fetching corporate data failed'")  // Throw an error if the fetch fails
 }
   // Parse the response as JSON
 const data =await response.json()
 setTableData(data); // Update state with the fetched data
 setLoading(false);}
 catch (error){
  setError(true);// Set error state to true if there's an error
  setLoading(false)

 }
    };


  // useEffect to fetch table data on component mount or when the token changes
useEffect( ()=>{
  fetchTableData(token);
}
 
 ,[token])
  }
  // Function to handle table selection change
  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  const currentTableData = tableData[selectedTable] || {};

  const tableHeaders = Object.keys(currentTableData);

  return (
    <div className="data-container">
      <h1>{selectedTable}</h1> {/* Dynamically update heading */}
      <select value={selectedTable} onChange={handleTableChange} className="dropdown">
        <option value="Corporate_1">Corporate_1</option>
        <option value="Corporate_2">Corporate_2</option>
        <option value="Corporate_3">Corporate_3</option>
      </select>
      <br></br>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
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




