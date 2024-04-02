import React from 'react';
// Sample component
const EmployeeTable = ({ employees }) => {
  return (
    <table className="border-collapse border w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Name</th>
          <th className="border p-2">Position</th>
          <th className="border p-2">Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td className="border p-2">{employee.name}</td>
            <td className="border p-2">{employee.position}</td>
            <td className="border p-2">${employee.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function PayrollPage() {
  // Sample data
  const employees = [
    { name: 'Employee 1', position: 'Manager', salary: 5000 },
    { name: 'Employee 2', position: 'Developer', salary: 4000 },
    { name: 'Employee 3', position: 'Designer', salary: 3500 },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Payroll Page</h1>
      <p className="text-lg mb-8">Manage and view payroll information.</p>
      <div className="bg-white p-6 rounded shadow">
        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
}

export default PayrollPage;