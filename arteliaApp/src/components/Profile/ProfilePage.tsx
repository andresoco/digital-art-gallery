import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate()

  const handleContactClick = () => {
    // Navigate to about page which has the inquiry form
    navigate('/about')
  }

  const handleViewWorksClick = () => {
    // Navigate to gallery
    navigate('/gallery')
  }

  return (
    <main className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {/* Profile Image */}
          <div className="aspect-square bg-surface-container rounded overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=60"
              alt="Artist"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <span className="font-body text-sm uppercase tracking-widest text-secondary mb-4 block">
              Meet the Artist
            </span>
            <h1 className="font-display text-5xl font-bold tracking-tighter mb-4">
              Alex Rivera
            </h1>
            <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
              Award-winning digital artist and innovator exploring the intersection of technology, nature, and human emotion. With over 15 years of experience in digital media, Alex has exhibited globally and continues to push the boundaries of what's possible in the digital art space.
            </p>
            <div className="flex gap-4 mb-8">
              <button 
                onClick={handleViewWorksClick}
                className="bg-primary text-on-primary px-6 py-3 font-body text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-400 active:scale-95"
              >
                View Works
              </button>
              <button 
                onClick={handleContactClick}
                className="border border-primary text-primary px-6 py-3 font-body text-sm uppercase tracking-widest hover:bg-surface-container transition-colors duration-400 active:scale-95"
              >
                Contact Artist
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-body"><span className="font-bold text-primary">Location:</span> <span className="text-on-surface-variant">Barcelona, Spain</span></p>
              <p className="font-body"><span className="font-bold text-primary">Specialization:</span> <span className="text-on-surface-variant">Digital Painting, 3D Rendering, Animation</span></p>
              <p className="font-body"><span className="font-bold text-primary">Years Active:</span> <span className="text-on-surface-variant">2009 - Present</span></p>
            </div>
          </div>
        </div>

        {/* Artist Works */}
        <section className="mt-24">
          <h2 className="font-display text-4xl font-bold tracking-tighter mb-12">
            Featured Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Chromatic Harmony", image: "https://images.unsplash.com/photo-1578321207648-ed0e32e80d23?auto=format&fit=crop&w=500&q=60" },
              { id: 2, title: "Ethereal Visions", image: "https://images.unsplash.com/photo-1549887534-f2e90d5dd30b?auto=format&fit=crop&w=500&q=60" },
              { id: 3, title: "Digital Odyssey", image: "https://images.unsplash.com/photo-1578321207648-ed0e32e80d23?auto=format&fit=crop&w=500&q=60" },
              { id: 4, title: "Neon Resonance", image: "https://images.unsplash.com/photo-1549887534-f2e90d5dd30b?auto=format&fit=crop&w=500&q=60" },
              { id: 5, title: "Quantum Realms", image: "https://images.unsplash.com/photo-1578321207648-ed0e32e80d23?auto=format&fit=crop&w=500&q=60" },
              { id: 6, title: "Cosmic Dreams", image: "https://images.unsplash.com/photo-1549887534-f2e90d5dd30b?auto=format&fit=crop&w=500&q=60" },
            ].map((work) => (
              <div 
                key={work.id} 
                className="group cursor-pointer"
                onClick={() => navigate('/detail')}
              >
                <div className="aspect-square bg-surface-container rounded overflow-hidden mb-4">
                  <img 
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {work.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
