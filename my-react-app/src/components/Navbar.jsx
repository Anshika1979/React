import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>  
      </ul>
      <div className="d-flex">  
        <div className="bg-primary rounded mx-2" onClick={()=>{props.setThemeColor('primary')}} style={{height:'30px', width:'30px' ,cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.setThemeColor('success')}} style={{height:'30px', width:'30px' ,cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.setThemeColor('danger')}} style={{height:'30px', width:'30px' ,cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.setThemeColor('warning')}} style={{height:'30px', width:'30px' ,cursor:'pointer'}}></div>
    </div>
  </div>
      <div className={`form-check form-switch m-2 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode}  id="switchCheckDefault"></input>
  <label className="form-check-label" htmlFor="switchCheckDefault">Toggle Mode</label>
</div>
</div>
</nav>
  )
}

