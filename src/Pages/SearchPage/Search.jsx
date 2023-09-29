import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useTranslation} from "react-i18next"


export default function Search() {
  const [searchmovie,setSearchmovie]=useState([]);
  const [sort , setSort] = useState('movie')
  const{t}=useTranslation()


  const params = useParams()

  useEffect(()=>{
    console.log(params.query);
    axios({
      method:'GET',
      url:`https://api.themoviedb.org/3/search/${sort}?query=${params.query}&include_adult=false&language=en-US&page=1`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE4OWQ0NmFlOGMxNzJhNGU4NTRiZTczYTAxMjM3MCIsInN1YiI6IjY0OWVlMjhhMDkxZTYyMDBhZDU1MGZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9rKphMlbpDodR9VuNf0p0gA2PDi3HsBafnazcMFU8",
      } 
    })
    .then(res=>{
      setSearchmovie(res.data.results);
    })
    .catch(err=>{
      console.log(err);
    })
  },[sort])
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <div className="bg-white rounded-xl drop-shadow-lg ">
        <h2 className='text-3xl text-center mt-4 ms-4 p-6 text-white font-semibold bg-blue-400 rounded-t-md'>{t('searchresult')}</h2>
        <ul>
          <li onClick={()=>{setSort('movie')}} className='text-xl ms-4 ps-3 mb-2 hover:bg-slate-200 pb-2 pt-2'>{t('movie')}</li>
          <li onClick={()=>{setSort('tv')}} className='text-xl ms-4 ps-3 mb-2 hover:bg-slate-200 pb-2 pt-2'>{t('tv')} </li>
          <li onClick={()=>{setSort('person')}} className='text-xl ms-4 ps-3 mb-2 hover:bg-slate-200 pb-2 pt-2'>{t('pupil')}</li>
          <li onClick={()=>{setSort('collection')}} className='text-xl ms-4 ps-3 mb-2 hover:bg-slate-200 pb-2 pt-2'>{t('searchCollection')}</li>
          <li onClick={()=>{setSort('keyword')}} className='text-xl ms-4 ps-3 mb-2 hover:bg-slate-200 pb-2 pt-2'>{t('searchKeywords')}</li>
          <li onClick={()=>{setSort('company')}} className='text-xl ms-4 ps-3 mb-2 hover:bg-slate-200 pb-2 pt-2'>{t('searchCompany')}</li>
          <li onClick={()=>{setSort('multi')}} className='text-xl ms-4 ps-3 mb-2 hover:bg-slate-200 pb-2 pt-2'>{t('searchNetwork')}</li>
        </ul>
        </div>
      </div>
      <div className="col-span-9">
      <div className='container pb-9'>
      {
        (searchmovie.length>0) ? 
        <>
            {
              searchmovie.map((item,index)=>{
                return(
                  <div key={index} className=" mt-5 ">
                  <div className="grid grid-cols-12 ">
                    <div className="col-span-2">
                      {
                        item.poster_path || item.profile_path?
                        <img className='rounded-lg' src={`	https://www.themoviedb.org/t/p/w440_and_h660_face${item?.poster_path? item.poster_path : item.profile_path }`} alt={item.original_title} />
                        :
                        <img src="https://www.vanguardskin.com/wp-content/uploads/sites/110/2017/11/no_image.jpg" alt="" />
                      }
                    </div>
                    <div className="col-span-10">
                    <p className='ms-2 text-2xl font-bold'>{item.original_title}</p>
                    <p className='ms-2 text-lg'>{item.release_date}</p>
                      <p className='ms-2 mt-2'>{item.overview}</p>
                    </div>
                  </div>
                </div>
                )
              })
            }
        </>
        :
        <><h1 className='text-3xl mt-48 ms-96 font-bold text-blue-500 '>NO DATA</h1></>
      }
    </div>
      </div>
    </div>
  )
}
