import React from "react";

const Employee = ({ index, name, position, salary, empstatus }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{position}</td>
      <td>{empstatus === "Active" ? `$${salary}` : " "}</td>
      <td>{empstatus}</td>
    </tr>
  );
};

export default Employee;
