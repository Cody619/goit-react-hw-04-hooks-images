import React, { useEffect, useState, useRef } from 'react'
import Loader from 'react-loader-spinner'
import queryString from 'query-string'
import axios from 'axios'

import { Searchbar } from './components/Searchbar'
import { ImageGallery } from './components/ImageGallery'
import { Button } from './components/Button'
import { api_key } from './components/Services'
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [imgs, setImgs] = useState([])

  const currentPageRef = useRef(1)
  const lastSearchTextRef = useRef('')

  const fetchImg = (searchText) => {
    setIsLoading(true)

    currentPageRef.current = 1
    lastSearchTextRef.current = searchText

    const params = queryString.stringify({
      key: api_key,
      q: searchText,
      pege: 1,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    })

    axios.get('?' + params).then((response) => {
      setImgs(response.data.hits)
      setIsLoading(false)
    })
  }

  const loadMore = () => {
    setIsLoading(true)

    currentPageRef.current += 1

    const params = queryString.stringify({
      key: api_key,
      q: lastSearchTextRef.current,
      page: currentPageRef.current,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    })

    axios.get('?' + params).then((response) => {
      setIsLoading(false)
      setImgs((imgs) => [...imgs, ...response.data.hits])
    })
  }

  useEffect(() => {
    if (imgs.length !== 0 && currentPageRef.current !== 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [imgs])

  return (
    <div>
      <Searchbar onSubmit={fetchImg} />
      <ImageGallery imgs={imgs} />
      <div className="Center">
        {isLoading ? (
          <Loader type="BallTriangle" color="#00BFFF" height={25} width={25} />
        ) : null}
        {imgs.length !== 0 && !isLoading ? <Button onClick={loadMore} /> : null}
      </div>
    </div>
  )
}

export default App
