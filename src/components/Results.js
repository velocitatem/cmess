import React from 'react';
import $ from "jquery"

var essay
function show(){
  var url = new URLSearchParams(window.location.search);
  var output = url.get('essay');
  essay = output  
  $("#essayWrap").attr("style","overflow: scroll; height: 5cm; border: solid;")
  $("#essayBody").attr("style","overflow: padding: 0.3cm;")
  
  evaluate(essay)


}
var x
function evaluate(data) {
  var wordCount = data.split(' ').length
  var words = data.split(' ')
  var Iusage = 0
  var theUsage = 0
  var isUsage = 0
  for(x in words) {
    

    switch (words[x]) {
      case "I":
        Iusage += 1
        words[x] = "<b>"+words[x]+"</b>"
        break;
      case "The":
        theUsage += 1
        words[x] = "<b>"+words[x]+"</b>"
        break;
        case "the":
          theUsage += 1
          words[x] = "<b>"+words[x]+"</b>"
          break;        
      case "Is":
        isUsage += 1
        words[x] = "<b>"+words[x]+"</b>"
        break;
        case "is":
          isUsage += 1
          words[x] = "<b>"+words[x]+"</b>"
          break;
      default:
        console.log("word: "+words[x])
        break;
    }
  }
  console.table({Iusage, theUsage, isUsage, wordCount})  
  $("#results").html("I: "+Iusage +"|the: "+ theUsage +"|IS: "+ isUsage +"|WORDS: "+ wordCount)
  $("#essayBody").html(words.join(" ", words))
}

function Welcome() {
  return (
    <div>
        <h2>Results</h2>
        <button onClick={show}>Show Results</button>
        <p id="Icount"></p>
        <div id="essayWrap">
          <p id="essayBody">
            
          </p>
        </div>
        <p id="results">
        </p>

    </div>
  );
}

export default Welcome;
