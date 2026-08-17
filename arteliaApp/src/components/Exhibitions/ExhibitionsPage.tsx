import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Exhibition {
  id: number
  title: string
  date: string
  location: string
  description: string
  image: string
  status: 'upcoming' | 'current' | 'past'
}

const mockExhibitions: Exhibition[] = [
  {
    id: 1,
    title: "Digital Renaissance 2026",
    date: "January - March 2026",
    location: "Paris, France",
    description: "A groundbreaking collection exploring the intersection of classical art and digital innovation.",
    image: "https://images.unsplash.com/photo-1578321207648-ed0e32e80d23?auto=format&fit=crop&w=800&q=60",
    status: "current"
  },
  {
    id: 2,
    title: "Neon Futures",
    date: "April - June 2026",
    location: "Berlin, Germany",
    description: "Contemporary digital artists push the boundaries of what's possible in the medium.",
    image: "https://images.unsplash.com/photo-1549887534-f2e90d5dd30b?auto=format&fit=crop&w=800&q=60",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Ethereal Landscapes",
    date: "October - December 2025",
    location: "New York, USA",
    description: "Exploring nature through a digital lens - a retrospective of landscape art evolution.",
    image: "https://images.unsplash.com/photo-1578321207648-ed0e32e80d23?auto=format&fit=crop&w=800&q=60",
    status: "past"
  },
]

export const ExhibitionsPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <main className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="mb-16">
          <span className="font-body text-sm uppercase tracking-widest text-secondary mb-4 block">
            Featured Events
          </span>
          <h1 className="font-display text-6xl md:text-7xl font-bold tracking-tighter mb-8">
            Exhibitions
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mb-12">
            Immerse yourself in our upcoming and past exhibitions showcasing the best in contemporary digital art.
          </p>
        </div>

        {/* Exhibitions Grid */}
        <div className="space-y-12">
          {mockExhibitions.map((exhibition) => (
            <div 
              key={exhibition.id} 
              className="group cursor-pointer border-b border-surface-container-low pb-12 hover:opacity-80 transition-opacity"
              onClick={() => navigate('/detail')}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="aspect-square bg-surface-container rounded overflow-hidden">
                    <img 
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 text-xs uppercase tracking-widest font-bold ${
                        exhibition.status === 'current' ? 'bg-secondary text-on-secondary' :
                        exhibition.status === 'upcoming' ? 'bg-primary text-on-primary' :
                        'bg-surface-container text-on-surface-variant'
                      }`}>
                        {exhibition.status === 'current' ? 'Current' : 
                         exhibition.status === 'upcoming' ? 'Upcoming' : 'Past'}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                      {exhibition.title}
                    </h3>
                    <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                      {exhibition.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">
                        Dates
                      </h4>
                      <p className="font-body text-on-surface-variant">
                        {exhibition.date}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">
                        Location
                      </h4>
                      <p className="font-body text-on-surface-variant">
                        {exhibition.location}
                      </p>
                    </div>
                  </div>

                  <button className="mt-6 self-start bg-primary text-on-primary px-8 py-3 font-body text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-400">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
