class App extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.endSound = this.endSound.bind(this);
  }
  playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
    if (!audio)
      return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
  endSound (e) {
    const key = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
    if(!key)
      return;
    key.classList.remove('playing');
  }
  render() {
    return (
      <div>
        <button data-key="81" class="drum-pad" id="key-q">
          Q<p>HEATER ONE</p>
        </button>
        <button data-key="87" class="drum-pad" id="key-w">
          W
          <p>
            <nobr>HEATER TWO</nobr>
          </p>
        </button>
        <button data-key="69" class="drum-pad" id="key-e">
          E
          <p>
            <nobr>HEATER THREE</nobr>
          </p>
        </button>
        <button data-key="65" class="drum-pad" id="key-a">
          A
          <p>
            <nobr>HEATER FOUR</nobr>
          </p>
        </button>
        <button data-key="83" class="drum-pad" id="key-s">
          S<p>CLAP</p>
        </button>
        <button data-key="68" class="drum-pad" id="key-d">
          D<p>OPEN HH</p>
        </button>
        <button data-key="90" class="drum-pad" id="key-z">
          Z<p>KICK N HAT</p>
        </button>
        <button data-key="88" class="drum-pad" id="key-x">
          X<p>KICK</p>
        </button>
        <button data-key="67" class="drum-pad" id="key-c">
          C<p>CLOSED HH</p>
        </button>
        <audio data-key="81" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
        <audio data-key="87" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
        <audio data-key="69" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
        <audio data-key="65" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
        <audio data-key="83" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
        <audio data-key="68" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
        <audio data-key="90" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
        <audio data-key="88" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
        <audio data-key="67" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
        {window.addEventListener('keydown', this.playSound)}
        {window.addEventListener('keyup', this.endSound)}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("display"));
