import React, { useEffect, useState, useRef } from 'react'
import Loader from 'react-loader-spinner'
import { Searchbar } from './components/Searchbar'
import { ImageGallery } from './components/ImageGallery'
import { Button } from './components/Button'
import { getImages } from './services/API'
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

    getImages(lastSearchTextRef.current, currentPageRef.current).then(
      (response) => {
        setImgs(response.data.hits)
        setIsLoading(false)
      },
    )
  }

  const loadMore = () => {
    setIsLoading(true)

    currentPageRef.current += 1

    getImages(lastSearchTextRef.current, currentPageRef.current).then(
      (response) => {
        setIsLoading(false)
        setImgs((imgs) => [...imgs, ...response.data.hits])
      },
    )
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
