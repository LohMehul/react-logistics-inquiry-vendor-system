import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const BranchRoleAccess = () => {

    const { roles } = useAppContext();

    // Dummy Branches
    const [branches] = useState([
        "Ahmedabad",
        "Mumbai",
        "Delhi",
        "Pune",
    ]);

    const [formData, setFormData] = useState({
        role: "",
        branch: "",
        view: false,
        add: false,
        edit: false,
        delete: false,
    });

    const [accessList, setAccessList] = useState([]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.role || !formData.branch) {
            alert("Select Role and Branch");
            return;
        }

        const exists = accessList.some(
            (a) =>
                a.role === formData.role &&
                a.branch === formData.branch
        );

        if (exists) {
            alert("Access already defined for this role & branch");
            return;
        }

        const newAccess = {
            id: Date.now(),
            ...formData,
        };

        setAccessList([...accessList, newAccess]);

        setFormData({
            role: "",
            branch: "",
            view: false,
            add: false,
            edit: false,
            delete: false,
        });
    };

    return (
        <div className="container mt-4">
            <h3>Branch-wise Role Access</h3>

            <form onSubmit={handleSubmit} className="row mb-4">
                
                <div className="col-md-3">
                    <select
                        className="form-select"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="">Select Role</option>
                        {roles.map((r) => (
                            <option key={r.id} value={r.roleName}>
                                {r.roleName}
                            </option>
                        ))}
                    </select>
                </div>

                
                <div className="col-md-3">
                    <select
                        className="form-select"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                    >
                        <option value="">Select Branch</option>
                        {branches.map((b, i) => (
                            <option key={i} value={b}>
                                {b}
                            </option>
                        ))}
                    </select>
                </div>

                
                <div className="col-md-6 d-flex align-items-center gap-3">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="view"
                            className="form-check-input"
                            checked={formData.view}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">View</label>
                    </div>

                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="add"
                            className="form-check-input"
                            checked={formData.add}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Add</label>
                    </div>

                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="edit"
                            className="form-check-input"
                            checked={formData.edit}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Edit</label>
                    </div>

                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="delete"
                            className="form-check-input"
                            checked={formData.delete}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Delete</label>
                    </div>
                </div>

                <div className="col-md-12 mt-3">
                    <button className="btn btn-primary">
                        Save Access
                    </button>
                </div>
            </form>

            
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Role</th>
                        <th>Branch</th>
                        <th>View</th>
                        <th>Add</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {accessList.length > 0 ? (
                        accessList.map((a) => (
                            <tr key={a.id}>
                                <td>{a.role}</td>
                                <td>{a.branch}</td>
                                <td>{a.view ? "✔" : "✖"}</td>
                                <td>{a.add ? "✔" : "✖"}</td>
                                <td>{a.edit ? "✔" : "✖"}</td>
                                <td>{a.delete ? "✔" : "✖"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">
                                No Access Defined
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BranchRoleAccess;