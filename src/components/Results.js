import React from 'react';
import $ from "jquery"
var essay
$(document).ready(function(){
  var url = new URLSearchParams(window.location.search);
  var output = url.get('essay');
  essay = output
})
function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Results</h2>
        <p id="results">
        </p>
      </header>
    </div>
  );
}

export default Welcome;
