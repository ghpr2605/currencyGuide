import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Country</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>India</td>
        <td>INR</td>
      </tr>
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader></TableHeader>
        <TableBody></TableBody>
      </table>
    );
  }
}

export default Table;
