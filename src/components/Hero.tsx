import React, { useState } from 'react'
import { Search, Download, Image } from 'lucide-react'

const Hero = () => {
  const [url, setUrl] = useState('')
  const [videoId, setVideoId] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [selectedQuality, setSelectedQuality] = useState('mp4')

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const handleSearch = () => {
    setIsSearching(true)
    const id = url.split('v=')[1]?.split('&')[0] || url.split('/').pop()
    if (id) {
      setVideoId(id)
    }
    setIsSearching(false)
  }

  const handleDownload = () => {
    if (selectedQuality === 'thumbnail') {
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      window.open(thumbnailUrl, '_blank')
    } else {
      alert(`Downloading ${selectedQuality} version...`)
    }
  }

  const qualityOptions = [
    { value: 'mp4', label: 'MP4 Video' },
    { value: '1080p', label: 'HD 1080p' },
    { value: '720p', label: 'HD 720p' },
    { value: '480p', label: '480p' },
    { value: '360p', label: '360p' },
    { value: '240p', label: '240p' },
    { value: '144p', label: '144p' },
    { value: 'mp3', label: 'MP3 320kbps' },
    { value: 'thumbnail', label: 'Thumbnail' },
  ]

  return (
    <div className="bg-blue-600 text-white py-10 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">ZedBazaar YouTube Shorts Downloader</h1>
        <p className="text-lg md:text-xl mb-8">Download YouTube Shorts videos without watermark in HD quality</p>
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row mb-4">
            <input
              type="text"
              placeholder="Paste YouTube Shorts URL here"
              className="flex-grow px-4 py-2 rounded-t-lg md:rounded-l-lg md:rounded-t-none text-gray-800 mb-2 md:mb-0"
              value={url}
              onChange={handleUrlChange}
            />
            <button 
              className="bg-yellow-400 text-blue-800 font-bold py-2 px-6 rounded-b-lg md:rounded-r-lg md:rounded-b-none hover:bg-yellow-300 transition duration-300 flex items-center justify-center"
              onClick={handleSearch}
            >
              {isSearching ? (
                <span className="animate-spin mr-2"><Search size={20} /></span>
              ) : (
                <Search size={20} />
              )}
              <span className="ml-2">Get Video</span>
            </button>
          </div>
          {videoId && (
            <>
              <div className="mb-4 relative">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="YouTube Shorts thumbnail"
                  className="w-full rounded-lg shadow-lg"
                />
                <a
                  href={`https://www.youtube.com/shorts/${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
                >
                  <svg className="w-16 h-16 md:w-20 md:h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
              <div className="mb-4">
                <select
                  className="w-full px-4 py-2 rounded-lg text-gray-800"
                  value={selectedQuality}
                  onChange={(e) => setSelectedQuality(e.target.value)}
                >
                  {qualityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <button 
                className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-400 transition duration-300 flex items-center justify-center w-full"
                onClick={handleDownload}
              >
                {selectedQuality === 'thumbnail' ? <Image size={20} /> : <Download size={20} />}
                <span className="ml-2">
                  {selectedQuality === 'thumbnail' ? 'Download Thumbnail' : 'Download Now'}
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero