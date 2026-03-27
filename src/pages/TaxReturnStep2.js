import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationCircle,
  FaDollarSign,
  FaPen,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import "../styles/tax-review.css";

function TaxReturnStep2() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [confirmed, setConfirmed] = useState(false);

  const data = useMemo(() => {
    return {
      annualIncome: state?.annualIncome || 0,
      otherIncome: state?.otherIncome || 0,
      workExpenses: state?.workExpenses || 0,
      totalIncome:
        state?.totalIncome ??
        (Number(state?.annualIncome || 0) + Number(state?.otherIncome || 0)),
      totalDeductions:
        state?.totalDeductions ?? Number(state?.workExpenses || 0),
      taxableIncome:
        state?.taxableIncome ??
        Math.max(
          (Number(state?.annualIncome || 0) + Number(state?.otherIncome || 0)) -
            Number(state?.workExpenses || 0),
          0
        ),
    };
  }, [state]);

  const formatCurrency = (value) =>
    Number(value || 0).toLocaleString("en-NZ", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const handleBackToEdit = () => {
    navigate("/tax-return");
  };

  const handleSubmit = () => {
    if (!confirmed) return;

    navigate("//tax-success", {
      state: {
        ...data,
      },
    });
  };

  return (
    <main className="page">
      <Navbar />

      <section className="page-content tax-review-page">
        <button
          type="button"
          className="text-link-btn back-btn"
          onClick={handleBackToEdit}
        >
          <FaArrowLeft /> Back to Edit
        </button>

        <h1>Review &amp; Submit</h1>
        <p className="muted-text review-subtitle">
          Please review your information carefully before submitting
        </p>

        <div className="stepper custom-stepper review-stepper">
          <div className="step step-inline completed">
            <div className="circle success">
              <FaCheckCircle />
            </div>
            <span>Enter Details</span>
          </div>

          <div className="progress-line green-line"></div>

          <div className="step step-inline active">
            <div className="circle">2</div>
            <span>Review &amp; Submit</span>
          </div>

          <div className="progress-line blue-line"></div>
        </div>

        <section className="warning-banner">
          <div className="warning-icon">
            <FaExclamationCircle />
          </div>
          <div>
            <h3>Please review carefully</h3>
            <p>
              Make sure all information is correct. You can go back to edit if
              needed.
            </p>
          </div>
        </section>

        <div className="review-layout">
          <section className="review-card info-card">
            <div className="card-top">
              <div>
                <h2>Your Tax Information</h2>
              </div>

              <button
                type="button"
                className="edit-btn"
                onClick={handleBackToEdit}
              >
                <FaPen />
                Edit Details
              </button>
            </div>

            <div className="info-section">
              <div className="info-heading">
                <div className="mini-icon blue">
                  <FaDollarSign />
                </div>
                <h3>Income</h3>
              </div>

              <div className="info-row">
                <div>
                  <span className="label">Annual Income</span>
                  <strong>${formatCurrency(data.annualIncome)}</strong>
                </div>
                <span className="tag primary">Primary</span>
              </div>

              <div className="info-row">
                <div>
                  <span className="label">Other Income</span>
                  <strong>${formatCurrency(data.otherIncome)}</strong>
                </div>
                <span className="tag secondary">Additional</span>
              </div>

              <div className="info-row total-row">
                <div>
                  <span className="label">Total Income</span>
                </div>
                <strong className="amount-positive">
                  ${formatCurrency(data.totalIncome)}
                </strong>
              </div>
            </div>

            <div className="info-section">
              <div className="info-heading">
                <div className="mini-icon green">↘</div>
                <h3>Deductions</h3>
              </div>

              <div className="info-row">
                <div>
                  <span className="label">Work-Related Expenses</span>
                  <strong>${formatCurrency(data.workExpenses)}</strong>
                </div>
                <span className="tag deductible">Deductible</span>
              </div>
            </div>
          </section>

          <aside className="review-sidebar">
            <section className="taxable-card">
              <span className="taxable-label">Taxable Income</span>
              <h2>${formatCurrency(data.taxableIncome)}</h2>

              <div className="taxable-breakdown">
                <div className="breakdown-row">
                  <span>Total Income</span>
                  <strong>${formatCurrency(data.totalIncome)}</strong>
                </div>
                <div className="breakdown-row">
                  <span>Deductions</span>
                  <strong>- ${formatCurrency(data.totalDeductions)}</strong>
                </div>
              </div>
            </section>

            <section className="next-card">
              <h3>What happens next?</h3>
              <ul>
                <li>
                  <FaFileAlt /> Review within 5–10 days
                </li>
                <li>
                  <FaEnvelope /> Email with assessment
                </li>
                <li>
                  <FaCheckCircle /> Refund processed automatically
                </li>
              </ul>
            </section>
          </aside>
        </div>

        <section className="confirm-card">
          <label className="confirm-label">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
            />
            <span>I confirm that the information provided is correct</span>
          </label>
          <p>
            By checking this, you declare all information is accurate. Providing
            false information may result in penalties.
          </p>
        </section>

        <div className="review-actions">
          <button
            type="button"
            className="secondary-btn"
            onClick={handleBackToEdit}
          >
            ← Back to Edit
          </button>

          <button
            type="button"
            className="primary-btn submit-btn"
            onClick={handleSubmit}
            disabled={!confirmed}
          >
            Submit Return
          </button>
        </div>
      </section>
    </main>
  );
}

export default TaxReturnStep2;