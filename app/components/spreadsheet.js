import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const SpreadsheetDemo = () => {
  const headers = [
    { display: "Item", variable: "item" },
    { display: "Quantity", variable: "quantity" },
    { display: "Price", variable: "price" },
    { display: "Discount %", variable: "discount" },
    { display: "Total", variable: "total" }
  ];

  const createEmptyRow = (rowIndex) => ({
    item: `Item ${rowIndex + 1}`,
    quantity: "",
    price: "",
    discount: "",
    total: ""
  });

  const [rows, setRows] = useState([createEmptyRow(0)]);
  const [fadeInRowIndex, setFadeInRowIndex] = useState(null);
  const inputRefs = useRef([]);
  const [selectionStart, setSelectionStart] = useState(null);
  const [selectionEnd, setSelectionEnd] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const calculateTotal = (row) => {
    const quantity = parseFloat(row.quantity) || 0;
    const price = parseFloat(row.price) || 0;
    const discount = parseFloat(row.discount) || 0;
    return (quantity * price * (1 - discount / 100)).toFixed(2);
  };

  // Helper function to select input content
  const selectInputContent = (row, col) => {
    if (inputRefs.current[row]?.[col]) {
      setTimeout(() => {
        inputRefs.current[row][col].select();
      }, 0);
    }
  };

  const handleInputChange = (rowIndex, column, value) => {
    if (!selectionStart || !selectionEnd) {
      // Single cell edit
      const updatedRows = [...rows];
      updatedRows[rowIndex][column] = value;
      
      if (column !== 'total') {
        updatedRows[rowIndex].total = calculateTotal(updatedRows[rowIndex]);
      }

      setRows(updatedRows);
    } else {
      // Multi-cell edit
      const minRow = Math.min(selectionStart.row, selectionEnd.row);
      const maxRow = Math.max(selectionStart.row, selectionEnd.row);
      const minCol = Math.min(selectionStart.col, selectionEnd.col);
      const maxCol = Math.max(selectionStart.col, selectionEnd.col);

      const updatedRows = [...rows];
      for (let i = minRow; i <= maxRow; i++) {
        for (let j = minCol; j <= maxCol; j++) {
          const currentColumn = headers[j].variable;
          if (currentColumn !== 'total') { // Skip total column
            updatedRows[i][currentColumn] = value;
            updatedRows[i].total = calculateTotal(updatedRows[i]);
          }
        }
      }
      setRows(updatedRows);
    }

    if (rowIndex === rows.length - 1 && value.trim() !== "") {
      addRow();
    }
  };

  const addRow = () => {
    setRows(prevRows => [...prevRows, createEmptyRow(prevRows.length)]);
    setFadeInRowIndex(rows.length);
    setTimeout(() => setFadeInRowIndex(null), 150);
  };

  const handleMouseDown = (rowIndex, colIndex) => {
    if (headers[colIndex].variable !== 'total') {
      setSelectionStart({ row: rowIndex, col: colIndex });
      setSelectionEnd({ row: rowIndex, col: colIndex });
      setIsSelecting(true);
      setActiveInput({ row: rowIndex, col: colIndex });
      selectInputContent(rowIndex, colIndex);
    }
  };

  const handleMouseEnter = (rowIndex, colIndex) => {
    if (isSelecting && headers[colIndex].variable !== 'total') {
      setSelectionEnd({ row: rowIndex, col: colIndex });
    }
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
  };

  const isSelected = (rowIndex, colIndex) => {
    if (!selectionStart || !selectionEnd) return false;
    const minRow = Math.min(selectionStart.row, selectionEnd.row);
    const maxRow = Math.max(selectionStart.row, selectionEnd.row);
    const minCol = Math.min(selectionStart.col, selectionEnd.col);
    const maxCol = Math.max(selectionStart.col, selectionEnd.col);
    return rowIndex >= minRow && rowIndex <= maxRow && colIndex >= minCol && colIndex <= maxCol;
  };

  const handleKeyDown = (e, rowIndex, colIndex) => {
    let newRow = rowIndex;
    let newCol = colIndex;

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        newRow = Math.max(0, rowIndex - 1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        newRow = Math.min(rows.length - 1, rowIndex + 1);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        newCol = Math.max(0, colIndex - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        newCol = Math.min(headers.length - 1, colIndex + 1);
        break;
      case 'Tab':
        e.preventDefault();
        if (e.shiftKey) {
          if (colIndex > 0) newCol--;
          else if (rowIndex > 0) {
            newRow--;
            newCol = headers.length - 1;
          }
        } else {
          if (colIndex < headers.length - 1) newCol++;
          else if (rowIndex < rows.length - 1) {
            newRow++;
            newCol = 0;
          }
        }
        break;
      case 'Escape':
        setSelectionStart(null);
        setSelectionEnd(null);
        return;
      case 'Enter':
        e.preventDefault();
        newRow = Math.min(rows.length - 1, rowIndex + 1);
        break;
      default:
        // If it's a printable character and we have a selection, don't prevent default
        if (e.key.length === 1 && isSelected(rowIndex, colIndex)) {
          return;
        }
        return;
    }

    if (inputRefs.current[newRow]?.[newCol]) {
      // Update selection to single cell
      setSelectionStart({ row: newRow, col: newCol });
      setSelectionEnd({ row: newRow, col: newCol });
      setActiveInput({ row: newRow, col: newCol });
      
      // Focus and select the input content
      inputRefs.current[newRow][newCol].focus();
      selectInputContent(newRow, newCol);
    }
  };

  // Handle focus events
  const handleFocus = (rowIndex, colIndex) => {
    selectInputContent(rowIndex, colIndex);
  };

  // Clear selection when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('table')) {
        setSelectionStart(null);
        setSelectionEnd(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="w-full bg-slate-50">
      <CardHeader className="bg-slate-100">
        <CardTitle className="text-slate-800 text-center">Interactive Spreadsheet</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {headers.map(header => (
                  <th key={header.variable} className="border border-slate-300 bg-slate-200 px-4 py-2 text-slate-700">
                    {header.display}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={`transition-opacity duration-150 ${fadeInRowIndex === rowIndex ? 'opacity-0' : 'opacity-100'}`}>
                  {headers.map((header, colIndex) => (
                    <td 
                      key={header.variable}
                      className={`border border-slate-200 p-1 ${isSelected(rowIndex, colIndex) ? 'bg-blue-100/50' : ''}`}
                      onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                      onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                      onMouseUp={handleMouseUp}
                    >
                      <input
                        ref={el => {
                          if (!inputRefs.current[rowIndex]) {
                            inputRefs.current[rowIndex] = [];
                          }
                          inputRefs.current[rowIndex][colIndex] = el;
                        }}
                        type={header.variable === 'item' ? 'text' : 'number'}
                        value={row[header.variable]}
                        onChange={(e) => handleInputChange(
                          activeInput?.row ?? rowIndex,
                          header.variable,
                          e.target.value
                        )}
                        onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                        onFocus={() => handleFocus(rowIndex, colIndex)}
                        onDragStart={handleDragStart}
                        className={`
                          w-full p-1 text-center border rounded 
                          focus:outline-none focus:ring-1 focus:ring-blue-400 
                          ${rowIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'} 
                          ${header.variable === 'total' ? 'bg-slate-100' : ''}
                          [appearance:textfield]
                          [&::-webkit-outer-spin-button]:appearance-none
                          [&::-webkit-inner-spin-button]:appearance-none
                          [&::-webkit-inner-spin-button]:m-0
                          [&::-webkit-outer-spin-button]:m-0
                        `}
                        readOnly={header.variable === 'total'}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpreadsheetDemo;