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
            <a class="nav-link" href="/create">Check Essay</a>            
          </li>                  
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>            
          </li>    
        </ul>
      </div>        
      </nav>
      </header>
    </div>
  );
}

export default Header;
