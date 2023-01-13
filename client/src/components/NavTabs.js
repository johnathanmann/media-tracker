import React from 'react';
import '../styles/Navbar.css';
import { Nav, Navbar} from 'react-bootstrap';
import Auth from '../utils/auth';

function NavTabs({ currentPage, handlePageChange }) {
  window.addEventListener("load", (event) => {
    document.body.style.background = '#2d2d2d';
  });
  function pageChange(page, color) {
    handlePageChange(page);
    document.body.style.background = color;
 }
  return (
    <div>
        {Auth.loggedIn() ? (
              <Navbar className="navbar navbar-expand-lg navbar-dark" collapseOnSelect  expand="lg">
              <a onClick={() => pageChange('Homepage', '#2d2d2d')}><h1>Media Query</h1></a>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto d-block">
                <ul>
                <li><Nav.Item>
                  <button className="link" onClick={() => pageChange('Posts', '#2d2d2d')}>
                  All
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => pageChange('Albums', '#e3324e')}>
                  Albums
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => pageChange('Animes', '#ea8a58')}>
                  Anime
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => pageChange('Books', '#eaab3f')}>
                  Books
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => pageChange('Comics', '#8ab560')}>
                  Comics/Manga
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => pageChange('Movies', '#427d9e')}>
                  Movies
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => pageChange('Shows', '#89629f')}>
                 Shows
                </button></Nav.Item></li>
                <li><Nav.Item>
                  <button className="link" onClick={() => pageChange('Games', '#b639ae')}>
                  Games
                </button></Nav.Item></li>
                <li><Nav.Item>
                  <button className="link" onClick={() => pageChange('Other', '#da4c88')}>
                  Other
                </button></Nav.Item></li>
                <li><Nav.Item>
                  <button className="link no-border" onClick={() => pageChange('Stats', '#2d2d2d')}>
                  Stats
                </button></Nav.Item></li>
                <li><Nav.Item>
                  <button className="link" id="newPost" onClick={() => pageChange('PostCreate', '#2d2d2d')}>
                  New Post + 
                </button></Nav.Item></li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          ) : (
            <Navbar className="navbar navbar-expand-lg navbar-dark" collapseOnSelect  expand="lg">
            <a className="navbar-brand" onClick={() => handlePageChange('Homepage')}><h1>Media Query</h1></a>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto d-block">
              <ul>
                <li>
                <Nav.Item>
                <button className="link no-border" onClick={() => handlePageChange('Login')}>
                 Login / Sign-up
                </button>
              </Nav.Item>
              </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          )}
        </div>
  );
}

export default NavTabs;
