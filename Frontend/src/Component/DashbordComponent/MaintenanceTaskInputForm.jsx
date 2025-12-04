/** @format */

import React, { useRef, useState } from "react";
import coachListData from "../../DataFile/CoachListData";
const MaintenanceTaskInputForm = ({AddMaintenaceData}) => {
    const [showForm, setShowForm] = useState(false);

    let coach = useRef();
    let title = useRef();
    let priority = useRef();
    let description = useRef();

    function submitHandler(e) {
        e.preventDefault();
        let MaintenanceData = {
            coach: coach.current.value,
            title: title.current.value,
            priority: priority.current.value,
            description: description.current.value,
        };
        AddMaintenaceData(MaintenanceData)
        setShowForm(false);
    }

    return (
        <>
            {/* OPEN BUTTON */}
            <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                + Create Task
            </button>

            {/* POPUP MODAL */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white w-[600px] rounded-2xl shadow-xl p-8 animate-fadeIn">
                        {/* TITLE */}
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">
                            Create Maintenance Task
                        </h2>

                        {/* FORM */}
                        <form onSubmit={submitHandler} className="space-y-5">
                            {/* SELECT COACH */}
                            <div>
                                <label className="text-gray-700 font-medium">
                                    Select Coach
                                </label>
                                <select
                                    name="coach"
                                    required
                                    //   value={formData.coach}
                                    ref={coach}
                                    //   onChange={changeHandler}
                                    className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500">
                                    <option value="">-- Select Coach --</option>
                                    {coachListData.map((coach, i) => (
                                        <option key={i} value={coach.coachNumber}>
                                            {coach.coachNumber} ({coach.type})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* TASK TITLE */}
                            <div>
                                <label className="text-gray-700 font-medium">Task Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    // value={formData.title}
                                    ref={title}
                                    // onChange={changeHandler}
                                    className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* PRIORITY */}
                            <div>
                                <label className="text-gray-700 font-medium">Priority</label>
                                <select
                                    name="priority"
                                    // value={formData.priority}
                                    ref={priority}
                                    // onChange={changeHandler}
                                    className="w-full mt-1 p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500">
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                    <option>Critical</option>
                                </select>
                            </div>

                            {/* DESCRIPTION */}
                            <div>
                                <label className="text-gray-700 font-medium">Description</label>
                                <textarea
                                    name="description"
                                    // value={formData.description}
                                    ref={description}
                                    // onChange={changeHandler}
                                    className="w-full mt-1 p-3 border rounded-lg bg-gray-50 h-28 focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>

                            {/* BUTTONS */}
                            <div className="flex justify-end gap-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="px-6 py-2 text-gray-600 hover:text-gray-800">
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                                    Assign Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default MaintenanceTaskInputForm;
