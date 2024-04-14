// import 'src/components/inspirations/CodeInfluences.css';
import '../inspirations/CodeInfluences.css';
import React from 'react'


const CodeInfluences = ({heading, text, src, alt}) => {
  return (
    <div className='influencesContainer'>
      <img loading='lazy' className='influence-pic' src={ src } alt={ alt } />
      <h3 className='inspiration-heading'>{ heading }</h3>
      <p className='influence-text'>{ text }</p>
    </div>
  )
}

export default CodeInfluences