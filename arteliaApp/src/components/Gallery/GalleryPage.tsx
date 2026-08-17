import React from 'react'

export const GalleryPage: React.FC = () => {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h1 className="font-display text-6xl md:text-7xl font-bold tracking-tighter mb-8">
          Gallery
        </h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mb-12">
          Explore our curated collection of contemporary digital artworks.
        </p>
        {/* Gallery Grid will be added here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-surface-container rounded">
              <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                Artwork {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
