import React, { useEffect, useState } from 'react'
import './RandomGif.css'
import { Spinner } from './Spinner'
import axios from 'axios'

export const RandomGif = () => {

  const [src, setSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL;

  async function getData() {
    setIsLoading(true);
    try {
      let response = await axios.get(apiUrl + import.meta.env.VITE_API_KEY);
      setSrc(response.data.data.images.downsized_medium.url);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])

  function clickHandler() {
    getData();
  }

  return (
    <div className='Random-gif-container'>
      <div className="image-container">
        {
          isLoading ? <Spinner /> : <img src={src} key={src} alt="" />
        }
      </div>
      <div className="generate-btn-container">
        <button onClick={clickHandler}>Random Generate</button>
      </div>
    </div>
  )
}
