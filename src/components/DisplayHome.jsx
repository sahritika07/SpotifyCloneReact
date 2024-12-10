import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItems from './AlbumItems'
import { songsData } from '../assets/assets'
import SongItems from './SongItems'


const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <div className="mb-4">
      <h1 className="my-5 font-bold">Featured Charts</h1>
      <div className="flex overflow-auto">
      {albumsData.map((item,index)=>(<AlbumItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
      </div>
    </div>

    <div className="mb-4">
      <h1 className="my-5 font-bold">Today's Biggest Hits</h1>
      <div className="flex overflow-auto">
      {songsData.map((item,index)=>(<SongItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
      </div>
    </div>
    </>
  )
}

export default DisplayHome