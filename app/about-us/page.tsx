import Hero from '@/components/AboutPage/hero'
import SuccessStoryAbout from '@/components/AboutPage/successStories'
import React from 'react'
import {ProcessSection} from '@/components/Process'
import Services from '@/components/Services';
import WhoWeAre from '@/components/AboutPage/WhoWeAre';
function page() {
  return (
    <main className=' p-10 max-lg:p-6 max-md:p-4  overflow-x-hidden  max-sm:p-0'>
      <Hero/>
      {/* <WhoWeAre/> */}
      <Services/>
      <ProcessSection/>
      <SuccessStoryAbout/>
    </main>
  )
}

export default page