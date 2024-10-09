import React from 'react'
import { Zap, Shield, Smartphone, Video, Music, Download } from 'lucide-react'

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center mb-8 md:mb-0">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const Features = () => {
  return (
    <section id="features" className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Choose Our YouTube Shorts Downloader</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={<Zap className="h-12 w-12 text-blue-600" />}
            title="Fast Downloads"
            description="Download YouTube Shorts videos in seconds with our optimized process."
          />
          <Feature
            icon={<Shield className="h-12 w-12 text-blue-600" />}
            title="No Watermark"
            description="Get clean, watermark-free YouTube Shorts downloads every time."
          />
          <Feature
            icon={<Smartphone className="h-12 w-12 text-blue-600" />}
            title="Mobile Friendly"
            description="Our YouTube Shorts downloader works perfectly on iPhone and Android devices."
          />
          <Feature
            icon={<Video className="h-12 w-12 text-blue-600" />}
            title="HD Quality"
            description="Download YouTube Shorts in high definition, up to 1080p quality."
          />
          <Feature
            icon={<Music className="h-12 w-12 text-blue-600" />}
            title="Audio Extraction"
            description="Extract MP3 audio from YouTube Shorts with high-quality 320kbps option."
          />
          <Feature
            icon={<Download className="h-12 w-12 text-blue-600" />}
            title="Free to Use"
            description="Our YouTube Shorts downloader is completely free, with no hidden charges."
          />
        </div>
      </div>
    </section>
  )
}

export default Features