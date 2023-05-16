import React from 'react'

export default function ProjectCard({image}) {
  return (
    <div className='max-h-80 overflow-hidden '>
      <img src={image} alt="image" className='w-full max-h-full' /> 
    </div>
  )
}
