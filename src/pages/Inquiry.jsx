import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

const InquiryForm = () => {
    const { addInquiry } = useAppContext();
    const [count, setCount] = useState(0);

    const [formData, setFormData] = useState({
        inquiryNo: "",
        date: "",
        customerName: "",
        fromLocation: "",
        toLocation: "",
        vehicleType: "",
        materialType: "",
        weight: "",
        notes: "",
        status:"Pending",
    });

    useEffect(() => {
        const randomNo = "INQ-" + Math.floor(10000 + Math.random() * 90000);
        setFormData((prev) => ({ ...prev, inquiryNo: randomNo }));
    }, [count]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("Form Data:", formData);
        addInquiry(formData);
        setCount(prev => prev + 1);
        setFormData({
            inquiryNo: "",
            date: "",
            customerName: "",
            fromLocation: "",
            toLocation: "",
            vehicleType: "",
            materialType: "",
            weight: "",
            notes: "",
        });
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-4">Create Inquiry</h3>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Inquiry No</label>
                        <input
                            type="text"
                            className="form-control"
                            name="inquiryNo"
                            value={formData.inquiryNo}
                            disabled
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Customer Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">From Location</label>
                        <input
                            type="text"
                            className="form-control"
                            name="fromLocation"
                            value={formData.fromLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">To Location</label>
                        <input
                            type="text"
                            className="form-control"
                            name="toLocation"
                            value={formData.toLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Vehicle Type</label>
                        <select
                            className="form-select"
                            name="vehicleType"
                            value={formData.vehicleType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Vehicle</option>
                            <option value="Truck">Truck</option>
                            <option value="Mini Truck">Mini Truck</option>
                            <option value="Tempo">Tempo</option>
                            <option value="Container">Container</option>
                        </select>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Material Type</label>
                        <input
                            type="text"
                            className="form-control"
                            name="materialType"
                            value={formData.materialType}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Weight (KG)</label>
                        <input
                            type="number"
                            className="form-control"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-12 mb-3">
                        <label className="form-label">Notes</label>
                        <textarea
                            className="form-control"
                            name="notes"
                            rows="3"
                            value={formData.notes}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit Inquiry
                </button>
            </form>
        </div>
    );
};

export default InquiryForm;