import React from 'react';
import '../styles/Navbar.css';
import { Nav, Navbar} from 'react-bootstrap';
import Auth from '../utils/auth';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
        {Auth.loggedIn() ? (
              <Navbar className="navbar navbar-expand-lg navbar-dark" collapseOnSelect  expand="lg">
              <a onClick={() => handlePageChange('Homepage')}><h1>Media Spot</h1></a>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto d-block">
                <ul>
                <li><Nav.Item>
                  <button className="link" onClick={() => handlePageChange('All')}>
                  All
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => handlePageChange('Albums')}>
                  Albums
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => handlePageChange('Anime')}>
                  Anime
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => handlePageChange('Books')}>
                  Books
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => handlePageChange('Comics')}>
                  Comics
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => handlePageChange('Manga')}>
                  Manga
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => handlePageChange('Movies')}>
                  Movies
                </button></Nav.Item></li>
                  <li><Nav.Item>
                  <button className="link" onClick={() => handlePageChange('Shows')}>
                 Shows
                </button></Nav.Item></li>
                <li><Nav.Item>
                  <button className="link no-border" onClick={() => handlePageChange('Albums')}>
                  Other
                </button></Nav.Item></li>
                <li><Nav.Item>
                  <button className="link" id="newPost" onClick={() => handlePageChange('NewPost')}>
                  New Post +
                </button></Nav.Item></li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          ) : (
            <Navbar className="navbar navbar-expand-lg navbar-dark" collapseOnSelect  expand="lg">
            <a className="navbar-brand" onClick={() => handlePageChange('Homepage')}><h1>Media Spot</h1></a>
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
