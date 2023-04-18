import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TableSortLabel,
} from "@mui/material";

const AnalysisResultsTable = (props) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortedBy, setSortedBy] = useState(null);
  
  const handleRowSelect = (event, file) => {
    const selectedFileIndex = selectedRows.findIndex(
      (selectedFile) => selectedFile.name === file.name
    );
    if (event.target.checked && selectedFileIndex === -1) {
      setSelectedRows([...selectedRows, file]);
    } else if (!event.target.checked && selectedFileIndex !== -1) {
      const updatedSelectedRows = [...selectedRows];
      updatedSelectedRows.splice(selectedFileIndex, 1);
      setSelectedRows(updatedSelectedRows);
    }
  };
  
  const handleSort = (property) => {
    const isAsc = sortedBy === property && sortDirection === "asc";
    setSortDirection(isAsc ? "desc" : "asc");
    setSortedBy(property);
  };
  
  const sortedFiles = props.uploadedFiles.sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortedBy] > b[sortedBy] ? 1 : -1;
    } else {
      return a[sortedBy] < b[sortedBy] ? 1 : -1;
    }
  });
  
  return (
    <div>
      {props.uploadedFiles.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortedBy === "name"}
                    direction={sortDirection}
                    onClick={() => handleSort("name")}
                  >
                    File Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortedBy === "contents"}
                    direction={sortDirection}
                    onClick={() => handleSort("contents")}
                  >
                    File Contents
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedFiles.map((file) => (
                <TableRow key={file.name}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={
                        selectedRows.findIndex((selectedFile) => selectedFile.name === file.name) !== -1
                      }
                      onChange={(event) => handleRowSelect(event, file)}
                    />
                  </TableCell>
                  <TableCell>{file.name}</TableCell>
                  <TableCell>
                    {file.contents === 0 ? ("0") : file.contents === 1 ? ("1") : (<span style={{ color: "red" }}>{file.contents}</span>)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
  
export default AnalysisResultsTable;