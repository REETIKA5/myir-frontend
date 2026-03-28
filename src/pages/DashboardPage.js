import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import StatusCard from "../components/StatusCard";
import QuickActionCard from "../components/QuickActionCard";
import { userData, notifications, quickActions } from "../data/mockData";
import "../styles/dashboard.css";

function DashboardPage() {
  return (
    <main className="dashboard-page">
      <Navbar />

      <section className="dashboard-content">
        <h1>Welcome Back, {userData.name}</h1>
        <p className="dashboard-subtitle">Here's your latest tax summary</p>

        <div className="status-grid">
          <StatusCard
            title="Tax Status"
            amount={userData.refundAmount}
            subtitle={`Expected payment: ${userData.paymentDate}`}
          />
          <StatusCard
            title="Status"
            badge={userData.status}
            description="Your tax return has been processed and approved"
          />
        </div>

        <section className="dashboard-banner">
          <h2>What would you like to do next?</h2>
          <p>
            You have a refund available – check the details and see when you’ll
            receive your payment
          </p>
          <Link to="/tax-overview" className="dashboard-primary-btn">
            View Refund Details →
          </Link>
        </section>

        <section className="dashboard-section quick-actions-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions-grid">
            {quickActions.map((action) => (
              <QuickActionCard
                key={action.title}
                title={action.title}
                path={action.path}
              />
            ))}
          </div>
        </section>

        <section className="dashboard-section notifications-section">
          <h2>Notifications</h2>
          <div className="notification-list">
            {notifications.map((item, index) => (
              <div
                key={item}
                className={`notification-item ${index === 0 ? "active" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default DashboardPage;