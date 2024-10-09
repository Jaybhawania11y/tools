import React from 'react'

const FAQItem = ({ question, answer }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
)

const FAQ = () => {
  const faqs = [
    {
      question: "Is it legal to download YouTube Shorts?",
      answer: "Downloading YouTube Shorts for personal use is generally acceptable. However, redistributing or using the content commercially without permission may violate copyright laws. Always respect the creator's rights."
    },
    {
      question: "Can I download YouTube Shorts on my iPhone or Android device?",
      answer: "Yes, our YouTube Shorts downloader works on both iPhone and Android devices. Simply use your mobile browser to access our website and download your favorite Shorts."
    },
    {
      question: "How do I download YouTube Shorts in HD quality?",
      answer: "To download YouTube Shorts in HD, paste the video URL into our downloader, then select the highest quality option available (usually 720p or 1080p) before clicking the download button."
    },
    {
      question: "Is your YouTube Shorts downloader really free?",
      answer: "Yes, our YouTube Shorts downloader is completely free to use. There are no hidden charges or premium features that require payment."
    },
    {
      question: "Can I download just the audio from a YouTube Short?",
      answer: "Absolutely! Our tool allows you to extract audio from YouTube Shorts. Simply select the MP3 option when choosing the download quality."
    }
  ]

  return (
    <section id="faq" className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ