import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Artwork {
  id: number
  title: string
  artist: string
  price: number
  image: string
}

const mockArtworks: Artwork[] = [
  { id: 1, title: "Abstract Dreams", artist: "Artist A", price: 2500, image: "https://images.unsplash.com/photo-1578321207648-ed0e32e80d23?auto=format&fit=crop&w=600&q=60" },
  { id: 2, title: "Digital Landscape", artist: "Artist B", price: 3200, image: "https://images.unsplash.com/photo-1549887534-f2e90d5dd30b?auto=format&fit=crop&w=600&q=60" },
  { id: 3, title: "Chromatic Waves", artist: "Artist C", price: 2800, image: "https://images.unsplash.com/photo-1578321207648-ed0e32e80d23?auto=format&fit=crop&w=600&q=60" },
  { id: 4, title: "Ethereal Forms", artist: "Artist D", price: 4100, image: "https://images.unsplash.com/photo-1549887534-f2e90d5dd30b?auto=format&fit=crop&w=600&q=60" },
  { id: 5, title: "Neon Genesis", artist: "Artist E", price: 3500, image: "https://images.unsplash.com/photo-1578321207648-ed0e32e80d23?auto=format&fit=crop&w=600&q=60" },
  { id: 6, title: "Cosmic Resonance", artist: "Artist F", price: 2900, image: "https://images.unsplash.com/photo-1549887534-f2e90d5dd30b?auto=format&fit=crop&w=600&q=60" },
]

export const GalleryPage: React.FC = () => {
  const navigate = useNavigate()
  const [filteredArtworks] = useState<Artwork[]>(mockArtworks)

  return (
    <main className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="mb-16">
          <span className="font-body text-sm uppercase tracking-widest text-secondary mb-4 block">
            Our Collection
          </span>
          <h1 className="font-display text-6xl md:text-7xl font-bold tracking-tighter mb-8">
            Gallery
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mb-12">
            Explore our curated collection of contemporary digital artworks from emerging and established artists.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          <button className="px-6 py-2 bg-primary text-on-primary font-body text-sm uppercase tracking-wider whitespace-nowrap hover:bg-secondary transition-colors">
            All Works
          </button>
          <button className="px-6 py-2 border border-primary text-primary font-body text-sm uppercase tracking-wider whitespace-nowrap hover:bg-surface-container transition-colors">
            Digital
          </button>
          <button className="px-6 py-2 border border-primary text-primary font-body text-sm uppercase tracking-wider whitespace-nowrap hover:bg-surface-container transition-colors">
            Animation
          </button>
          <button className="px-6 py-2 border border-primary text-primary font-body text-sm uppercase tracking-wider whitespace-nowrap hover:bg-surface-container transition-colors">
            3D Art
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div 
              key={artwork.id} 
              className="group cursor-pointer"
              onClick={() => navigate('/detail')}
            >
              <div className="aspect-square bg-surface-container rounded overflow-hidden mb-4 relative">
                <img 
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
              <h3 className="font-headline text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {artwork.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant mb-2">
                by {artwork.artist}
              </p>
              <p className="font-headline text-sm font-bold text-secondary">
                ${artwork.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
