import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { userData } from "../data/mockData";
import "../styles/success.css";

function TaxSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const submittedData = location.state || {
    totalIncome: userData.totalIncome,
    workExpenses: userData.deductions,
    taxableIncome: userData.taxableIncome,
  };

  return (
    <main className="page">
      <Navbar />

      <section className="success-page">
        <div className="success-check">✓</div>

        <section className="success-card">
          <div className="success-header">
            <h1>Tax Return Submitted Successfully!</h1>
            <p>Your tax return has been received and is being processed</p>
          </div>

          <div className="success-meta">
            <div>
              <span>Reference Number</span>
              <strong>{userData.referenceNumber}</strong>
            </div>
            <div>
              <span>Submission Date</span>
              <strong>{userData.submissionDate}</strong>
            </div>
          </div>

          <section className="success-summary">
            <h2>Submission Summary</h2>
            <div className="summary-row">
              <span>Total Income</span>
              <strong>${submittedData.totalIncome.toLocaleString()}.00</strong>
            </div>
            <div className="summary-row">
              <span>Deductions</span>
              <strong>-${submittedData.workExpenses.toLocaleString()}.00</strong>
            </div>
          </section>

          <div className="taxable-income-bar">
            <span>Taxable Income</span>
            <strong>${submittedData.taxableIncome.toLocaleString()}.00</strong>
          </div>

          <section className="next-steps-card">
            <h2>What happens next?</h2>
            <ul className="plain-list">
              <li>Review within 5–10 days</li>
              <li>Email confirmation and assessment</li>
              <li>Refund processed automatically</li>
            </ul>
          </section>

          <div className="success-actions">
            <button className="primary-btn" onClick={() => navigate("/dashboard")}>
              Return to Dashboard
            </button>
          </div>

          <p className="success-footer">
            Keep your reference number <strong>{userData.referenceNumber}</strong> for your records
          </p>
        </section>
      </section>
    </main>
  );
}

export default TaxSuccessPage;