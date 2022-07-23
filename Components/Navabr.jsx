import React from 'react'
import { Link } from "react-router-dom"
function Navabr() {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Kgs</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link  to="/">Home</Link></li>
      <li tabindex="0">
        <Link to="/about">
           About
      
        </Link>
       
      </li>
      <li><Link  to="/contect">Contact</Link></li>
    </ul>
  </div>
</div>


    </div>
  )
}

export default Navabr
