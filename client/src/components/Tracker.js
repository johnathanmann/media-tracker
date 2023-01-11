import React, { useState, useEffect } from "react";
import NavTabs from "./NavTabs";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Planner from "./pages/PostCreate";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import "../styles/styles.css"

export default function Tracker() {
  const [currentPage, setCurrentPage] = useState("Homepage");

  const renderPage = () => {
    if (currentPage === "Homepage") {
      return <Homepage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Planner") {
      return <Planner />
    }
    if (currentPage === "Posts") {
      return <Posts />;
    }
    if (currentPage === "Albums") {
      return <Albums />;
    }
  };

  useEffect(() => {
    document.title = "Media Tracker";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}