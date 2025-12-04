import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CoachDetailsPage = ({ AddCoach, UpdateCoachData }) => {
  const { id } = useParams();
  const nav = useNavigate();

  const coach = AddCoach[id];

  const [data, setData] = useState({
    coachNumber: coach.coachNumber,
    type: coach.type,
    depot: coach.depot,
    status: coach.status,
    lastMaintenance: coach.lastMaintenance,
    nextDue: coach.nextDue,
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    if (name === "nextDue") return;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function updateHandler(e) {
    e.preventDefault();
    UpdateCoachData(id, data);
    alert("Coach Updated Successfully!");
    nav("/coachprofile");
  }

  return (
    <div className="min-h-screen bg-[#f2f6ff] py-10">

      {/* GOVERNMENT HEADER STRIP */}
      <div className="bg-[#0b3d91] text-white py-4 shadow-md mb-10">
        <h1 className="text-center text-2xl font-semibold tracking-wide">
          Indian Railways • Coach Management System
        </h1>
      </div>

      <div className="max-w-3xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
        
        {/* FORM HEADER */}
        <div className="bg-[#dce6ff] border-b border-gray-300 px-6 py-4 rounded-t-lg">
          <h2 className="text-xl font-bold text-[#0b3d91]">
            Edit Coach Information
          </h2>
          <p className="text-gray-600 text-sm">
            Coach No: <span className="font-medium">{coach.coachNumber}</span>
          </p>
        </div>

        {/* FORM BODY */}
        <form onSubmit={updateHandler} className="px-6 py-6 space-y-5">

          {/* Coach Number */}
          <GovInput label="Coach Number" name="coachNumber" value={data.coachNumber} onChange={changeHandler} />

          {/* Type */}
          <GovInput label="Coach Type" name="type" value={data.type} onChange={changeHandler} />

          {/* Depot */}
          <GovInput label="Depot" name="depot" value={data.depot} onChange={changeHandler} />

          {/* Status */}
          <div>
            <label className="font-semibold text-gray-700">Status</label>
            <select
              name="status"
              value={data.status}
              onChange={changeHandler}
              className="w-full border border-gray-400 rounded-md p-2.5 mt-1 bg-white focus:ring-1 focus:ring-blue-600 focus:border-blue-700"
            >
              <option>Active</option>
              <option>Under Maintenance</option>
              <option>Out of Service</option>
            </select>
          </div>

          {/* Last Maintenance */}
          <GovInput 
            label="Last Maintenance Date"
            name="lastMaintenance"
            type="date"
            value={data.lastMaintenance}
            onChange={changeHandler}
          />

          {/* Next Due */}
          <div>
            <label className="font-semibold text-gray-700">
              Next Due (Not Editable)
            </label>
            <input
              type="date"
              name="nextDue"
              value={data.nextDue}
              disabled
              className="w-full border border-gray-300 bg-gray-200 text-gray-600 rounded-md p-2.5 mt-1 cursor-not-allowed"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex justify-between pt-4 border-t mt-6">
            <button
              type="button"
              onClick={() => nav(-1)}
              className="px-5 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600"
            >
              Back
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-[#0b3d91] text-white hover:bg-[#0a347e]"
            >
              Update Coach
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

// GOVERNMENT STYLE INPUT COMPONENT
const GovInput = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="font-semibold text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-400 rounded-md p-2.5 mt-1 bg-white focus:ring-1 focus:ring-blue-600 focus:border-blue-700"
      required
    />
  </div>
);

export default CoachDetailsPage;
