import React from 'react'

function Topbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex flex-wrap justify-content-end align-items-center gap-3 topbar">
          <a href="">Events</a>
          <a href="">Contact</a>
          <ul className="navbar-nav d-flex flex-lg-row gap-4 me-3">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                ENG
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">HIN</a></li>
                <li><a className="dropdown-item" href="#">TAM</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Topbar