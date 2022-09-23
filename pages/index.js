import Home from "../components/homepage";
import { useEffect, useRef, useState } from 'react';
import GLOBE from 'vanta/dist/vanta.waves.min.js';
import * as THREE from "three";
import Github from "../components/github";

export default function Page() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x711,
  shininess: 35.00,
  waveHeight: 31.50,
  waveSpeed: 0.25,
  zoom: 0.95
        })
      )
    }
    // return () => {
    //   if (vantaEffect) {
    //     vantaEffect.destroy()
    //   }
    // }
  }, [vantaEffect])

  return (
    <main ref={vantaRef}>
      <section class="general">
        <div class="homepage">
            <big><u>Faro</u></big>
          <br></br>
          <br></br>
          <div class="homepag-sub">
            <small>Liquid-Staking Protocol for Layer-2 ZK-Rollups</small>
          </div>
        </div>
      </section>
      <div>
        <Home/>
      </div>
    </main>
  )
}