import React, { useState } from "react";
import { useAppContext } from "../context/AppContext"; // adjust path if needed

const RoleUserManagement = () => {

    const { roles, addRole, deleteRole } = useAppContext();

    const [roleForm, setRoleForm] = useState({
        roleName: "",
        description: "",
    });

    const handleRoleChange = (e) => {
        const { name, value } = e.target;
        setRoleForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleRoleSubmit = (e) => {
        e.preventDefault();

        const exists = roles.some(
            (r) =>
                r.roleName.toLowerCase() === roleForm.roleName.toLowerCase()
        );

        if (exists) {
            alert("Role already exists");
            return;
        }
        addRole(roleForm);
        setRoleForm({
            roleName: "",
            description: "",
        });
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-4">Role</h3>

            <h5>Role Management</h5>
            <form onSubmit={handleRoleSubmit} className="row mb-3">
                <div className="col-md-4">
                    <input
                        className="form-control"
                        placeholder="Role Name"
                        name="roleName"
                        value={roleForm.roleName}
                        onChange={handleRoleChange}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <input
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        value={roleForm.description}
                        onChange={handleRoleChange}
                    />
                </div>

                <div className="col-md-2">
                    <button className="btn btn-primary w-100">
                        Add Role
                    </button>
                </div>
            </form>

            <table className="table table-bordered mb-4">
                <thead className="table-dark">
                    <tr>
                        <th>Role Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.length > 0 ? (
                        roles.map((r) => (
                            <tr key={r.id}>
                                <td>{r.roleName}</td>
                                <td>{r.description}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => deleteRole(r.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center">
                                No Roles Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default RoleUserManagement;