import React from "react";
import { Link } from "react-router-dom";
import { FaDollarSign, FaInfoCircle, FaFileAlt, FaArrowUp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { userData } from "../data/mockData";
import "../styles/tax-overview.css";

function TaxOverviewPage() {
  return (
    <main className="page">
      <Navbar />

      <section className="page-content tax-overview-page">
        <h1>Tax Overview</h1>
        <p className="muted-text">View your income, tax paid, and refund status</p>

        <section className="refund-hero">
          <div className="refund-hero__left">
            <h2>Your Tax Refund</h2>
            <div className="refund-amount">${userData.refundAmount.toLocaleString()}.00</div>
            <span className="badge badge--orange">Processing</span>
            <p className="refund-date">
              Expected payment date: <strong>{userData.paymentDate}</strong>
            </p>
          </div>

          <div className="refund-hero__icon">
            <FaDollarSign />
          </div>
        </section>

        <div className="tax-overview-grid">
          <section className="overview-card">
            <div className="overview-card__header">
              <h3>Tax Summary</h3>
              <div className="overview-mini-icon">
                <FaFileAlt />
              </div>
            </div>

            <div className="overview-row">
              <span>Total Income</span>
              <strong>$65,500.00</strong>
            </div>
            <div className="overview-row">
              <span>Total Tax Paid</span>
              <strong>$12,850.00</strong>
            </div>
            <div className="overview-row no-border">
              <span>Tax year 2025/2026</span>
            </div>
          </section>

          <section className="overview-card">
            <div className="overview-card__header">
              <h3>Refund Details</h3>
              <div className="overview-mini-icon green">
                <FaArrowUp />
              </div>
            </div>

            <div className="overview-row">
              <span>Refund Amount</span>
              <strong className="text-green">${userData.refundAmount.toLocaleString()}.00</strong>
            </div>
            <div className="overview-row">
              <span>Status</span>
              <strong className="text-orange">Processing</strong>
            </div>
            <div className="overview-row no-border">
              <span>Payment Date</span>
              <strong>{userData.paymentDate}</strong>
            </div>
          </section>
        </div>

        <section className="about-refund-card">
          <div className="about-refund-icon">
            <FaInfoCircle />
          </div>
          <div>
            <h3>About Your Refund</h3>
            <p>
              Your refund is being processed. You can expect payment on{" "}
              <strong>{userData.paymentDate}</strong>. If you have any questions or need
              to update your bank details, please contact us or update your information
              in your profile.
            </p>
          </div>
        </section>

        <section className="next-action-card">
          <h2>What would you like to do next?</h2>

          <div className="next-action-buttons">
            <Link to="/tax-return" className="primary-btn next-btn">
              <FaFileAlt />
              <span>Submit Tax Return</span>
            </Link>

            <Link to="/dashboard" className="secondary-outline-btn next-btn">
              ← Back to Dashboard
            </Link>
          </div>
        </section>

        <p className="footer-help">
          Need Help ? <strong>Contact Support</strong> or View our <strong>Tax Guide</strong>
        </p>
      </section>
    </main>
  );
}

export default TaxOverviewPage;