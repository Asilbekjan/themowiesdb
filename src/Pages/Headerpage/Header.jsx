import React, { useRef } from 'react'
import './header.css'
import {Link, useNavigate} from 'react-router-dom'
import Trending from '../RootPage/components/Trending'
import Popular from '../RootPage/components/Popular'
import {useTranslation} from "react-i18next"

export default function Header() {
  const{t}=useTranslation()
  const searchval = useRef()
  const navigation = useNavigate()
  function searchQuery(){
    navigation(`/search/${searchval.current.value}`);
  }
  return (
    <div>
       <div className='header_section'>
          <img className='header_img position-relative' src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg" alt="themoviesdb_header_img" />
         <div className="container">
          <h1 className='header_title'>{t("welcome")}</h1>
          <h1 className='header_desc'>{t("headdesc")}</h1>
          <input ref={searchval}  className='header_input border-none' type="text" placeholder={t('searchvall')} />
          <button onClick={searchQuery} className='header_btn'>
            <Link className='header_link' to={'/search'}>
              {t('search')}
            </Link>
          </button>
        </div>
    </div>
    <Trending/>
    <Popular/>
    </div>
  )
}
