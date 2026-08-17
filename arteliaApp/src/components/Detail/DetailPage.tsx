import React from 'react'

export const DetailPage: React.FC = () => {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Artwork Image */}
          <div className="lg:col-span-7">
            <div className="aspect-square bg-surface-container rounded overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                Artwork Image
              </div>
            </div>
            {/* Image Gallery/Thumbnails could go here */}
          </div>

          {/* Artwork Details */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h1 className="font-display text-5xl font-bold tracking-tighter mb-4">
              Artwork Title
            </h1>
            
            <p className="font-body text-lg text-on-surface-variant mb-8">
              by <span className="font-bold text-primary">Artist Name</span>
            </p>

            <div className="border-b border-surface-container-low py-6 mb-6">
              <p className="font-body text-on-surface-variant leading-relaxed mb-4">
                Artwork description and details will appear here. This section can include information about the creation process, inspiration, and artistic vision.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-6 mb-12 pb-12 border-b border-surface-container-low">
              <div>
                <h3 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">
                  Dimensions
                </h3>
                <p className="font-body text-on-surface-variant">1920 x 1080 px</p>
              </div>
              <div>
                <h3 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">
                  Year
                </h3>
                <p className="font-body text-on-surface-variant">2024</p>
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
              <button className="bg-primary text-on-primary px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-400 w-full">
                Inquire about Artwork
              </button>
              <button className="border border-primary text-primary px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-surface-container transition-colors duration-400 w-full">
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Related Artworks */}
        <section className="mt-32 pt-12 border-t border-surface-container-low">
          <h2 className="font-display text-4xl font-bold tracking-tighter mb-12">
            More from this Artist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-surface-container rounded">
                <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                  Related Work {item}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
