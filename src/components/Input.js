import React from 'react';
import $ from "jquery"

var retr
function retry() {
  retr = $("#userEssay").val()
}

function Create() {
  return (
    <div className="App">
      <header className="App-header">      
        <h3>Copy/Write your essay here</h3>
        <div class="">        
          <form action="/results/">
            <textarea placeholder="Lorem ipsum dolor sit amet..." name="essay" type="text" id="userEssay"></textarea>
            <button id="evaluateBtn" onClick={retry}>Evaluate</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export {Create, retr};
