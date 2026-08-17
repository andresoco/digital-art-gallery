import React from 'react'

export const AboutPage: React.FC = () => {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      {/* The Curator's Vision */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            The Curator's Vision
          </h1>
          <p className="font-body text-lg text-on-surface-variant mb-6 leading-relaxed">
            Artelía exists in the negative space. We are not merely a gallery, but a curated silence where the voice of the emerging artist can resonate with clarity.
          </p>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
            Our mission is to unearth the profound and present it without distraction, honoring the tension between form, function, and raw emotion.
          </p>
          <div className="mt-12 w-32 h-[1px] bg-outline-variant"></div>
          <div className="mt-8">
            <p className="font-headline italic text-xl text-primary mb-2">
              "True curation is an act of removal."
            </p>
            <p className="font-body text-sm uppercase tracking-widest text-secondary">
              — The Founder
            </p>
          </div>
        </div>
        <div className="lg:col-span-7 relative">
          <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-[10s] hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2PUk95vyNhBaUFonB90VEHX3f_oiZvA-l5A5Dcl6Of_JDqnCy9JHOvlptGQM4pN1aEolRuA2o_TNeGhU-pxW36waE51842U8U2n_vgg-OVFwo-dMyYhQ7xrRuGs8y1okd4g4tU3_GbROcdiT-jgmmWQrvmCOFJ6uXhi3iZxaGo1YBSAljuALnRcohw9wGOMlLOwrvJXoPJeDlZ4OaIpudMVqYMMvREDD4hCaTHUR06Zi9Ax-fTR_4uw"
              alt="Gallery curator"
            />
          </div>
          <div className="absolute -bottom-16 -left-16 w-1/2 aspect-square bg-surface-container border border-surface-container-low z-10 hidden md:block">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0I14zefaTJJw_ViYoMyPqTCeiBPZ_VhyQBJG3cf1OHgZceXY3py2cMdPHSLShnd3uzO-deCAGzbJIx1eUZcWOQv39ERssMQ9Busy8mEeP9cU8nmyksWcVkanoUsE0j3h-5iAhQD1MUK1-VKts5Yv_t6QMdM8ZlYsTf8zt8-ANNpc_hDZeXtYZFlNsYc5d-4FSmHw8gfz3ryoEB41kfGGoy3B8FKB37DSlgGtGocP22yqRJB7fwRq_Qw"
              alt="Art detail"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Inquiry Form */}
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tighter mb-4">Inquiries</h2>
            <p className="font-body text-on-surface-variant mb-12">
              For private viewings, acquisitions, or artist representation requests.
            </p>
            <form className="space-y-10">
              <div className="relative floating-input">
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline text-primary font-body py-2 px-0 focus:ring-0 peer placeholder-transparent" 
                  id="name" 
                  placeholder="Name" 
                  required 
                  type="text"
                />
                <label className="absolute left-0 top-2 text-on-surface-variant font-body text-sm uppercase tracking-wider transition-all duration-300 pointer-events-none" htmlFor="name">
                  Full Name
                </label>
              </div>
              <div className="relative floating-input">
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline text-primary font-body py-2 px-0 focus:ring-0 peer placeholder-transparent" 
                  id="email" 
                  placeholder="Email" 
                  required 
                  type="email"
                />
                <label className="absolute left-0 top-2 text-on-surface-variant font-body text-sm uppercase tracking-wider transition-all duration-300 pointer-events-none" htmlFor="email">
                  Email Address
                </label>
              </div>
              <div className="relative floating-input pt-4">
                <textarea 
                  className="w-full bg-transparent border-0 border-b border-outline text-primary font-body py-2 px-0 focus:ring-0 peer placeholder-transparent resize-none" 
                  id="message" 
                  placeholder="Message" 
                  required 
                  rows={4}
                />
                <label className="absolute left-0 top-6 text-on-surface-variant font-body text-sm uppercase tracking-wider transition-all duration-300 pointer-events-none" htmlFor="message">
                  Your Message
                </label>
              </div>
              <button className="bg-primary text-on-primary px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-400" type="submit">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Minimalist Map & Details */}
          <div className="flex flex-col justify-between">
            <div className="bg-surface p-8 border border-outline-variant/15 shadow-[0_20px_40px_rgba(28,27,27,0.06)] h-64 relative overflow-hidden group">
              <div className="absolute inset-0 bg-surface-container-highest transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>
                  location_on
                </span>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">Location</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  14 Rue de la Paix<br/>75002 Paris, France
                </p>
              </div>
              <div>
                <h3 className="font-body text-sm font-bold uppercase tracking-widest text-primary mb-2">Hours</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  Tuesday — Saturday<br/>11:00 AM — 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
