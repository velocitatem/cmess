import React from 'react';
import $ from "jquery"



var retr
function retry() {
  if ($("#userEssay").val().length >= 2000) {
    alert("essay too long")
  }
  $("#userEssay").val($("#userEssay").val())
  //localStorage.getItem("lastname")
}


function Create() {
  return (
    <div className="App">
      <header className="App-header">      
        <h3>Check My Essay</h3>
        <div class="">        
        <p id="tamplate">

        </p>
          <form action="/results/">
            <textarea placeholder="Paste/Write your essay here" name="essay" type="text" id="userEssay"></textarea>
            <button id="evaluateBtn" onClick={retry}>Evaluate</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export {Create, retr};
