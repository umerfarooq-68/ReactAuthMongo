import React from 'react'

function Home(){
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">ATRA</a>
      <ul className="navbar-nav me-auto mb-5 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Solutions </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ai Power </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Resources</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
  <div className="container text-center">
  <div className="row">
    <div className="col">
    </div>
    <div className="col">
   <button type="button" class="btn btn-primary btn-lg">GENERATE A CARD</button> 
    </div>
    <div className="col">
    </div>
  </div>
</div>
</>
  )
}
export default Home
