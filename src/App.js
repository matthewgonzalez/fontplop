import React, { Component } from 'react'
import './App.css'
import Logo from './components/Logo'
import FontplopLogoText from './components/FontplopLogoText'
import ScreencastMp4 from './assets/fontplop-screencap.mp4'
import ScreencastWebm from './assets/fontplop-screencap.webm'

const github = 'https://www.github.com/matthewgonzalez/fontplop'
const tweet = 'https://twitter.com/intent/tweet?text=I%20just%20downloaded%20FontPlop%20%E2%80%93%20the%20simple%2C%20fast%2C%20and%20free%20open%20source%20webfont%20converter%20for%20OSX%2FmacOS.%0A%0Ahttp%3A%2F%2Fwww.fontplop.com'

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
            <a href={`${github}/releases`}>Download</a>
            <a className="donate" href={`${github}#donations`}>Donate</a>
            <a href={github}>Github</a>
          </div>
          <div id="what-is">
            <p>FontPlop is an OSX/macOS application which takes <span className="filetype">ttf</span> and <span className="filetype">otf</span> files and outputs a webfont bundle: <span className="filetype">woff2</span>, <span className="filetype">woff</span>, <span className="filetype">tff</span>, <span className="filetype">svg</span>, and <span className="filetype">eot</span>.</p>
            <p>It is the simpler, faster, free successor to <a href="#">FontPrep</a>, which is no longer maintained.</p>
          </div>
          <div id="crafted-by">
            Crafted by the Gonzalez Bro's (<a href="http://briangonzalez.org">Brian</a> and <a href="http://matthewgonzalez.me">Matthew</a>)
          </div>
        </div>
        <div className="video-wrapper">
          <video loop muted autoPlay playsInline>
            <source src={ScreencastMp4} mutedtype="video/mp4" />
            <source src={ScreencastWebm} type="video/webm" />
          </video>
        </div>

        <a id="tweet-me" href={tweet} target="_blank">Tweet</a>
      </div>
    );
  }
}

export default App;
