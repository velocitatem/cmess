import React from 'react';
import $ from "jquery"

$(document).ready(function(){

})

function About() {
  return (
    <div className="App">        
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <span>
                        <h1>About</h1>
                    </span>
                </div>
            </div>
            <div class="row">
            <div class="col-sm-5">
                <img id="aboutP" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblogs.mtu.edu%2Fimprovement%2Ffiles%2F2015%2F11%2Fdocuments.png&f=1&nofb=1"></img>
            </div>
            <div class="col-sm-7">
            The reason why I created this website is, that all other websites providing this service are paid. I believed that an algorithm for correcting and counting words and their frequency in body of text can't be that hard. If you think that there is an issue with the current filter please do let me now. You can find my contact information at <a href="https://github.com/danalves24com">https://github.com/danalves24com</a>
            </div>
            </div>
        </div>
    </div>
  );
}

export default About;
