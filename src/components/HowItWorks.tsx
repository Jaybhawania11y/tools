import React from 'react'

const Step = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center mb-8 md:mb-0">
    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-10 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">How to Download YouTube Shorts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Step
            number="1"
            title="Copy URL"
            description="Copy the URL of the YouTube Short you want to download from the YouTube app or website."
          />
          <Step
            number="2"
            title="Paste & Select Quality"
            description="Paste the URL into our YouTube Shorts downloader, then choose your preferred video quality or audio format."
          />
          <Step
            number="3"
            title="Download & Enjoy"
            description="Click 'Download Now' and save the YouTube Short to your device. It's that easy!"
          />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks