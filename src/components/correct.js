import React from 'react';
import $ from "jquery"
function retry() {
  $("#userEssay").val(encodeURI($("#userEssay").val()))
}


function Correct() {
  return (
    <div className="App">
      <header className="App-header">      
        <h3>Copy/Write your essay here</h3>
        <div class="">        
        <p id="tamplate">
        </p>
          <form action="/corrected/">
            <textarea placeholder="Lorem ipsum dolor sit amet..." name="essay" type="text" id="userEssay"></textarea>
            <button id="evaluateBtn" onClick={retry}>Correct Essay</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Correct;
