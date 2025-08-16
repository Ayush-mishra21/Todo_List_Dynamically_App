import React from 'react';

export default function Header() {
  return (
    <div id="header-container">
      <nav id="main-navbar">
        <a id="navbar-brand" href="/">Navbar</a>

        <button id="navbar-toggle" type="button">
          <span id="toggle-icon">☰</span>
        </button>

        <div id="navbar-content">
          <ul id="nav-links">
            <li id="nav-home">
              <a href="/">Home</a>
            </li>
            <li id="nav-link">
              <a href="/">Link</a>
            </li>
            <li id="nav-dropdown">
              <a href="/" id="dropdown-toggle">Dropdown</a>
              <div id="dropdown-menu">
                <a href="/">Action</a>
                <a href="/">Another action</a>
                <hr id="dropdown-divider" />
                <a href="/">Something else here</a>
              </div>
            </li>
            <li id="nav-disabled">
              <a href="/">Disabled</a>
            </li>
          </ul>

          <form id="search-form">
            <input id="search-input" type="search" placeholder="Search" />
            <button id="search-button" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}
