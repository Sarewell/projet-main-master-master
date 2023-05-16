import TitleSection from '@/components/TitleSection'
import SkillBar from '@/components/cards/SkillBar'
import React from 'react'
import {  MdDevices, MdLightbulbOutline, MdOutlineRocketLaunch, MdSpeed } from "react-icons/md";

export default function About() {
  return (
    <div className='text-gray-500 sm:mx-[20%] reveal'>
      <TitleSection
        title='about'
      />
      <div className='text-gray-400 grid grid-cols-2 lg:grid-cols-4 gap-2 justify-center '>
        <div className='text-center p-1 '>
          <MdSpeed className='m-auto text-8xl mb-4 static p-4 bg-cyan-400 rounded-full text-white'/>
          <p className='text-xl capitalize font-bold'>fast</p>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>
        
        <div className='text-center p-1'>
          <MdDevices className='m-auto text-8xl mb-4 static p-4 bg-cyan-400 rounded-full text-white'/>
          <p className='text-xl capitalize font-bold'>responsive</p>
          <p>My layouts will work on any device, big or small.</p>
        </div>
        <div className='text-center p-1'>
          <MdLightbulbOutline className='m-auto text-8xl mb-4 static p-4 bg-cyan-400 rounded-full text-white'/>
          <p className='text-xl capitalize font-bold'>intuitive</p>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
        <div className='text-center p-1'>
          <MdOutlineRocketLaunch className='m-auto text-8xl mb-4 static p-4 bg-cyan-400 rounded-full text-white'/>
          <p className='text-xl capitalize font-bold'>dynamic</p>
          <p>Websites don't have to be static, I love making pages come to life.</p>
        </div>
        
      </div>
      <div className='max-w-full  grid grid-cols-1 lg:grid-cols-2 lg:gap-10 p-4 mt-10'>
          <div className='w-full text-center '>
            <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Black&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light' className='m-auto h-52 p-4'/>
            <p className='text-xl  uppercase font-bold pb-2 '>Who's this guy?</p>
            <p>I'm a web Developer in Vernon, France. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let's make something special.</p>
          </div>
          <div className='max-w-full py-4'>
            <SkillBar
            texte= 'html'
            chiffre='50'
            pourcentage='28'
            pourcentage2='20'

            />
            <SkillBar
            texte= 'css'
            chiffre='50'
            pourcentage='28'
            pourcentage2='20'

            />
            <SkillBar
            texte= 'js'
            chiffre='50'
            pourcentage='28'
            pourcentage2='20'

            />
            <SkillBar
            texte= 'react'
            chiffre='50'
            pourcentage='28'
            pourcentage2='20'

            />
            <SkillBar
            texte= 'php'
            chiffre='50'
            pourcentage='28'
            pourcentage2='20'

            />
            <SkillBar
            texte= 'nextjs'
            chiffre='50'
            pourcentage='28'
            pourcentage2='20'

            />
            <SkillBar
            texte= 'symfony'
            chiffre='50'
            pourcentage='28'
            pourcentage2='20'

            />
            <SkillBar
            texte= 'word press'
            chiffre='50'
            pourcentage='20'
            pourcentage2='full'

            />
          </div>
          
          
          
        </div>
    </div>
  )
}
