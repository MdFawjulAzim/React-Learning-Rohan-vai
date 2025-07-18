import React from "react";

function FooterDashboard() {
  return (
    <footer className="bg-white shadow-inner text-center py-3 text-sm text-gray-500 mt-auto">
      © {new Date().getFullYear()} Fawjul | All rights reserved.
    </footer>
  );
}

export default FooterDashboard;
