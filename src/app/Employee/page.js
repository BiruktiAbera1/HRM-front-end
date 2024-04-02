import React from 'react';

function EmployeePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Employee Page</h1>
      <p className="text-lg mb-8">Manage and view employee details.</p>
      <div className="bg-white p-6 rounded shadow">
        {/* Your employee management components */}
      </div>
    </div>
  );
}

export default EmployeePage;