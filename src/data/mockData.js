export const userData = {
  name: "User",
  refundAmount: 1250,
  paymentDate: "5 April 2026",
  status: "Refund available",
  annualIncome: 65000,
  otherIncome: 5000,
  deductions: 3500,
  totalIncome: 70000,
  taxableIncome: 66500,
  referenceNumber: "TR-2024-076192",
  submissionDate: "26 March 2026",
};

export const notifications = [
  "Your tax return has been processed",
  "Reminder: Update your personal information",
];

export const quickActions = [
  {
    title: "Check Tax Overview",
    path: "/tax-overview",
  },
  {
    title: "Submit Tax Return",
    path: "/tax-return",
  },
  {
    title: "Update Personal Info",
    path: "/update-profile",
  }
];