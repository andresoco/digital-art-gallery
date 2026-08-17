import React from 'react'

export const ProfilePage: React.FC = () => {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Profile Image */}
          <div className="aspect-square bg-surface-container rounded">
            <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
              Profile Image
            </div>
          </div>

          {/* Profile Info */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <h1 className="font-display text-5xl font-bold tracking-tighter mb-4">
              Artist Name
            </h1>
            <p className="font-body text-lg text-on-surface-variant mb-6">
              Artist bio and information will appear here.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-6 py-3 font-body text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-400">
                View Works
              </button>
              <button className="border border-primary text-primary px-6 py-3 font-body text-sm uppercase tracking-widest hover:bg-surface-container transition-colors duration-400">
                Contact Artist
              </button>
            </div>
          </div>
        </div>

        {/* Artist Works */}
        <section className="mt-24">
          <h2 className="font-display text-4xl font-bold tracking-tighter mb-12">
            Featured Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-surface-container rounded">
                <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                  Work {item}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
