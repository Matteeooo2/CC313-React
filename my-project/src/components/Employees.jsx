import React from "react";
import Employee from "./Employee";

const Employees = () => {
  const employees = [
    {
      name: "Matt",
      position: "Manager",
      salary: 1000,
      empstatus: "Active",
    },
    {
      name: "Kayle",
      position: "Developer",
      salary: 2000,
      empstatus: "Active",
    },
    {
      name: "Jefferson",
      position: "Designer",
      salary: 3000,
      empstatus: "Active",
    },
    {
      name: "Kael",
      position: "Developer",
      salary: 4000,
      empstatus: "Active",
    },
    {
      name: "Orencio",
      position: "Manager",
      salary: 5000,
      empstatus: "Active",
    },
    {
      name: "Baby John",
      position: "Designer",
      salary: 6000,
      empstatus: "Not Active",
    },
    {
      name: "Tan",
      position: "Developer",
      salary: 7000,
      empstatus: "Not Active",
    },
    {
      name: "Jep",
      position: "Manager",
      salary: 8000,
      empstatus: "Active",
    },
    {
      name: "Wael",
      position: "Developer",
      salary: 9000,
      empstatus: "Active",
    },
    {
      name: "Yataki",
      position: "Designer",
      salary: 10000,
      empstatus: "Active",
    },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Employee Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <Employee key={index} index={index + 1} {...employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
