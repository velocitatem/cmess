import React from 'react';
import $ from "jquery"



var retr
function retry() {
  $("#userEssay").val(encodeURI($("#userEssay").val()))
  //localStorage.getItem("lastname")
}


function Create() {
  return (
    <div className="App">
      <header className="App-header">      
        <h3></h3>
        <div class="">        
        <p id="tamplate">

        </p>
          <form action="/results/">
            <textarea placeholder="Copy/Write your essay here" name="essay" type="text" id="userEssay"></textarea>
            <button id="evaluateBtn" onClick={retry}>Evaluate</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export {Create, retr};
