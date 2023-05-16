import React from 'react'

export default function ButtonsLearnMore({bgColor, textColor, content}) {
  return (
    <div><button className={`border border-${bgColor} text-${textColor} py-2 px-6 text-xs md:text-2xl`}>{content}</button></div>
  )
}
