import React from "react";
import Inquiries from "../Data/Inquiry.json"
import VendorQuotes from "../Data/Inquiry.json"
const Dashboard = () => {

    const totalInquiries = Inquiries.length;

    const pendingQuotes = VendorQuotes.filter(
        (q) => q.status === "Pending"
    ).length;

    const approvedQuotes = VendorQuotes.filter(
        (q) => q.status === "Approved"
    ).length;

    const uniqueVendors = [
        ...new Set(VendorQuotes.map((q) => q.vendor)),
    ];
    const vendorCount = uniqueVendors.length;

    return (
        <div className="container mt-4">
            <h3 className="mb-4">Dashboard</h3>

            <div className="row">
                <div className="col-md-3 mb-3">
                    <div className="card text-white bg-primary h-100">
                        <div className="card-body">
                            <h5 className="card-title">Total Inquiries</h5>
                            <h2>{totalInquiries}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <h5 className="card-title">Pending Quotes</h5>
                            <h2>{pendingQuotes}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div className="card text-white bg-success h-100">
                        <div className="card-body">
                            <h5 className="card-title">Approved Quotes</h5>
                            <h2>{approvedQuotes}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div className="card text-white bg-dark h-100">
                        <div className="card-body">
                            <h5 className="card-title">Vendors Count</h5>
                            <h2>{vendorCount}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;