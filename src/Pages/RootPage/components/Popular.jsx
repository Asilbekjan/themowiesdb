import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import './Trending.css'
import Sliders from "../../../Components/Sliderbtn/Slider/Sliders";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Popular({ handle1 }) {
  useEffect(() => {
    getToday();
  }, []);

  const [today, setToday] = useState([]);


  function getToday() {
    axios({
      method: "GET",
      url: 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE4OWQ0NmFlOGMxNzJhNGU4NTRiZTczYTAxMjM3MCIsInN1YiI6IjY0OWVlMjhhMDkxZTYyMDBhZDU1MGZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9rKphMlbpDodR9VuNf0p0gA2PDi3HsBafnazcMFU8",
      },
    })
      .then((ress) => {
        setToday(ress.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getWeek() {
    axios({
      method: "GET",
      url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzE4OWQ0NmFlOGMxNzJhNGU4NTRiZTczYTAxMjM3MCIsInN1YiI6IjY0OWVlMjhhMDkxZTYyMDBhZDU1MGZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9rKphMlbpDodR9VuNf0p0gA2PDi3HsBafnazcMFU8",
      },
    })
      .then((ress) => {
        setToday(ress.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container mt-">
      <Sliders handle11={getToday} handle22={getWeek}/>
      {
        <Carousel
        swipeable={true}
        arrows={false}
        responsive={responsive}
      >
        {today &&
          today.map((item, index) => {
            return (
              <div key={item.id} className="trending_card mt-3">
                {
                    item.backdrop_path ?
                <img src={`	https://www.themoviedb.org/t/p/w440_and_h660_face${item.backdrop_path}`} />
                :
                <img src="https://www.vanguardskin.com/wp-content/uploads/sites/110/2017/11/no_image.jpg" alt="" />


                }
                <Link to={`/movieinfo/${item.id}`} className="text-decoration-none">
                  <p className="trending_desciription m-1">
                    {item.title || item.original_name}
                  </p>
                </Link>
                <p className="m-1">
                  {item.release_date || item.first_air_date}
                </p>
              </div>
            );
          })}
      </Carousel>
      }
    </div>
  )
}
