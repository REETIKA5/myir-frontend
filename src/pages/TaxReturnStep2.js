import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/tax-return.css";

function TaxReturnStep2() {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state || {
    annualIncome: 65000,
    otherIncome: 5000,
    workExpenses: 3500,
    totalIncome: 70000,
    taxableIncome: 66500,
  };

  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = () => {
    if (!confirmed) {
      alert("Please confirm the information before submitting.");
      return;
    }

    navigate("/tax-success", {
      state: {
        totalIncome: data.totalIncome,
        workExpenses: data.workExpenses,
        taxableIncome: data.taxableIncome,
      },
    });
  };

  return (
    <main className="page">
      <Navbar />

      <section className="page-content">
        <button className="text-link-btn" onClick={() => navigate("/tax-return")}>
          ← Back to Edit
        </button>

        <h1>Review & Submit</h1>
        <p className="muted-text">Please review your information carefully before submitting</p>

        <div className="progress-bar-wrap">
          <div className="progress-step complete">1 Enter Details</div>
          <div className="progress-step active">2 Review & Submit</div>
        </div>

        <section className="warning-banner">
          <h3>Please review carefully</h3>
          <p>Make sure all information is correct. You can go back to edit if needed.</p>
        </section>

        <div className="review-layout">
          <section className="card">
            <div className="section-header-row">
              <h2>Your Tax Information</h2>
              <button className="small-btn" onClick={() => navigate("/tax-return")}>
                Edit Details
              </button>
            </div>

            <div className="review-block">
              <h3>Income</h3>
              <div className="summary-row">
                <span>Annual Income</span>
                <strong>${Number(data.annualIncome).toLocaleString()}.00</strong>
              </div>
              <div className="summary-row">
                <span>Other Income</span>
                <strong>${Number(data.otherIncome).toLocaleString()}.00</strong>
              </div>
              <div className="summary-row total-row">
                <span>Total Income</span>
                <strong>${Number(data.totalIncome).toLocaleString()}.00</strong>
              </div>
            </div>

            <div className="review-block">
              <h3>Deductions</h3>
              <div className="summary-row">
                <span>Work-Related Expenses</span>
                <strong>${Number(data.workExpenses).toLocaleString()}.00</strong>
              </div>
            </div>
          </section>

          <aside>
            <section className="summary-box-dark">
              <h3>Taxable Income</h3>
              <div className="taxable-big">
                ${Number(data.taxableIncome).toLocaleString()}.00
              </div>
              <div className="summary-row light-text">
                <span>Total Income</span>
                <strong>${Number(data.totalIncome).toLocaleString()}.00</strong>
              </div>
              <div className="summary-row light-text">
                <span>Deductions</span>
                <strong>-${Number(data.workExpenses).toLocaleString()}.00</strong>
              </div>
            </section>

            <section className="card">
              <h3>What happens next?</h3>
              <ul className="plain-list">
                <li>Review within 5–10 days</li>
                <li>Email with assessment</li>
                <li>Refund processed automatically</li>
              </ul>
            </section>
          </aside>
        </div>

        <section className="confirm-card">
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
            />
            <span>I confirm that the information provided is correct</span>
          </label>
          <p className="muted-text">
            By checking this, you declare all information is accurate. Providing false information may
            result in penalties.
          </p>
        </section>

        <div className="action-row">
          <button className="secondary-outline-btn" onClick={() => navigate("/tax-return")}>
            ← Back to Edit
          </button>
          <button className="primary-btn" onClick={handleSubmit}>
            Submit Return
          </button>
        </div>
      </section>
    </main>
  );
}

export default TaxReturnStep2;