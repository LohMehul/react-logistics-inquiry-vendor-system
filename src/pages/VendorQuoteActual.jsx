import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const ActualVendorQuotes = () => {
  const { vendorQuotes } = useAppContext();

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
  if (vendorQuotes && vendorQuotes.length > 0) {
    const formatted = vendorQuotes.flatMap((item) =>
      item.vendors.map((vendor, index) => ({
        id: `${item.id}-${index}`,
        inquiryNo:
          typeof item.inquiryNo === "object"
            ? item.inquiryNo.inquiryNo
            : item.inquiryNo,
        vendorName: vendor.vendorName,
        quotedAmount: "",
        transitDays: "",
        notes: vendor.remarks || "",
        status: "Pending",
      }))
    );

    setQuotes(formatted);
  }
}, [vendorQuotes]);

  const handleChange = (id, field, value) => {
    const updated = quotes.map((q) =>
      q.id === id ? { ...q, [field]: value } : q
    );
    setQuotes(updated);
  };

  const handleSave = () => {
    console.log("Final Vendor Quotes:", quotes);
    alert("Vendor Quotes Submitted!");
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Actual Vendor Quotes</h3>

      {quotes.length === 0 ? (
        <div className="alert alert-info">No vendor quotes available</div>
      ) : (
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Inquiry No</th>
              <th>Vendor Name</th>
              <th>Quoted Amount (₹)</th>
              <th>Transit Days</th>
              <th>Notes</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {quotes.map((q) => (
              <tr key={q.id}>
                <td>{q.inquiryNo}</td>

                <td>{q.vendorName}</td>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={q.quotedAmount}
                    onChange={(e) =>
                      handleChange(q.id, "quotedAmount", e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={q.transitDays}
                    onChange={(e) =>
                      handleChange(q.id, "transitDays", e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={q.notes}
                    onChange={(e) =>
                      handleChange(q.id, "notes", e.target.value)
                    }
                  />
                </td>

                <td>
                  <select
                    className="form-select"
                    value={q.status}
                    onChange={(e) =>
                      handleChange(q.id, "status", e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Received">Received</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="text-end">
        <button className="btn btn-primary" onClick={handleSave}>
          Save All
        </button>
      </div>
    </div>
  );
};

export default ActualVendorQuotes;