import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Currency Name</th>
        <th>Currency Abbrevation</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const { displayData } = props;
  const data = displayData.map((row) => {
    return (
      <tr>
        <td>{row.name}</td>
        <td>{row.id}</td>
      </tr>
    );
  });
  return <tbody>{data}</tbody>;
};

class Table extends Component {
  render() {
    const { displayData } = this.props;
    return (
      <table>
        <TableHeader></TableHeader>
        <TableBody displayData={displayData}></TableBody>
      </table>
    );
  }
}

export default Table;
