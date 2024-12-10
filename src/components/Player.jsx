import React from 'react'
import { assets, songsData } from '../assets/assets'
// import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    // const{seekBar, seekBg, playStatus, play, pause} = useContext(PlayerContext)
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img src={songsData[0].image} alt="" className="w-12" />
            <div>
                <p> {songsData[0].name} </p>
                <p> {songsData[0].desc.slice(0,12)} </p>
            </div>
        </div>
        <div className="flex flex-col items-center gap-1 m-auto">
            <div className="flex gap-4">
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                {/* <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                <img onClick={pause}  className='w-4 cursor-pointer' src={assets.pause_icon} alt="" /> */}
                <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
            </div>
            <div className='flex items-center gap-5'>
                <p>1.07</p>
                <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <h3 className="h-1 border-none w-20 bg-green-800 rounded-full"></h3>
                {/* <div ref={seekBg}  className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <h3 ref={seekBar}  className="h-1 border-none w-20 bg-green-800 rounded-full"></h3> */}
                </div>
                <p>3:17</p>
            </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-75">
            <img src={assets.plays_icon} alt="" className="w-4" />
            <img src={assets.mic_icon} alt="" className="w-4" />
            <img src={assets.queue_icon} alt="" className="w-4" />
            <img src={assets.speaker_icon} alt="" className="w-4" />
            <img src={assets.volume_icon} alt="" className="w-4" />
            <div className="w-20 bg-slate-50 h-1 rounded"></div>
            <img src={assets.mini_player_icon} alt="" className="w-4" />
            <img src={assets.zoom_icon} alt="" className="w-4" />
        </div>
    </div>
  )
}

export default Player