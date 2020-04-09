import React from 'react';
import $ from "jquery"

var essay
function show(){
  $("#heading").html("Results")
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
  var sentecesCount = data.split('.').length
  var words = data.split(' ')
  var Iusage = 0
  var theUsage = 0
  var isUsage = 0
  var Informal = 0
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
          case "yeah":
            Informal += 1
            words[x] = "<a id='informal'>"+words[x]+"</a>"
            break;          
          case "bruh":
            Informal += 1
            words[x] = "<a id='informal'>"+words[x]+"</a>"
            break;          
            case "Nah":
              Informal += 1
              words[x] = "<a id='informal'>"+words[x]+"</a>"
              break;  
              case "nah":
            Informal += 1
            words[x] = "<a id='informal'>"+words[x]+"</a>"
            break;    
            case "nope":
            Informal += 1
            words[x] = "<a id='informal'>"+words[x]+"</a>"
            break;   
            case "cool":
            Informal += 1
            words[x] = "<a id='informal'>"+words[x]+"</a>"
            break;   
            case "duh":
            Informal += 1
            words[x] = "<a id='informal'>"+words[x]+"</a>"
            break;
      default:
        console.log("word: "+words[x])
        break;
    }
  }
//grading
$("#resultsH").html("<h2>Issues:</h2>")
  if (Iusage > (sentecesCount/2)) {
    issue("'I' is over-used", "to fix this issue try to lower the frequency of usage. a maximum half the sentences should have 'I' in them")
  }
  else {}
  if (Informal > 0) {
    issue("Text contains informal language", "try changing the words highlighted in blue")
  } 
  else {}

  if ($("#results").html() === ""){
    $("#results").html("<h2 id='noERR'>Yayy, no important errors found!</h2>")
  }
  console.table({Iusage, theUsage, isUsage, wordCount, sentecesCount})  
  var aboutText = `
  <h2>About text:</h2>
  <p>
  Words in text: ${wordCount} <br>
  Sentences in text: ${sentecesCount} <br>  
  </p>
  `
  $("#aboutText").html(aboutText)
  $("#essayBody").html(words.join(" ", words))
}

function issue(problem, fix) {
  var issC = `
  <div class="" id="issue">
    <b>${problem}</b> <br>
    <p id="fix">FIX: ${fix} </p>
  </div>
  `
  $("#results").append(issC)
}

function Welcome() {
  return (
    <div>
        <h2 id="heading" ><button id="show" onClick={show}>Show Results</button> </h2>
        <p id="Icount"></p>
        <div id="essayWrap">
          <p id="essayBody">
            
          </p>
        </div>
        <p id="aboutText">          
        </p>
        <p id="resultsH">
        </p>
        <p id="results">
        </p>

    </div>
  );
}

export default Welcome;
