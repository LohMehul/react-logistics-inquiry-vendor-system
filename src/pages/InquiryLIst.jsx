import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const InquiryList = () => {

    const { inquiries } = useAppContext();

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 2;

    const filteredData = inquiries.filter((item) => {
        const matchesSearch =
            item.customerName.toLowerCase().includes(search.toLowerCase()) ||
            item.inquiryNo.toLowerCase().includes(search.toLowerCase());

        const matchesStatus = statusFilter
            ? item.status === statusFilter
            : true;

        return matchesSearch && matchesStatus;
    });

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentData = filteredData.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Inquiry List</h3>

            <div className="row mb-3">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Inquiry No or Customer"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col-md-3">
                    <select
                        className="form-select"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
            </div>

            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Inquiry No</th>
                        <th>Customer</th>
                        <th>Route</th>
                        <th>Vehicle Type</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.length > 0 ? (
                        currentData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.inquiryNo}</td>
                                <td>{item.customerName}</td>
                                <td>{item.fromLocation} -{">"} {item.toLocation}</td>
                                <td>{item.vehicleType}</td>
                                <td>
                                    <span
                                        className={`badge ${item.status === "Approved"
                                                ? "bg-success"
                                                : item.status === "Pending"
                                                    ? "bg-warning"
                                                    : "bg-danger"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-primary me-2">
                                        View
                                    </button>
                                    <button className="btn btn-sm btn-warning">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">
                                No Data Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <nav>
                <ul className="pagination">
                    {[...Array(totalPages)].map((_, index) => (
                        <li
                            key={index}
                            className={`page-item ${currentPage === index + 1 ? "active" : ""
                                }`}
                        >
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default InquiryList;