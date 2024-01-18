import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-info shadow">
      <div className="container">
        <NavLink to={`/`} className="navbar-brand">React Context</NavLink>

        <button data-bs-toggle='collapse' data-bs-target='#menu' type='button' className='navbar-toggler'>
          <span className='navbar-toggle-icon'></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/users`} className="nav-link">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/posts`} className="nav-link">Posts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/comments`} className="nav-link">Comments</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar