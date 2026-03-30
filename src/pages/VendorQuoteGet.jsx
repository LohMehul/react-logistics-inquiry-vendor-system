import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const VendorQuotes = () => {

  const { inquiries, addVendorQuote } = useAppContext();

  const [inquiryNo, setInquiryNo] = useState(inquiries);
  const [vendorList, setVendorList] = useState([
    { vendorName: "", expectedRate: "", remarks: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...vendorList];
    updated[index][field] = value;
    setVendorList(updated);
  };

  const addRow = () => {
    setVendorList([
      ...vendorList,
      { vendorName: "", expectedRate: "", remarks: "" },
    ]);
  };

  const removeRow = (index) => {
    const updated = vendorList.filter((_, i) => i !== index);
    setVendorList(updated);
  };
  
  const handleSubmit = () => {
    const payload = {
      inquiryNo,
      vendors: vendorList,
    };
    
    console.log("Saved Data:", payload);
    addVendorQuote(payload);
    alert("Vendor Quote Requests Saved!");
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Vendor Quote Request</h3>

      <div className="mb-3">
        <label className="form-label">Inquiry No</label>

        <select
          className="form-select"
          value={inquiryNo}
          onChange={(e) => setInquiryNo(e.target.value)}
        >
          <option value="">-- Select Inquiry --</option>

          {inquiries.map((inq) => (
            <option key={inq.id} value={inq.inquiryNo}>
              {inq.inquiryNo}
            </option>
          ))}
        </select>
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Vendor Name</th>
            <th>Expected Rate (₹)</th>
            <th>Remarks</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {vendorList.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={item.vendorName}
                  onChange={(e) =>
                    handleChange(index, "vendorName", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  className="form-control"
                  value={item.expectedRate}
                  onChange={(e) =>
                    handleChange(index, "expectedRate", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="text"
                  className="form-control"
                  value={item.remarks}
                  onChange={(e) =>
                    handleChange(index, "remarks", e.target.value)
                  }
                />
              </td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeRow(index)}
                  disabled={vendorList.length === 1}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={addRow}>
          + Add Vendor
        </button>

        <button className="btn btn-primary" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default VendorQuotes;