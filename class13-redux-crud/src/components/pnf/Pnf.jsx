import React from 'react'
import { NavLink } from 'react-router-dom'

const Pnf = () => {
  return (
    <div className="container my-5">
      <div className="row">
            <div className="col text-center">
                  <h1 className="text-danger">Page Not Found</h1>
                  <NavLink to={`/`} className="btn btn-warning shadow my-3">Back To Home</NavLink>
            </div>
      </div>
    </div>
  )
}

export default Pnf