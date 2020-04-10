import React from 'react';
import $ from "jquery"
var essay
function show(){
  $("#heading").html("Results")
  var url = new URLSearchParams(decodeURI(window.location.search));
  var output = url.get('essay');
  essay = output  
  $("#essayWrap").attr("style","overflow: scroll; height: 5cm; border: solid;")
  $("#essayBody").attr("style","overflow: padding: 0.3cm;")
  evaluate(essay)}
var x
function evaluate(data) {
  data = data.trim()
  var wordCount = data.split(' ').length
  data = data.replace("!", ".").replace("?", ".").replace(",", "")  
  var words = data.split(' ')
  var sentecesCount = data.split('.').length - 1   
  var Iusage = 0
  var theUsage = 0
  var isUsage = 0
  var Informal = 0
  var wasCount = 0
  var soCount = 0
  var veryUsage = 0
  for(x in words) {
    
//filter
    switch (words[x]) {
      case "your":
      words[x] = "<b id='fixP'>you're</b>"
      break; 
      case "Your":
      words[x] = "<b id='fixP'>You're</b>"
      break;       
      case "afraid":
      words[x] = "<better><b>terrified</b></better>"
      break;
      case "Afraid":
      words[x] = "<better><b>Terrified</b></better>"
      break;
      case "rude":
      words[x] = "<better><b>vulgar</b></better>"
      break;
      case "Rude":
      words[x] = "<better><b>Vulgar</b></better>"
      break;
      case "weak":
      words[x] = "<better><b>feeble</b></better>"
      break;
      case "Weak":
      words[x] = "<better><b>Feeble</b></better>"
      break;
      case "big":
      words[x] = "<better><b>rather large</b></better>"
      break;
      case "Big":
        words[x] = "<better><b>Rather large</b></better>"
        break;
        case "huge":
          words[x] = "<better><b>colossal</b></better>"
          break;
          case "Huge":
            words[x] = "<better><b>Colossal</b></better>"
            break;
            case "large":
              words[x] = "<better><b>considerable</b></better>"
              break;
              case "Large":
                words[x] = "<better><b>Considerable</b></better>"
                break;
                case "Popular":
                  words[x] = "<better><b>Attractive</b></better>"
                  break;
                  case "popular":
                    words[x] = "<better><b>attractive</b></better>"
                    break;
      case "bad":
      words[x] = "<better><b>atrocious</b></better>"
      if (words[x-1]==="a") {
        words[x-1] = "<better><b>an</b></better>"
      }
      else {
        
      }
      break;
      case "Bad":
      words[x] = "<better><b>Atrocious</b></better>"
      if (words[x-1]==="a") {
        words[x-1] = "an"
      }
      else {

      }
      break;
      case "tired":
      words[x] = "<better><b>exhausted</b></better>"
      break;
      case "Tired":
      words[x] = "<better><b>[Exhausted]</b></better>"
      break;
      case "stupid":
      words[x] = "<better><b>idiotic</b></better>"
      break;
      case "ugly":
      words[x] = "<better><b>hideous</b></better>"
      break;
      case "worried":
      words[x] = "<better><b>anxcious</b></better>"
      break;
      case "afraid":
        words[x] = "<better><b>anxcious</b></better>"
        break;
        case "Afraid":
          words[x] = "<better><b>anxcious</b></better>"
          break;
      case "Worried":
      words[x] = "<better><b>Anxcious</b></better>"
      break;      
      case "its":
      isUsage += 1
      words[x] = "<b id='fixP'>it's</b>"
      break;
      case "Very":
      veryUsage += 1
      words[x] = ""
      break;        
      case "very":
      veryUsage += 1
      words[x] = ""
      break;      
      case "Im":
      Iusage += 1
      words[x] = "<b id='fixP'>I am</b>"
      break;
      case "I'm":
      Iusage += 1
      words[x] = "<b id='fixP'>I am</b>"
      break;
      case "im":
      Iusage += 1
      words[x] = "<b id='fixP'>I am</b>"
      break;
      case "i'm":
      Iusage += 1
      words[x] = "<b id='fixP'>I am</b>"
      break;
      case "I":
      Iusage += 1
      words[x] = "<b>" + words[x] + "</b>"
      break;
      case "The":
      theUsage += 1
      words[x] = "<b>" + words[x] + "</b>"
      break;
      case "the":
      theUsage += 1
      words[x] = "<b>" + words[x] + "</b>"
      break;
      case "Is":
      isUsage += 1
      words[x] = "<a id='wasis'>" + words[x] + "</a>"
      break;
      case "is":
      isUsage += 1
      words[x] = "<a id='wasis'>" + words[x] + "</a>"
      break;
      case "yeah":
      Informal += 1
      words[x] = ""
      break;
      case "Yeah":
        Informal += 1
        words[x] = ""
        break;
      case "bruh":
      Informal += 1
      words[x] = ""
      break;
      case "Nah":
      Informal += 1
      words[x] = "<a id='informal'>no</a>"
      break;
      case "nah":
      Informal += 1
      words[x] = "<a id='informal'>no</a>"
      break;
      case "nope":
      Informal += 1
      words[x] = "<a id='informal'>defenitly not</a>"
      break;
      case "cool":
      Informal += 1
      words[x] = "<a id='informal'>swell</a>"
      break;
      case "aight":
      Informal += 1
      words[x] = "<a id='informal'>alright</a>"
      break;
      case "y'all ":
      Informal += 1
      words[x] = "<a id='informal'>you all</a>"
      break;
      case "Y'all ":
      Informal += 1
      words[x] = "<a id='informal'>you all</a>"
      break;
      case "yall ":
      Informal += 1
      words[x] = "<a id='informal'>you all</a>"
      break;
      case "Yall ":
      Informal += 1
      words[x] = "<a id='informal'>you all</a>"
      break;
      case "duh":
      Informal += 1
      words[x] = ""
      break;
      case "was":
      wasCount += 1
      words[x] = "<a id='wasis'>" + words[x] + "</a>"
      break;
      case "Was":
      wasCount += 1
      words[x] = "<a id='wasis'>" + words[x] + "</a>"
      break;
      case "So":
      soCount += 1
      words[x] = "<a id='so'>Thus</a>"
      break;
      case "so":
      soCount += 1
      words[x] = "<a id='so'>thus</a>"
      break;
      default:
        console.log()
      break;
    }
    
  }
//grading
$("#resultsH").html("")  
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
  <div class="" id="issueContainer">
    <b id='issue'>${problem}</b> <br>
    <p id="fixForIssue">FIX: ${fix} </p>
  </div>
  `
  $("#results").append(issC)
}

function Corrected() {
  return (
    <div>
        <h2 id="heading" ><button id="show" onClick={show}>Correct!</button> </h2>
                      
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

export default Corrected;
