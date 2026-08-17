import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className="min-h-screen bg-surface pt-32 pb-24 bg-gradient-to-br from-surface via-surface to-surface-container">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="mb-12">
          <span className="font-body text-sm uppercase tracking-widest text-secondary mb-4 block">
            Welcome to Artelía
          </span>
        </div>
        <h1 className="font-display text-6xl md:text-7xl font-bold tracking-tighter mb-8">
          Digital Art Gallery
        </h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
          Discover curated contemporary digital art from emerging artists around the world. Explore masterpieces, connect with creators, and be part of the digital art revolution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => navigate('/gallery')}
            className="bg-primary text-on-primary px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-400 active:scale-95 transform"
          >
            Explore Gallery
          </button>
          <button 
            onClick={() => navigate('/exhibitions')}
            className="border border-primary text-primary px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-surface-container transition-colors duration-400 active:scale-95 transform"
          >
            View Exhibitions
          </button>
        </div>
      </div>
    </section>
  )
}
