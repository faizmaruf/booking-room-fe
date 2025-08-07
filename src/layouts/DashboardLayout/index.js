import { useState, useEffect, useMemo } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DashboardLayout = ({ children }) => {
  const userProfile = useMemo(() => {
    const dataProfile = localStorage.getItem("userProfile");
    try {
      return dataProfile ? JSON.parse(dataProfile) : null;
    } catch {
      return null;
    }
  }, []);

  return (
    <>
      <div className="page">
        <Sidebar userProfile={userProfile} />
        <Navbar userProfile={userProfile} />
        {children}

        <Footer />
      </div>
    </>
  );
};

export default DashboardLayout;
