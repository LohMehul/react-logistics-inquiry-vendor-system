import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const UserRoleMapping = () => {

    const { users, roles } = useAppContext();

    const [selectedUser, setSelectedUser] = useState("");
    const [selectedRole, setSelectedRole] = useState("");
    const [mappings, setMappings] = useState([]);

    const handleMapping = (e) => {
        e.preventDefault();

        if (!selectedUser || !selectedRole) {
            alert("Please select user and role");
            return;
        }

        const exists = mappings.some(
            (m) => m.userId === Number(selectedUser)
        );

        if (exists) {
            alert("User already has a role assigned");
            return;
        }

        const user = users.find((u) => u.id === Number(selectedUser));
        const role = roles.find((r) => r.roleName === selectedRole);

        if (!user || !role) {
            alert("Invalid user or role");
            return;
        }

        const newMapping = {
            id: Date.now(),
            userId: user.id,
            userName: user.name,
            roleName: role.roleName,
        };

        setMappings((prev) => [...prev, newMapping]);

        setSelectedUser("");
        setSelectedRole("");
    };

    const deleteMapping = (id) => {
        setMappings((prev) => prev.filter((m) => m.id !== id));
    };

    return (
        <div className="container mt-4">
            <h3>User Role Mapping</h3>

            <form onSubmit={handleMapping} className="row mb-4">
                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                    >
                        <option value="">Select User</option>
                        {users.map((u) => (
                            <option key={u.id} value={u.id}>
                                {u.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                    >
                        <option value="">Select Role</option>
                        {roles.map((r) => (
                            <option key={r.id} value={r.roleName}>
                                {r.roleName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <button className="btn btn-primary w-100">
                        Save Mapping
                    </button>
                </div>
            </form>

            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>User</th>
                        <th>Assigned Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mappings.length > 0 ? (
                        mappings.map((m) => (
                            <tr key={m.id}>
                                <td>{m.userName}</td>
                                <td>{m.roleName}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => deleteMapping(m.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center">
                                No Mappings Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserRoleMapping;