import React from 'react';
import $ from "jquery"

function reWrite() {
  
var url = new URLSearchParams(window.location.search);
var output = url.get('tobechecked');
if (output != null) {
  console.log(output)
  output = decodeURI(output)
  $("#tamplate").html("<h5>Issues:</h5>")
  $("#tamplate").append(output)
}
}

var retr
function retry() {
  retr = $("#userEssay").val()
}

$(document).ready(function(){
  reWrite()
})
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
