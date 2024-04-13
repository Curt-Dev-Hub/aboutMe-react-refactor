import './css/NormalRow.css'
import React from 'react'

const NormalRow = ({heading, text, src, alt}) => {
  return (
    <div className="normalRowContainer">
      <img loading='lazy' className='normalRowPic' src={src} alt={alt} />
      <div className='rowInnerWrapper'>
        <h2 className='rowSubHeading'>{heading}</h2>
        <p className='rowText'>{text}</p>
      </div>
    </div>
  )
}

export default NormalRow


  