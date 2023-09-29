import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Filter from "../../Components/FilterComponent/Filter";
import { Link } from "react-router-dom";

export default function Movielist() {
  const [movielist, setMovielist] = useState([]);

  const params = useParams();
  let sorting = params.sort;

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${sorting}?language=en-US&page=1`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE4OWQ0NmFlOGMxNzJhNGU4NTRiZTczYTAxMjM3MCIsInN1YiI6IjY0OWVlMjhhMDkxZTYyMDBhZDU1MGZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9rKphMlbpDodR9VuNf0p0gA2PDi3HsBafnazcMFU8",
      },
    })
      .then((res) => {
        setMovielist(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sorting]);
  return (
   <div className="grid grid-cols-12">
        <div className="col-span-3">
            <Filter/>
        </div>
        <div className="col-span-9">
        <div className="container">
    <div className="grid grid-cols-5 gap-6 mt-4 ">

      {
        !!movielist ? 
        <>
        {
            movielist.map(
                ((item,
                index) => {
                  return (
                      <div key={index} className="col-span-1 my-4 ">
                        <div className="card drop-shadow-lg ">
                            <img className="rounded-lg" src={`	https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt={item.original_title}/>
                            <p className="text-center font-semibold mt-2 mx-1 "><Link to={`/movieinfo/${item.id}`} className='hover:text-blue-500'>{item.original_title}</Link></p>
                            <p className="text-center mt-1">{item.release_date}</p>
                        </div>
                      </div>
                  );
                })
              )
        }
        </>
        :
        <>Loading...</>
      }
    </div>
    </div>
        </div>
   </div>
  );
}
