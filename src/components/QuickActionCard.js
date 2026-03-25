import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaUpload, FaUserEdit } from "react-icons/fa";

function QuickActionCard({ title, path }) {
  const getIcon = () => {
    if (title === "Check Tax Overview") return <FaEye />;
    if (title === "Submit Tax Return") return <FaUpload />;
    if (title === "Update Personal Info") return <FaUserEdit />;
    return null;
  };

  return (
    <Link to={path} className="quick-action-card">
      <div className="quick-action-icon">{getIcon()}</div>
      <p>{title}</p>
    </Link>
  );
}

export default QuickActionCard;