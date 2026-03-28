import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle, FaDollarSign } from "react-icons/fa";
import Navbar from "../components/Navbar";
import "../styles/tax-return.css";

function TaxReturnStep1() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    annualIncome: "",
    otherIncome: "",
    workExpenses: "",
  });

  const [errors, setErrors] = useState({});

  const formatCurrency = (value) => {
    return Number(value || 0).toLocaleString("en-NZ", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value === "" || Number(value) >= 0) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const totalIncome =
    (Number(formData.annualIncome) || 0) + (Number(formData.otherIncome) || 0);

  const totalDeductions = Number(formData.workExpenses) || 0;
  const taxableIncome = Math.max(totalIncome - totalDeductions, 0);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.annualIncome || Number(formData.annualIncome) <= 0) {
      newErrors.annualIncome = "Please enter your annual income.";
    }

    if (Number(formData.otherIncome) < 0) {
      newErrors.otherIncome = "Other income cannot be negative.";
    }

    if (Number(formData.workExpenses) < 0) {
      newErrors.workExpenses = "Work-related expenses cannot be negative.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!validateForm()) return;

    navigate("/tax-return/review", {
      state: {
        annualIncome: Number(formData.annualIncome) || 0,
        otherIncome: Number(formData.otherIncome) || 0,
        workExpenses: Number(formData.workExpenses) || 0,
        totalIncome,
        totalDeductions,
        taxableIncome,
      },
    });
  };

  return (
    <main className="page">
      <Navbar />

      <section className="page-content tax-return-page">
        <button
          type="button"
          className="text-link-btn back-btn"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>

        <h1>Submit Tax Return</h1>
        <p className="muted-text tax-subtitle">
          Complete the form below to submit your tax return for 2025/2026
        </p>

        <div className="stepper custom-stepper">
          <div className="step step-inline active">
            <div className="circle">1</div>
            <span>Enter Details</span>
          </div>

          <div className="progress-line blue-line"></div>

          <div className="step step-inline">
            <div className="circle">2</div>
            <span>Review &amp; Submit</span>
          </div>

          <div className="progress-line grey-line"></div>
        </div>

        <section className="tip-banner">
          <div className="tip-icon">
            <FaInfoCircle />
          </div>
          <div>
            <h3>Don&apos;t worry about making mistakes</h3>
            <p>
              You can review and edit these details in the next step before
              submitting.
            </p>
          </div>
        </section>

        <div className="tax-form-layout">
          <div className="tax-form-left">
            <section className="tax-card">
              <div className="section-heading">
                <div className="section-icon blue">
                  <FaDollarSign />
                </div>
                <div>
                  <h2>Income Information</h2>
                  <p>Enter all sources of income</p>
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="annualIncome">
                  Annual Income <span className="required">*</span>
                </label>
                <div className="field-helper">
                  Your total annual income before tax
                </div>
                <div
                  className={`money-input ${
                    errors.annualIncome ? "input-error" : ""
                  }`}
                >
                  <span>$</span>
                  <input
                    id="annualIncome"
                    name="annualIncome"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="65000.00"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    aria-invalid={!!errors.annualIncome}
                    aria-describedby="annualIncomeError"
                  />
                </div>
                {errors.annualIncome && (
                  <small id="annualIncomeError" className="error-text">
                    {errors.annualIncome}
                  </small>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="otherIncome">Other Income</label>
                <div className="field-helper">
                  Additional income from investments or rentals
                </div>
                <div
                  className={`money-input ${
                    errors.otherIncome ? "input-error" : ""
                  }`}
                >
                  <span>$</span>
                  <input
                    id="otherIncome"
                    name="otherIncome"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.otherIncome}
                    onChange={handleChange}
                    aria-invalid={!!errors.otherIncome}
                  />
                </div>
                {errors.otherIncome && (
                  <small className="error-text">{errors.otherIncome}</small>
                )}
              </div>
            </section>

            <section className="tax-card">
              <div className="section-heading">
                <div className="section-icon green">$</div>
                <div>
                  <h2>Deductions</h2>
                  <p>Claim eligible expenses</p>
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="workExpenses">Work-Related Expenses</label>
                <div className="field-helper">
                  Expenses related to work or donations
                </div>
                <div
                  className={`money-input ${
                    errors.workExpenses ? "input-error" : ""
                  }`}
                >
                  <span>$</span>
                  <input
                    id="workExpenses"
                    name="workExpenses"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.workExpenses}
                    onChange={handleChange}
                    aria-invalid={!!errors.workExpenses}
                  />
                </div>
                {errors.workExpenses && (
                  <small className="error-text">{errors.workExpenses}</small>
                )}
              </div>
            </section>
          </div>

          <aside className="tax-form-right">
            <section className="summary-card">
              <h3>Summary</h3>

              <div className="summary-box">
                <span>Total Income</span>
                <strong>${formatCurrency(totalIncome)}</strong>
              </div>

              <div className="summary-box">
                <span>Total Deductions</span>
                <strong>${formatCurrency(totalDeductions)}</strong>
              </div>

              <div className="summary-box large">
                <span>Taxable Income</span>
                <strong>${formatCurrency(taxableIncome)}</strong>
              </div>

              <div className="summary-note">ⓘ This is an estimate only</div>
            </section>

            <section className="help-card">
              <h3>Need Help?</h3>
              <p>Click the information icons for guidance and tips.</p>
              <a href="/tax-guide">View Tax Guide →</a>
            </section>
          </aside>
        </div>

        <div className="continue-wrap">
          <button
            type="button"
            className="primary-btn continue-btn"
            onClick={handleContinue}
          >
            Continue to Review →
          </button>
        </div>
      </section>
    </main>
  );
  
}
export default TaxReturnStep1;