import React, { useState } from 'react';
import {
    ArrowRightIcon, ArrowLeftIcon
  } from "@heroicons/react/20/solid";

const TableComponent = ({ headers, data }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const handlerRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(0);
    }

  const maxAmountOfRows = [5,10];

  const pages = Math.ceil(data.length / rowsPerPage);
  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="container  mx-auto px-4 sm:px-8">
      {/* <div className="py-8"> */}
      <div className='bg-white shadow shadow-md i p-2'>
        <div className=" overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="text-left py-3 px-4 uppercase font-semibold text-sm">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {currentData.map((row, index) => (
                <tr key={index} onClick={() => setSelectedRow(index)}
                    className={`hover:bg-gray-100 ${selectedRow === index ? 'bg-gray-200' : ''}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="text-left py-3 px-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between tems-center pt-4">
          <div>
            <button 
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50"
            >
            <ArrowLeftIcon className="h-5 w-5"/>


            </button>
            <button 
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= pages - 1}
              className="ml-3 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              <ArrowRightIcon className="h-5 w-5"/>

            </button>
          </div>
          <div>
            <select 
              value={rowsPerPage}
              onChange={handlerRowsPerPageChange}
              className="form-select block w-full mt-1"
            >
              {maxAmountOfRows.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
