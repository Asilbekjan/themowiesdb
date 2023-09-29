import React from 'react'

export default function Footer() {
  return (
   <div className='bg-main-bg py-12'>
    <div className=' footer_container '>
        <div className="flex justify-between">
            <div className="col-3">
                <img className='w-[150px] ms-12' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />
                <button class="rounded-none bg-white px-5 py-2 mt-9 font-semibold text-teal-500">JOIN THE COMMUNITY</button>
            </div>
            <div className="col-2 mt-9">
                <h4  className='text-white text-xl mb-3'>THE BASICS</h4>
                <ul className='text-base'>
                    <li>
                        <a className='text-white' href="">About TMDB</a>
                    </li>
                    <li>
                        <a className='text-white' href="">Contact Us</a>
                    </li>
                    <li>
                        <a className='text-white' href="">Support Forums</a>
                    </li>
                    <li>
                        <a className='text-white' href="">API</a>
                    </li>
                    <li>
                        <a className='text-white' href="">System Status</a>
                    </li>
                </ul>
            </div>
            <div className="col-2 mt-9">
                <h4  className='text-white text-xl mb-3'>GET INVOLVED</h4>
                <ul className='text-base'>
                    <li>
                        <a className='text-white' href="">Contribution Bible</a>
                    </li>
                    <li>
                        <a className='text-white' href="">Add New Movie</a>
                    </li>
                    <li>
                        <a className='text-white' href="">SAdd New TV Show</a>
                    </li>
                </ul>
            </div>
            <div className="col-2 mt-9">
                <h4  className='text-white text-xl mb-3'>COMMUNITY</h4>
                <ul className='text-base'>
                    <li>
                        <a className='text-white' href="">Guidelines</a>
                    </li>
                    <li>
                        <a className='text-white' href="">Discussions</a>
                    </li>
                    <li>
                        <a className='text-white' href="">Leaderboard</a>
                    </li>
                    <li>
                        <a className='text-white' href="">Twitter</a>
                    </li>
                </ul>
            </div>
            <div className="col-2 mt-9">
                <h4  className='text-white text-xl mb-3'>LEGAL</h4>
                <ul className='text-base'>
                    <li>
                        <a className='text-white' href="">Terms of Use</a>
                    </li>
                    <li>
                        <a className='text-white' href="">API Terms of Use</a>
                    </li>
                    <li>
                        <a className='text-white' href="">Privacy Policy</a>
                    </li>
                    <li>
                        <a className='text-white' href="">DMCA Takedown Request</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   </div>
  )
}
