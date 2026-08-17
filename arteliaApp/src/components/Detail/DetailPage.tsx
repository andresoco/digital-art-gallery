import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const DetailPage: React.FC = () => {
  const navigate = useNavigate()
  const [showShareMenu, setShowShareMenu] = useState(false)

  const handleInquire = () => {
    // Navigate to about page with form
    navigate('/about')
  }

  const handleShare = () => {
    setShowShareMenu(!showShareMenu)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }

  return (
    <main className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Artwork Image */}
          <div className="lg:col-span-7">
            <div className="aspect-square bg-surface-container rounded overflow-hidden shadow-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1578321207648-ed0e32e80d23?auto=format&fit=crop&w=1000&q=60"
                alt="Artwork"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image Gallery/Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <button 
                  key={item}
                  className="aspect-square bg-surface-container rounded overflow-hidden hover:opacity-70 transition-opacity cursor-pointer"
                >
                  <img 
                    src={`https://images.unsplash.com/photo-1578321207648-ed0e32e80d23?auto=format&fit=crop&w=300&q=60`}
                    alt={`Thumbnail ${item}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Artwork Details */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="font-body text-sm uppercase tracking-widest text-secondary mb-4">
              Masterpiece
            </span>
            <h1 className="font-display text-5xl font-bold tracking-tighter mb-4">
              Chromatic Harmony
            </h1>
            
            <p className="font-body text-lg text-on-surface-variant mb-8">
              by <span className="font-bold text-primary cursor-pointer hover:text-secondary">Alex Rivera</span>
            </p>

            <div className="border-b border-surface-container-low py-6 mb-6">
              <p className="font-body text-on-surface-variant leading-relaxed mb-4">
                A stunning exploration of color relationships and digital form. This piece combines classical composition principles with cutting-edge digital techniques, creating a dynamic interplay between order and chaos.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-6 mb-12 pb-12 border-b border-surface-container-low">
              <div>
                <h3 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">
                  Dimensions
                </h3>
                <p className="font-body text-on-surface-variant">3840 x 2160 px</p>
              </div>
              <div>
                <h3 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">
                  Year
                </h3>
                <p className="font-body text-on-surface-variant">2025</p>
              </div>
              <div>
                <h3 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">
                  Medium
                </h3>
                <p className="font-body text-on-surface-variant">Digital Art</p>
              </div>
              <div>
                <h3 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">
                  Price
                </h3>
                <p className="font-body text-on-surface-variant">$5,000 USD</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <button 
                onClick={handleInquire}
                className="bg-primary text-on-primary px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-400 w-full active:scale-95"
              >
                Inquire about Artwork
              </button>
              <div className="relative">
                <button 
                  onClick={handleShare}
                  className="border border-primary text-primary px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-surface-container transition-colors duration-400 w-full active:scale-95"
                >
                  Share
                </button>
                {showShareMenu && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-surface border border-surface-container-low shadow-lg z-10">
                    <button 
                      onClick={copyToClipboard}
                      className="w-full text-left px-4 py-3 text-primary font-body text-sm hover:bg-surface-container transition-colors"
                    >
                      Copy Link
                    </button>
                    <a 
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-primary font-body text-sm hover:bg-surface-container transition-colors"
                    >
                      Share on Twitter
                    </a>
                    <a 
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-primary font-body text-sm hover:bg-surface-container transition-colors"
                    >
                      Share on Facebook
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Artworks */}
        <section className="mt-32 pt-12 border-t border-surface-container-low">
          <h2 className="font-display text-4xl font-bold tracking-tighter mb-12">
            More from this Artist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Abstract Forms",
              "Digital Dreams",
              "Neon Visions",
              "Ethereal Landscapes"
            ].map((title, idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="aspect-square bg-surface-container rounded overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1549887534-f2e90d5dd30b?auto=format&fit=crop&w=400&q=60"
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
