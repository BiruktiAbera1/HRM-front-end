import React from 'react';
// Sample component
const DepartmentList = ({ departments }) => {
  return (
    <ul className="list-disc">
      {departments.map((department, index) => (
        <li key={index}>{department.name}</li>
      ))}
    </ul>
  );
};

function DepartmentPage() {
  // Sample data
  const departments = [
    { name: 'Department 1' },
    { name: 'Department 2' },
    { name: 'Department 3' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Department Page</h1>
      <p className="text-lg mb-8">Manage and view departments.</p>
      <div className="bg-white p-6 rounded shadow">
        <DepartmentList departments={departments} />
      </div>
    </div>
  );
}

export default DepartmentPage;