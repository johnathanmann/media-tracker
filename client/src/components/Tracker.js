import React, { useState, useEffect } from "react";
import NavTabs from "./NavTabs";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Planner from "./pages/PostCreate";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Animes from "./pages/Animes";
import Books from "./pages/Books";
import Comics from "./pages/Comics";
import Games from "./pages/Games";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import Other from "./pages/Other";
import "../styles/styles.css"

export default function Tracker() {
  const [currentPage, setCurrentPage] = useState("Homepage");

  const renderPage = () => {
    if (currentPage === "Homepage") {
      return  <Homepage handlePageChange={handlePageChange} />;
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
    if (currentPage === "Animes") {
      return <Animes />;
    }
    if (currentPage === "Books") {
      return <Books />;
    }
    if (currentPage === "Comics") {
      return <Comics />;
    }
    if (currentPage === "Games") {
      return <Games />;
    }
    if (currentPage === "Movies") {
      return <Movies />;
    }
    if (currentPage === "Shows") {
      return <Shows />;
    }
    if (currentPage === "Other") {
      return <Other />;
    }
  };

  useEffect(() => {
    document.title = "Media Tracker";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div id="body">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}