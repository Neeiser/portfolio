import React from "react";
import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

export default function Skills() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
            el: vantaRef.current,
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
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
        <main className="h-screen" ref={vantaRef}></main>
    );
}