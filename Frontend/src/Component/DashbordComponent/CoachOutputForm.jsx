import React from 'react'

const CoachOutputForm = ({AddCoach , CountCoachData}) => {


    // console.log("Saved Coach Data:", AddCoach.length);
    CountCoachData(AddCoach);

  return (
 <div className=" bg-gray-100 p-8">

     

      <div className="bg-white rounded-xl shadow-lg p-6">

        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="p-4">Coach Number</th>
              <th className="p-4">Type</th>
              <th className="p-4">Depot</th>
              <th className="p-4">Status</th>
              <th className="p-4">Last Maintenance</th>
              <th className="p-4">Next Due</th>
            </tr>
          </thead>

          <tbody>
            {AddCoach.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="p-5 text-center text-gray-500 border-t"
                >
                  No coaches added yet.
                </td>
              </tr>
            ) : (
              AddCoach.map((coach, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4">{coach.coachNumber}</td>
                  <td className="p-4">{coach.type}</td>
                  <td className="p-4">{coach.depot}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm text-white ${
                        coach.status === "Active"
                          ? "bg-green-500"
                          : coach.status === "Under Maintenance"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {coach.status}
                    </span>
                  </td>
                  <td className="p-4">{coach.lastMaintenance}</td>
                  <td className="p-4">{coach.nextDue}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  
  )
}

export default CoachOutputForm