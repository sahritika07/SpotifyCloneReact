import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='mt-6 mb-3 ml-6' >
            <img src={assets.spotify_logo} alt="" className="w-8" />
        </div>
       <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
            <img src={assets.home_icon} alt="" className="w-6" />
            <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img src={assets.search_icon} alt="" className="w-6" />
            <p className="font-bold">Search</p>
        </div>
       </div>

       <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img className='w-8' src={assets.stack_icon} alt="" />
                <p className="font-semibold">Your Library</p>
            </div>
            <div className='flex items-center gap-3'>
                <img src={assets.arrow_icon} alt="" className="w-5" />
                <img src={assets.plus_icon} alt="" className="w-5" />
            </div>
        </div>
        <div className="p-3 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-3">
                <h1>Create your first playlist</h1>
                <p className='font-light '>it's easy we'll help you</p>
                <button className=" px-4 py-1.5 text=[15px] text-black bg-white rounded-full mt-3">Create Playlist</button>
        </div>
        <div className="p-3 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-3 mt-4">
                <h1>Let's find some podcasts to follow</h1>
                <p className='font-light '>We'll keep you updated on new episodes</p>
                <button className=" px-4 py-1.5 text=[15px] text-black bg-white rounded-full mt-3">Browse podcasts </button>
        </div>
       </div>
    </div>
  )
}

export default Sidebar