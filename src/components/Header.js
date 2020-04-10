import React from 'react';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="" id="navbarTogglerDemo01">      
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <a class="navbar-brand" href="/">CMESS</a>
          <li class="nav-item">
            <a class="nav-link" href="/check" id="navI">Check My Essay</a>            
          </li>         
          <li class="nav-item">
            <a class="nav-link" href="/correct" id="navI">Improve My Essay</a>            
          </li>          
          <li class="nav-item">
            <a class="nav-link" href="/about" id="navI">About</a>            
          </li>    
        </ul>
      </div>        
      </nav>
      </header>
    </div>
  );
}

export default Header;
