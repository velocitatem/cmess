import React from 'react';
import $ from "jquery"

$(document).ready(function(){

})

function Welcome() {
  return (
    <div className="App">
              <h3 id="pageTitile">Welcome to CMESS</h3>
      <div class="container">
      <div class="row">
        <div class="col-sm-5">
              <h3>
                <tp>Improve your essays in a matter of minutes!</tp>
              </h3>
        </div>
        <div class="col-sm-7">
          <img alt="stp" id="TPimg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthenypost.files.wordpress.com%2F2018%2F11%2Fbooks-jan-karon.jpg%3Fquality%3D90%26strip%3Dall%26w%3D1200&f=1&nofb=1"></img>
        </div>
      </div>
      <div class="row">
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
          <a href="/create" >TRY NOW</a>
        </p>
        </p>

        </div>
      </div>
      </div>
    </div>
  );
}

export default Welcome;
