import TitleSection from '@/components/TitleSection'
import ButtonsLearnMore from '@/components/buttons/ButtonsLearnMore'
import React from 'react'

export default function Contact() {
  return (
    <div className='bg-gray-700 pb-28 reveal'>
      <div className='text-white md:mx-[20%] bg-gray-700'>
      <TitleSection
        title='contact'
      />
      <p className='text-cyan-400 text-center font-bold'>Have a question or want to work together?</p>
      <form action="" className='w-full mt-10 p-3'>
        <input type="text" className='bg-gray-900 m-[1px] p-2  w-full text-gray-400' placeholder='name'/>
        <input type="text" className='bg-gray-900  w-full m-[1px] p-2  text-gray-400' placeholder='Enter email'/>
        <textarea name="" id="" cols="10" rows="5" className='bg-gray-900 m-[1px] p-2 w-full  text-gray-400' placeholder='your Message'></textarea>
        <div className='text-end   m-0 '>
          <ButtonsLearnMore 
            bgColor='white'
            textColor='white'
            content='Submit'
        
        />
        </div>
        
        
      </form>
      
    </div>
    </div>
    
  )
}
