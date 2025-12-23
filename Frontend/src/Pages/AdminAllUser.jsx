import React, { useEffect, useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

useEffect(() => {
  fetch("http://localhost:4000/api/v1/admin/users", {
    method: "GET",
    credentials: "include",
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setUsers(data.users);
      } else {
        alert(data.message);
      }
    });
}, []);
console.log(users);


return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Users (Admin)</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Login Time</th>
              <th className="border p-2">Logout Time</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="text-center">
                <td className="border p-2">{u.first_name} {u.last_name}</td>
                <td className="border p-2">{u.email}</td>
                <td className="border p-2">{u.role}</td>
                <td className="border p-2">
                  {u.loginTime
                    ? new Date(u.loginTime).toLocaleString()
                    : "-"}
                </td>
                <td className="border p-2">
                  {u.logoutTime
                    ? new Date(u.logoutTime).toLocaleString()
                    : "Online"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
