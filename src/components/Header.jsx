import React from 'react'
import image from '../assets/images'
import style from '../styles/Header.module.css'
import Download from './Download'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className={style.container_header}>
      <div className={style.header_section_title}>
        <div className={style.section_img}>
        </div>
          <img className={style.header_img} src={image.img1} alt="monkey" />
          <h1 className={style.header_title}>Title Lorem ipsum</h1>
          <p className={style.header__text}>Lorem ipsum dolor sit amet   consectetur adipisicing elit. Blanditiis, quis!</p>   
      </div>
      
      <div className={style.header_section_food}>
        <div className={style.header_food_img}>
        </div>
        
          <img className={style.food_img}src={image.img2} alt="" />
        
          <Navbar />
      </div>
      <div className={style.container_button}>
          <Download />
          <img src={image.img3} alt="" />
        </div>
      <div>
        
      </div>
    </div>
  )
}

export default Header