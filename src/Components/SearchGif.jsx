import React, { useState } from 'react'
import './SearchGif.css'
import { Spinner } from './Spinner'
import axios from 'axios'

export const SearchGif = (props) => {

  const [tag, setTag] = useState('');

  function changeHandler(event) {
    setTag(event.target.value)
  }

  const [src, setSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL;

  async function getData(topic) {
    setIsLoading(true);
    try {
      let response = await axios.get(apiUrl + import.meta.env.VITE_API_KEY + `&tag=${topic}`);
      setSrc(response.data.data.images.downsized.url);
      console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  }


  function clickHandler(str) {
    getData(str);
  }


  return (
    <div className='search-gif-container'>
      <div className="generate-btn-container-search">
        <input onChange={changeHandler} placeholder='Search here' type="text" name="" id="" />
        <button onClick={() => clickHandler(tag)}>Generate</button>
      </div>
      {
        src !== '' ?
          <div className="image-container">
            {
              isLoading ? <Spinner /> : <img src={src} key={src} alt="" />
            }
          </div>
          :
          <div></div>
      }
    </div>
  )
}