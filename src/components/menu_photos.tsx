import React from 'react'
import '../App.css'
import photo1 from './Images/photo1.jpg'
import photo2 from './Images/photo2.jpg'
import photo3 from './Images/photo3.jpg'
import photo4 from './Images/photo4.jpg'
import photo5 from './Images/photo5.jpg'
import photo6 from './Images/photo6.jpg'
import photo7 from './Images/photo7.jpg'
import photo8 from './Images/photo8.jpg'

const menu_photos: React.FC = () => {
  return (
    <div className="div-photos">
      <img src={photo1} className="button-Photos" alt="logo" />
      <img src={photo2} className="button-Photos" alt="logo" />
      <img src={photo3} className="button-Photos" alt="logo" />
      <img src={photo4} className="button-Photos" alt="logo" />
      <img src={photo5} className="button-Photos" alt="logo" />
      <img src={photo6} className="button-Photos" alt="logo" />
      <img src={photo7} className="button-Photos" alt="logo" />
      <img src={photo8} className="button-Photos" alt="logo" />
    </div>
  )
}

export default menu_photos
