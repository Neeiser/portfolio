import React from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min.js";

class App extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
        el: this.vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x121214,
        color1: 0xc32200,
        color2: 0xe8a300,
        colorMode: "lerp"
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }} ref={this.vantaRef}>
        
      </div>
    );
  }
}

export default App;