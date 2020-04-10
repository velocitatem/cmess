import React from 'react';
import $ from "jquery"

$(document).ready(function(){
})

function Welcome() {
  return (
    <div className="App">        
                 <div class="headIMG">
            <center>
              <h1 id="titleSPAN">CMESS</h1>
            </center>
          </div> 
      <div class="container">
      <div>
        </div>    
      <div class="row" id="span1">
        <div class="col-sm-12" >
              <h3>
                <tp>Improve your essays in a matter of minutes!</tp>
              </h3>
        </div>
      </div>
      <div class="row" id="span2">
        <div class="col-sm-7">
          <img alt="stp" id="TPimg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F52%2FDocument-passed.svg%2F462px-Document-passed.svg.png&f=1&nofb=1"></img>
        </div>
        <div class="col-sm-5">
        <p id="about2">
        <h4 id="whatDo">What does CMESS do?</h4>
        <p>
          <ul>
            <li>
              Word usage/abuse check
            </li>
            <li>
              Informal Language Detector
            </li>
            <li>
              Plagorism Detection - coming soon
            </li>
          </ul>
          <a href="/check" >TRY NOW</a>
        </p>
        </p>

        </div>
      </div>
      </div>
    </div>
  );
}

export default Welcome;
