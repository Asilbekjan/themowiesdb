import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Movieinfo() {
    const [movieinfos,setMovieinfos]=useState(null)
    const [movieperson , setMovieperson]=useState(null)
    const [keywordss,setKeywords]=useState(null)
    const params = useParams()
    let movies = params.movie
    
    useEffect(()=>{
        axios({
            method:'GET',
            url:`https://api.themoviedb.org/3/movie/${movies}?language=en-US`,
            headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE4OWQ0NmFlOGMxNzJhNGU4NTRiZTczYTAxMjM3MCIsInN1YiI6IjY0OWVlMjhhMDkxZTYyMDBhZDU1MGZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9rKphMlbpDodR9VuNf0p0gA2PDi3HsBafnazcMFU8",
              },
        })
        .then(res=>{
            setMovieinfos(res?.data);
        })
        .catch(err=>{
            console.log(err);
        })
        axios({
            method:'GET',
            url: `https://api.themoviedb.org/3/movie/${movies}/credits?language=en-US`,
            headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE4OWQ0NmFlOGMxNzJhNGU4NTRiZTczYTAxMjM3MCIsInN1YiI6IjY0OWVlMjhhMDkxZTYyMDBhZDU1MGZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9rKphMlbpDodR9VuNf0p0gA2PDi3HsBafnazcMFU8",
              },
        })
        .then(res=>{
            setMovieperson(res?.data?.cast.slice(0, 9));
            console.log(res.data.cast);
        })
        .catch(err=>{
            console.log(err);
        });
        axios({
            method:'GET',
            url:` https://api.themoviedb.org/3/movie/${movies}/keywords`,
            headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE4OWQ0NmFlOGMxNzJhNGU4NTRiZTczYTAxMjM3MCIsInN1YiI6IjY0OWVlMjhhMDkxZTYyMDBhZDU1MGZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9rKphMlbpDodR9VuNf0p0gA2PDi3HsBafnazcMFU8",
              }
        })
        .then(res=>{
            setKeywords(res.data.keywords);
        })
        .catch(err=>{
            console.log(err);
        })
        
    },[])
  return (
    <div className='mt-9 mb-3 movieinfo_img'>
        {
            !!movieinfos?
            <>
                <div className='relative h-[80vh]'>
                    <div className='main_second_img h-[78vh] w-[100%] absolute  '>

                    </div>
                    <img src={`	https://www.themoviedb.org/t/p/w1920_and_h800_face${movieinfos.backdrop_path}`} alt="" className='w-[100%] h-[78vh] absolute main_img' />
                    <div className="container">
                        <div className="grid grid-cols-12 absolute gap-4">
                            <div className="col-span-3">
                                <img src={`	https://www.themoviedb.org/t/p/w440_and_h660_face${movieinfos.poster_path}`}alt="" className='mt-9 rounded-xl'  />
                            </div>
                            <div className="col-span-8">
                                <h3 className='text-white ms-4 font-semibold text-4xl font-mono mt-10'>{movieinfos.original_title}</h3>
                                <p className='text-white ms-12 font-semibold'>{movieinfos.release_date}</p>
                                <p className='text-slate-500 ms-4 font-semibold text-xl font-sans'>{movieinfos.tagline}</p>
                                <p className='text-white ms-4 font-semibold text-2xl'>Overview</p>
                                <p className='text-white ms-4'>{movieinfos.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            :
            <>
                <p>Loading</p>
            </>
        }
        <div className='grid grid-cols-12'>
        <div className="col-span-9 w-[975px] h-[360px] people_scroll overflow-x-scroll border  border-none overflow-y-hidden mt-6">
              {!!movieperson ? (
                <div className="flex w-[1500px] gap-5 ms-6">
                  {movieperson.map((item, index) => {
                    return (
                      <div key={item.id} className=" rounded-md  shadow-xl ">
                        <img
                          src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.profile_path} `}
                        />
                        <Link to={`/populerpeople/${item.id}`} className="text-decoration-none">
                          <p className="trending_desciription m-1 text-center">
                            {item.name || item.original_name}
                          </p>
                        </Link>
                        <p className='text-xs p-3'>
                            {item.character}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <>
                  <p>Loading</p>
                </>
              )}
              
            </div>
            <div className="w-[280px] ms-8 ">
                <h2 className='ms-2 text-xl mb-3 mt-2 font-semibold'>Keywords</h2>
                {
                    !! keywordss ? (
                        <>
                           {
                            keywordss.map((item,index)=>(
                                <button className='bg-slate-300 m-1 p-1 rounded-sm'>{item.name}</button>
                            ))
                           }
                        </>
                    )
                    
                    :
                   ( 
                        <>
                         <p>No Keywords</p>
                        </>
                    )
                }
            </div>
           
        </div>
       
    </div>
  )
}
