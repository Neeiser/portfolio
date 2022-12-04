//FRAMER MOTION
import { motion } from "framer-motion";

//VANTA.JS
import { useEffect, useRef, useState,  } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

export default function Timeline() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x121214,
            shininess: 37.00,
            waveHeight: 40.00,
            waveSpeed: 0.30,
            zoom: 0.85
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div>
    <main ref={vantaRef} className=' z-0'>
      <section className='h-screen relative'>
        <div className='h-screen flex'>

        </div>
      </section>

      <section className='h-screen' id="about">
        
      </section>

    </main>
  </div>
    );
}