import { useEffect, useRef, useState } from 'react';
import GLOBE from 'vanta/dist/vanta.waves.min.js';
import * as THREE from "three";
import Github from "../components/github";
import Link from "next/link";

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
          <div class="std-margin">
            <small>Coming soon...</small>
          </div>
          <div class="button">
            <Link href='Faro-Economic-Whitepaper.pdf'>
              <button class="button button1 center" onclick="location.href='Faro-Economic-Whitepaper.pdf'"><b>Economic Whitepaper</b></button>
            </Link>
            <div class="divider"/>
            <Link href='Faro-Technical-Whitepaper.pdf' passHref>
              <button class="button button1 center"><b>Technical Whitepaper</b></button>
            </Link>
          </div>
        </div>
      </section>
      {/* <div>
        <Home />
      </div> */}
    </main>
  )
}