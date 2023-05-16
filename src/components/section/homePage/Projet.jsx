import TitleSection from '@/components/TitleSection'
import ProjectCard from '@/components/cards/ProjectCard'
import Link from 'next/link'
import React from 'react'

export default function Projet({posts}) {
  return (
    <div className=' bg-gray-100 pb-[10%]'>
      <div className='text-gray-500 md:mx-[20%] reveal'>
      <TitleSection
        title='projet'
      />
      <div className='flex justify-center'>
         <div className='grid lg:grid-cols-2 xl:grid-cols-3 justify-center items-center w-full max-w-[1370px]'>
           {
        posts.map(post=>(
          <Link href={`post/${post.fields.slug}`}
          key={post.sys.id} > 
          <ProjectCard
          image={post.fields.images.fields.file.url}
          
          />
          </Link>
        ))
      }
        
        </div>
      </div>
       
      
      </div>
    </div>
    
  )
}

 