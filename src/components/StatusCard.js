import React from "react";

function StatusCard({ title, amount, subtitle, badge, description }) {
  return (
    <section className="card status-card">
      <h3>{title}</h3>

      {amount !== undefined && amount !== null && (
        <h2>${Number(amount).toLocaleString()}.00</h2>
      )}

      {badge && <span className="badge badge--green">{badge}</span>}

      {subtitle && <p className="muted-text">{subtitle}</p>}

      {description && <p className="muted-text">{description}</p>}
    </section>
  );
}

export default StatusCard;