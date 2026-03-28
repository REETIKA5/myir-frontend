import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FormField from "../components/FormField";
import { FaUser, FaUniversity, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/update-profile.css";

function UpdateProfilePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    bankAccount: "12-3456-7890123-00",
    address: "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setSaved(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <main className="page">
      <Navbar />

      <section className="page-content update-profile-page">
        <button className="text-link-btn" onClick={() => navigate("/dashboard")}>
          ← Back to Dashboard
        </button>

        <section className="profile-wrapper">
          <div className="profile-header">
            <h1>Update Personal Details</h1>
            <p>Keep your information up to date for accurate tax records</p>
          </div>

          <form className="profile-form" onSubmit={handleSave}>
            <section className="profile-section profile-section--personal">
              <h2 className="profile-section-title">
                <span className="profile-section-icon personal">
                  <FaUser />
                </span>
                Personal Information
              </h2>

              <FormField
                id="fullName"
                name="fullName"
                label="Full Name"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                helperText="Make sure your name matches official records"
              />

              <FormField
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                helperText="We'll send important tax updates to this email"
              />

              <FormField
                id="phone"
                name="phone"
                label="Phone Number"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                helperText="For verification"
              />
            </section>

            <section className="profile-section profile-section--banking">
              <h2 className="profile-section-title">
                <span className="profile-section-icon banking">
                  <FaUniversity />
                </span>
                Banking Details
              </h2>

              <FormField
                id="bankAccount"
                name="bankAccount"
                label="Bank Account Number"
                value={form.bankAccount}
                onChange={handleChange}
                placeholder="12-3456-7890123-00"
                helperText="Your bank account is used for tax refunds."
              />
            </section>

            <section className="profile-section profile-section--address">
              <h2 className="profile-section-title">
                <span className="profile-section-icon address">
                  <FaMapMarkerAlt />
                </span>
                Address Information
              </h2>

              <FormField
                id="address"
                name="address"
                label="Residential Address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
              />
            </section>

            <section className="profile-note">
              <h3>Keep your details accurate</h3>
              <p>
                Accurate information ensures timely tax refunds and prevents processing delays.
              </p>
            </section>

            <div className="profile-actions">
              <button type="button" className="secondary-btn" onClick={() => navigate("/dashboard")}>
                × Cancel
              </button>

              <button type="submit" className={`primary-btn ${saved ? "saved-btn" : ""}`}>
                {saved ? "Saved ✓" : "Save Changes"}
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

export default UpdateProfilePage;
