import React from 'react';
import $ from "jquery"



var retr
function retry() {
  retr = $("#userEssay").val()  
  //localStorage.getItem("lastname")
}


function Create() {
  return (
    <div className="App">
      <header className="App-header">      
        <h3>Copy/Write your essay here</h3>
        <div class="">        
        <p id="tamplate">

        </p>
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
