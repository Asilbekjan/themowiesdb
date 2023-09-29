import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function People() {

    const [people,setPeople]=useState([])

    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://api.themoviedb.org/3/person/popular?language=en-US&page=1',
            headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE4OWQ0NmFlOGMxNzJhNGU4NTRiZTczYTAxMjM3MCIsInN1YiI6IjY0OWVlMjhhMDkxZTYyMDBhZDU1MGZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9rKphMlbpDodR9VuNf0p0gA2PDi3HsBafnazcMFU8",
              },
        })
        .then(res=>{
            setPeople(res.data.results);
            console.log(res.data.results);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
  return (
    <div className='container'>
      <h1 className=" font-bold text-2xl text-black mt-10">Popular People</h1>

        <div className="sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5  grid grid-cols-5 gap-4 mt-4 mb-5">

            {
                (people.length>0) ? 
                <>
                    {
                        people.map((item,index)=>{
                            return(
                                <div key={item.id} className="col-span-1">
                                    <div className='bg-white drop-shadow-md '>
                                        <img className='w-full' src={`	https://www.themoviedb.org/t/p/w440_and_h660_face${item.profile_path}`} alt={item.name} />
                                        <p className='p-3 text-center sm:text-lg sm:font-semibold md:text-lg md:font-semibold lg:text-xl lg:font-semibold xl:text-2xl xl:font-semibold 2xl:text-2xl 2xl:font-bold'><Link to={`/populerpeople/${item.id}`}>{item.name}</Link></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
                :
                <>
                    <h2>Loading</h2>
                </>
            }
        </div>
    </div>
  )
}
