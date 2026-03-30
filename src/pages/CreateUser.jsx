import React, { useState } from "react";
import Users from "../Data/users.json";
import { useAppContext } from "../context/AppContext";

const UserManagement = () => {

  const { addUser } = useAppContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    branch: "",
    status: "Active",
  });

  const [users, setUsers] = useState([]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      ...formData,
    };
    addUser(newUser)
    setUsers([...users, newUser]);

    
    setFormData({
      name: "",
      email: "",
      username: "",
      password: "",
      branch: "",
      status: "Active",
    });
  };

  
  const toggleStatus = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? {
          ...user,
          status: user.status === "Active" ? "Inactive" : "Active",
        }
        : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">User Management</h3>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <select
              className="form-select"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <option value="">Select Branch</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <select
              className="form-select"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <button className="btn btn-primary">Create User</button>
      </form>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Branch</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.branch}</td>
                <td>
                  <span
                    className={`badge ${user.status === "Active"
                      ? "bg-success"
                      : "bg-secondary"
                      }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => toggleStatus(user.id)}
                  >
                    Toggle Status
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No Users Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;