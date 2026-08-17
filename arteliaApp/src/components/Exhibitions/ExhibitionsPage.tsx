import React from 'react'

export const ExhibitionsPage: React.FC = () => {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h1 className="font-display text-6xl md:text-7xl font-bold tracking-tighter mb-8">
          Exhibitions
        </h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mb-12">
          Upcoming and past exhibitions featuring our artists.
        </p>
        {/* Exhibitions list will be added here */}
        <div className="space-y-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-b border-surface-container-low pb-8">
              <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                Exhibition {item}
              </h3>
              <p className="font-body text-on-surface-variant">
                Exhibition description and dates will appear here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
