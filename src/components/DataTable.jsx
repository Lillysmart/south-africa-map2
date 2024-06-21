import React, { useState } from 'react';
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
};

const DataTable = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableData, setTableData] = useState({});
  const [selectedTable, setSelectedTable] = useState('Corporate_1'); // Initial selected table

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




