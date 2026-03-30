import React, { useState } from "react";
import inquiries from "../Data/Inquiry.json";
import quotes from "../Data/vendorquote.json";

const Reports = () => {
    const [filters, setFilters] = useState({
        fromDate: "",
        toDate: "",
        status: "",
        customer: "",
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handlePrint = () => {
        window.print();
    };

    const filteredInquiries = inquiries.filter((i) => {
        return (
            (!filters.status || i.status === filters.status) &&
            (!filters.customer ||
                i.customer.toLowerCase().includes(filters.customer.toLowerCase())) &&
            (!filters.fromDate || i.date >= filters.fromDate) &&
            (!filters.toDate || i.date <= filters.toDate)
        );
    });

    const filteredQuotes = quotes.filter((q) => {
        return !filters.status || q.status === filters.status;
    });

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-3 no-print">
                <h3>Reports</h3>
                <button className="btn btn-primary" onClick={handlePrint}>
                    Print Report
                </button>
            </div>

            <div className="row mb-4 no-print">
                <div className="col-md-3">
                    <input type="date" className="form-control" name="fromDate" onChange={handleFilterChange} />
                </div>

                <div className="col-md-3">
                    <input type="date" className="form-control" name="toDate" onChange={handleFilterChange} />
                </div>

                <div className="col-md-3">
                    <select className="form-select" name="status" onChange={handleFilterChange}>
                        <option value="">All Status</option>
                        <option>Pending</option>
                        <option>Approved</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Customer"
                        name="customer"
                        onChange={handleFilterChange}
                    />
                </div>
            </div>

            <div className="print-area">

                <h5>Inquiry Report</h5>
                <table className="table table-bordered mb-4">
                    <thead className="table-dark">
                        <tr>
                            <th>Inquiry No</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Route</th>
                            <th>Vehicle</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredInquiries.length > 0 ? (
                            filteredInquiries.map((i) => (
                                <tr key={i.id}>
                                    <td>{i.inquiryNo}</td>
                                    <td>{i.date}</td>
                                    <td>{i.customer}</td>
                                    <td>{i.from} → {i.to}</td>
                                    <td>{i.vehicle}</td>
                                    <td>{i.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No Data Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <h5>Vendor Quote Report</h5>
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Inquiry No</th>
                            <th>Vendor</th>
                            <th>Amount</th>
                            <th>Transit Days</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredQuotes.length > 0 ? (
                            filteredQuotes.map((q) => (
                                <tr key={q.id}>
                                    <td>{q.inquiryNo}</td>
                                    <td>{q.vendor}</td>
                                    <td>₹{q.amount}</td>
                                    <td>{q.transitDays}</td>
                                    <td>{q.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">No Data Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;