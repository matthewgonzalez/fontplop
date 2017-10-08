import React, { Component } from 'react'
import './App.css'
import Logo from './components/Logo'
import FontplopLogoText from './components/FontplopLogoText'
import ScreencastMp4 from './assets/fontplop-screencap.mp4'
import ScreencastWebm from './assets/fontplop-screencap.webm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <div id="svgWrapper">
            <Logo />
            <FontplopLogoText style={{marginTop: 25}} />
          </div>
          <div id="links">
            <a>Download</a>
            <a class="donate">Donate</a>
            <a>Contribute</a>
          </div>
          <div id="what-is">
            <p>FontPlop is an OSX/macOS application which takes <span class="filetype">ttf</span> and <span class="filetype">otf</span> files and outputs a webfont bundle: <span class="filetype">woff2</span>, <span class="filetype">woff</span>, <span class="filetype">tff</span>, <span class="filetype">svg</span>, and <span class="filetype">eot</span>.</p>
            <p>It is the simpler, faster, free successor to <a href="#">FontPrep</a>, which is no longer maintained.</p>
          </div>
          <div id="crafted-by">
            Crafted with love by brothers <a href="http://briangonzalez.org">Brian</a> and <a href="http://matthewgonzalez.me">Matthew</a> Gonzalez
          </div>
        </div>
        <div className="video-wrapper">
          <video loop autoPlay>
            <source src={ScreencastMp4} type="video/mp4" />
            <source src={ScreencastWebm} type="video/webm" />
          </video>
        </div>

        <a id="tweet-me">Tweet</a>
      </div>
    );
  }
}

export default App;
