import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link, useParams } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function PersonInfo() {
  const [peoplelist, setPeoplelist] = useState(null);
  const [peoplemovie, setPeoplemovie] = useState([]);

  const paramss = useParams();
  let ppeople = paramss.id;

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/person/${ppeople}?language=en-US`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE4OWQ0NmFlOGMxNzJhNGU4NTRiZTczYTAxMjM3MCIsInN1YiI6IjY0OWVlMjhhMDkxZTYyMDBhZDU1MGZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9rKphMlbpDodR9VuNf0p0gA2PDi3HsBafnazcMFU8",
      },
    })
      .then((ress) => {
        setPeoplelist(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios({
      method: "GET",
      url: ` https://api.themoviedb.org/3/person/${ppeople}/movie_credits?language=en-US`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE4OWQ0NmFlOGMxNzJhNGU4NTRiZTczYTAxMjM3MCIsInN1YiI6IjY0OWVlMjhhMDkxZTYyMDBhZDU1MGZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9rKphMlbpDodR9VuNf0p0gA2PDi3HsBafnazcMFU8",
      },
    })
      .then((res) => {
        setPeoplemovie(res.data.cast.slice(0, 8));
        console.log(peoplemovie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="mt-5">
      {!!peoplelist ? (
        <>
          <div className="grid grid-cols-12 gap-6 ">
            <div className="col-span-3 ms-5">
              <img
                className="rounded-lg"
                src={`https://www.themoviedb.org/t/p/w440_and_h660_face${peoplelist.profile_path}`}
                alt={peoplelist.original_title}
              />
            </div>
            <div className="col-span-8 ">
              <h1 className="text-4xl font-bold mt-2 mb-8">
                {peoplelist.name}
              </h1>
              <h1 className="text-xl font-semibold mb-2">Biography</h1>
              <p>{peoplelist.biography}</p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <h2 className="mt-5 ms-5 text-xl font-medium">Personal Info</h2>
              <p className="ms-5 text-lg font-normal">
                {peoplelist.known_for_department}
              </p>
              <h2 className="mt-5 ms-5 text-xl font-medium">Birthday</h2>
              <p className="ms-5 text-lg font-normal">{peoplelist.birthday}</p>
              <h2 className="mt-5 ms-5 text-xl font-medium">Place of Birth</h2>
              <p className="ms-5 text-lg font-normal">
                {peoplelist.place_of_birth}
              </p>
              <h2 className="mt-5 ms-5 text-xl font-medium">Also Known As</h2>
              <p className="w-28 ms-5 text-lg font-normal">
                {peoplelist.also_known_as}
              </p>
            </div>
            <div className="w-[800px] h-[300px] people_scroll overflow-x-scroll border  border-none overflow-y-hidden mt-6">
              {peoplemovie.length > 0 ? (
                <div className="flex w-[1500px] gap-5">
                  {peoplemovie.map((item, index) => {
                    return (
                      <div key={item.id} className="trending_card">
                         {
                           item.backdrop_path || item.profile_path ?
                           <img
                              src={`	https://www.themoviedb.org/t/p/w440_and_h660_face${
                                item.backdrop_path || item.profile_path
                              } `}
                            />
                            :
                             <img src="https://www.vanguardskin.com/wp-content/uploads/sites/110/2017/11/no_image.jpg" alt="" />
                            
                         }
                       
                        <Link to={`/movieinfo/${item.id}`} className="text-decoration-none">
                          <p className="trending_desciription m-1 text-center">
                            {item.title || item.original_name}
                          </p>
                        </Link>
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
          </div>
        </>
      ) : (
        <>
          <p>Loading</p>
        </>
      )}
    </div>
  );
}
