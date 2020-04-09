import React from 'react';
import $ from "jquery"
const soOPT = `
<p id="soOPT">then, therefore, hence, consequently</p>
`
const wasOPT = `
<p id="wasOPT">befall, occur, come about, transpire, take place</p>
`

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
  data = data.trim()
  var wordCount = data.split(' ').length
  var words = data.split(' ')
  data = data.replace("!", "").replace("?", "")
  var sentecesCount = data.split('.').length - 1   
  var Iusage = 0
  var theUsage = 0
  var isUsage = 0
  var Informal = 0
  var wasCount = 0
  var soCount = 0
  for(x in words) {
    
//filter
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
        words[x] = "<a id='wasis'>"+words[x]+"</a>"
        break;
        case "is":
          isUsage += 1
          words[x] = "<a id='wasis'>"+words[x]+"</a>"
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
            case "aight":
            Informal += 1
            words[x] = "<a id='informal'>"+words[x]+"</a>"
            break;
            case "y'all ":
            Informal += 1
            words[x] = "<a id='informal'>"+words[x]+"</a>"
            break;
            case "Y'all ":
              Informal += 1
              words[x] = "<a id='informal'>"+words[x]+"</a>"
              break;
              case "yall ":
                Informal += 1
                words[x] = "<a id='informal'>"+words[x]+"</a>"
                break;
                case "Yall ":
                  Informal += 1
                  words[x] = "<a id='informal'>"+words[x]+"</a>"
                  break;
            case "duh":
            Informal += 1
            words[x] = "<a id='informal'>"+words[x]+"</a>"
            break;
            case "was":
              wasCount += 1
              words[x] = "<a id='wasis'>"+words[x]+"</a>"+wasOPT
              break;
              case "Was":
                wasCount += 1
                words[x] = "<a id='wasis'>"+words[x]+"</a>"+wasOPT
                break;
                case "So":
                  soCount += 1
                  words[x] = "<a id='so'>"+words[x]+"</a>"+soOPT
                  break;
                  case "so":
                    soCount += 1
                    words[x] = "<a id='so'>"+words[x]+"</a>"+soOPT
                    break;
      default:
        console.log("word: "+words[x])
        break;
    }
  }
//grading
$("#resultsH").html("<h2>Issues:</h2>")
  if (Iusage > ((wordCount)*0.1)) {
    issue("'I' is over-used", "to fix this issue try to lower the frequency of usage. a maximum half the sentences should have 'I' in them")
  }
  else {}
  if (Informal > 0) {
    issue("Text contains informal language", "try changing the words highlighted in blue")
  } 
  else {}
  if (isUsage > ((wordCount)*0.06)) {
    issue("'Is' is over-used", "express the prase in a more active way")
  }
  else {}
  if (wasCount > ((wordCount)*0.03)) {
    issue("'Was' is over-used", "Here is an example of how you can fix this issue. EX: 'the letter was mailed by sally' => 'sally mailed the letter'")
  }
  else {}
  if (theUsage > ((wordCount)*0.03)) {
    issue("'The' is over-used", "The word 'the' is very hard to replace and not use but try to find a way to limit the usage in every way you can.")
  }
  else {}
  if (soCount > ((wordCount)*0.05)) {
    issue("'So' is over-used", "Try using one of these synonyms: Thus, in this/that way, in such manener, to this extent, then, therefore, hence, consequently")
  }
  else {}
  if ($("#results").html() === ""){
    $("#results").html("<h2 id='noERR'>Yayy, no important errors found!</h2>")
  }
  else {
    
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
  $("#formTR").val(encodeURI($("#results").html()))
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
        <form action="/create" id="formA">   
        <input type="hidden" name="tobechecked" id="formTR"></input>
        </form>

    </div>
  );
}

export default Welcome;
