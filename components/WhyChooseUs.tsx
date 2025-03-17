import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import {whyChooseUs} from '../lib/data';
function WhyChooseUs() {
  return (
    <section>
<h2 className="text-6xl my-8 max-md:mb-4  font-bold text-center font-bebas max-md:text-5xl max-sm:text-4xl tracking-wide">Why <span className='text-primary-yellow'>Choose</span> Us</h2>

    <div className="max-w-5xl mx-auto px-8">
        
      <HoverEffect items={whyChooseUs} />
    </div>
    </section>
  )
}

export default WhyChooseUs