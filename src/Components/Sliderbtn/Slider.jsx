import React, { useState } from 'react'
import './Slider.css'
import {useTranslation} from "react-i18next"


export default function Slider({handle1,handle2}) {

  const{t}=useTranslation()

 

  const [active,setActive]=useState(true)

  function movieHandlefirst(){
    setActive(true)
    handle1()
  }
  function movieHandlesecond(){
    setActive(false)
    handle2()
  }


  return (
    <div className='container py-2'>
        <div className='btns'>
         <div className={active? ' active btn-left' : 'active btn-right'}></div>
            <button onClick={movieHandlefirst} className='btn'>{t('Today')}</button>
            <button onClick={movieHandlesecond}  className='btn btn-rightt'>{t('Thisweek')}</button>
        </div>
    </div>
  )
}
