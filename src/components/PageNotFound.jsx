import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card text-center shadow p-4" style={{ maxWidth: "400px" }}>
        
        <h1 className="display-1 text-warning fw-bold">404</h1>

        <h3 className="mb-3">Route Not Found</h3>

        <p className="text-muted">
          The shipment route you're trying to access is unavailable or may have been moved.
        </p>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/")}
        >
          Go to Dashboard
        </button>

      </div>
    </div>
  );
};

export default PageNotFound;