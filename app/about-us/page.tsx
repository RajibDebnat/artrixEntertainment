import Hero from '@/components/AboutPage/hero'
import SuccessStoryAbout from '@/components/AboutPage/successStories'
import React from 'react'

function page() {
  return (
    <main className=' p-10 max-lg:p-6 max-md:p-4  max-sm:p-0'>
      <Hero/>
      <SuccessStoryAbout/>
    </main>
  )
}

export default page