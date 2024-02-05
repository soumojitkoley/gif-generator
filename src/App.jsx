import React, { useEffect } from 'react'
import './App.css'
import { RandomGif } from './Components/RandomGif'
import { SearchGif } from './Components/SearchGif'

export const App = () => {

  useEffect(()=> {
    console.log(import.meta.env.VITE_API_KEY);
  })



  return (
    <div className='app-main-div'>
      <RandomGif/>
      <div className="gap"></div>
      <SearchGif/>
    </div>
  )
}
