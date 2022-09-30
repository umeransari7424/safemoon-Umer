import React from 'react'

function Header() {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg">
  <div className="container p-3">
    <a className="navbar-brand navlogo" href="/">
        <img src="Assets/safemoon.png" width={"50px"} alt="SafeMoon" />
    </a>
    <button className="navbar-toggler navbuttonlogo" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> </span>
     
    </button>
    </div>
    <div className='container'>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/"><b>Home</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/"> <b>Our Team</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/"><b>Swap</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/"><b>Product</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/"><b>Merch</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/"><b>Partners</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/"><b>Markets</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/"><b>How to Buy</b></a>
        </li>
      </ul>
    </div>
    </div>
  
</nav>
       
    </div>
  )
}

export default Header