import React, { useState } from 'react';
import '../CSS/Table.css'

const tableData = {
  Corporate_1: {
    number_of_vendors: 10,
    active_bees: 5,
    expired_bees: 2,
    active_tccs: 8,
    expired_tccs: 1,
    active_werkman_comp: 7,
    expired_werkman_comp: 3,
  },
  Corporate_2: {
    number_of_vendors: 15, 
    active_bees: 15,
    expired_bees: 12,
    active_tccs: 18,
    expired_tccs: 2,
    active_werkman_comp: 6,
    expired_werkman_comp: 5,
  },
  Corporate_3: {
    number_of_vendors: 25, 
    active_bees: 25,
    expired_bees: 22,
    active_tccs: 28,
    expired_tccs: 22,
    active_werkman_comp: 26,
    expired_werkman_comp: 25,
  },
};

const DataTable = () => {
  const [selectedTable, setSelectedTable] = useState('Corporate_1'); // Initial selected table

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  const currentTableData = tableData[selectedTable];

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




