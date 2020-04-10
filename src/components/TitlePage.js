import React from 'react';
import $ from "jquery"

function report() {
  const headers = new Headers()
headers.append("Content-Type", "application/json")
function CreateUUID() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}
var timeStamp = Date.now()
var UUID = CreateUUID()
const body = {timeStamp, UUID}

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://enmlfbmjyaluo.x.pipedream.net/", options)
}

$(document).ready(function(){
report()
})

function Welcome() {
  return (
    <div className="App">        
                 <div>
            <center>
              <h1 id="titleSPAN">CMESS</h1>
            </center>
          </div> 
      <div class="container">
      <div>
        </div>    
      <div class="row">
        <div class="col-sm-4" >
          <center>
          <img id="iconIMG" alt="eyes" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F04%2F04%2F14%2F56%2Fcartoon-313457_960_720.jpg&f=1&nofb=1"></img>
              <h3>
                <tp>Do you want to get your readers attention?</tp>                
              </h3>
          </center>
        </div>
        <div class="col-sm-4">        
          <center>
          <img id="iconIMG" alt="eyes" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartion.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fspelling-bee-contest-clipart-free-clip-art-images.png&f=1&nofb=1"></img>              
              <h3>
              <tp>  Do you want to improve the vocabulary used in your text?              </tp>
              </h3>
          </center>
        </div>
        <div class="col-sm-4">
        <center>
          <img id="iconIMG" alt="eyes" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.teachhub.com%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimage%2Fclassroom-management-grades.jpg&f=1&nofb=1"></img>
              <h3>
                <tp>Do you want to get better grades on your reports?</tp>                
              </h3>
          </center>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-7">
          <img alt="stp" id="TPimg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fpile-of-document-vector-id635477848%3Fk%3D6%26m%3D635477848%26s%3D612x612%26w%3D0%26h%3DspIBpDZ0oVcwCKHugdcD5xptoWMylmOT7p_0yUTxitc%3D&f=1&nofb=1"></img>
        </div>
        <div class="col-sm-5">
        <p id="about2">
        <h3 id="whatDo">Use CMESS!</h3>
        <p>
          <h5></h5>
          <ul>
            <li>
              Word usage/abuse check
            </li>
            <li>
              Informal Language Detector
            </li>
            <li>
              Vocabulary inflation
            </li>
            <li>
              Plagiarism Detection - coming soon
            </li>
          </ul>
          <a href="/check" >TRY NOW</a>
        </p>
        </p>

        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <h2>Improve you're essays faster then ever</h2>
        </div>
        <div class="col-sm-3">
          <h4>Find Issues</h4>
          <p>
            <a id="custom" href="https://cmess.netlify.com//results/?essay=ESSAY_BODY">https://cmess.netlify.com//results/?essay=<b>ESSAY_BODY</b></a>
          </p>
        </div>
        <div class="col-sm-3">
          <h4>Improve Essay</h4>
          <p>
          <a id="custom" href="https://cmess.netlify.com//corrected/?essay=ESSAY_BODY">https://cmess.netlify.com//corrected/?essay=<b>ESSAY_BODY</b></a>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Welcome;
