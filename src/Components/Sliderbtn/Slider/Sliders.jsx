import React, { useState } from 'react'
import '../Slider.css'
import {useTranslation} from "react-i18next"


export default function Sliders({handle11,handle22}) {

  const{t}=useTranslation()
 

  const [active,setActive]=useState(true)

  function movieHandlefirst(){
    setActive(true)
    handle11()
  }
  function movieHandlesecond(){
    setActive(false)
    handle22()
  }


  return (
    <div className='container py-2'>
        <div className='btns'>
         <div className={active? ' active btn-left' : 'active btn-right'}></div>
            <button onClick={movieHandlefirst} className='btn'>{t('OnTv')}</button>
            <button onClick={movieHandlesecond}  className='btn btn-rightt'>{t('Intheatre')}</button>
        </div>
    </div>
  )
}