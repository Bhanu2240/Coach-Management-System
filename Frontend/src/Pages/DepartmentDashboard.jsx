import React from "react";

const DepartmentDashboard = ({ AddMaintenance }) => {
  // Count tasks for each department
  const departmentCount = {
    Mechanical: 0,
    Electrical: 0,
    "Signal & Telecom": 0,
    "Carriage & Wagon": 0,
    Traction: 0,
    Operations: 0,
    Engineering: 0,
    "Railway Safety": 0,
    Maintenance: 0,
  };

  // Loop through all maintenance tasks
  AddMaintenance.forEach((task) => {
    if (task.department) {
      departmentCount[task.department]++;
    }
  });

  const departments = Object.keys(departmentCount);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Department Status Overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {departments.map((dept, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-700">{dept}</h2>

            <p className="mt-3 text-5xl font-bold text-blue-600">
              {departmentCount[dept]}
            </p>

            <p className="text-gray-500 mt-1 text-sm">Total Tasks</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default DepartmentDashboard;
