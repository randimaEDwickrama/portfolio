'use client';

import { useEffect, useState } from 'react';

import Lenis from 'lenis'

import Pgtransition from '@/components/Pgtransition';
import Intro from '@/components/Intro';


import Section from '@/components/Section';
import Footer from '@/components/Footer1';





export default function Home() {
	
	const [isLoading, setIsLoading] = useState(true); 

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
   <main>
      
      <Intro />
     <Pgtransition />
      <Section />
	  <Footer />
      <div className='h-screen'></div>
    </main>
  )





}
