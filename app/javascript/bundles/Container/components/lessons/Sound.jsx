import React, { Fragment } from "react";
import SoundPng from "images/sound.png";
import SoundGif from "images/sound.gif";
import SoundText from "./text/SoundText";

const Sound = () => (
  <Fragment>
    <section id="visual">
      <div id="nav-one" className="nav">
        <audio id="beep-one">
          <source
            src="https://cdn.rawgit.com/JessicaML/ScienceMotion-Static/aa82537e/sound_waves/wouldnt_say.mp3"
            controls
          />
          <source
            src="https://cdn.rawgit.com/JessicaML/ScienceMotion-Static/aa82537e/sound_waves/wouldnt_say.ogg"
            controls
          />
          Your browser isn't invited for super fun time.
        </audio>
        <a href="#" id="sound">
          <img src={SoundPng} onMouseOver={SoundGif} onMouseOut={SoundPng} />
        </a>
      </div>
    </section>
    <SoundText />
  </Fragment>
);

export default Sound;
