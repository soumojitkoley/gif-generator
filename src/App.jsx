import React from 'react'
import './App.css'
import { RandomGif } from './Components/RandomGif'
import { SearchGif } from './Components/SearchGif'

export const App = () => {

  return (
    <div className='app-main-div'>
      <div className="header-title">
        <h2>Online Gif Generator</h2>
        <div className="gap1"></div>
      </div>
      <div className="content">
        <RandomGif />
        <div className="gap2"></div>
        <SearchGif />
      </div>
    </div>
  )
}
