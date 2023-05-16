import React from 'react'

export default function SkillBar({texte, chiffre, pourcentage, pourcentage2}) {
  return (
    <div className='w-full my-4  flex gap-0'>
      <div className='flex w-full bg-cyan-600'>
        <p className='bg-cyan-400 text-white h-6 px-2 m-0 w-28 text-center items-center'>{texte}</p>
        <p className={`w-${pourcentage} bg-cyan-600 h-6 `} > </p>
      </div>
      <div className={` w-${pourcentage2} bg-gray-300 px-2 text-end min-w-15% items-center`}>
        <p >{chiffre}</p>
      </div>
        
    </div>
  )
}
