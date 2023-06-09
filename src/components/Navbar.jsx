import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const allUsers = useSelector((state)=>state.app.users)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Todo's</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Create Todo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/read">All Todo's({allUsers.length})</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/login">Login</Link>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success" type="submit">Logout</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
