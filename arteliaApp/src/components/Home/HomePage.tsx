import React from 'react'

export const HomePage: React.FC = () => {
  return (
    <section className="min-h-screen bg-surface pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h1 className="font-display text-6xl md:text-7xl font-bold tracking-tighter mb-8">
          Digital Art Gallery
        </h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mb-12">
          Discover curated contemporary digital art from emerging artists around the world.
        </p>
        <button className="bg-primary text-on-primary px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-400">
          Explore Gallery
        </button>
      </div>
    </section>
  )
}
