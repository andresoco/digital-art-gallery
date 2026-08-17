import React from 'react'

export const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-surface-container-low shadow-sm shadow-on-surface/5">
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-none">
        <a className="text-2xl font-headline font-bold tracking-tighter text-primary" href="/">
          Artelía
        </a>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-headline tracking-tighter uppercase text-sm text-on-surface-variant hover:text-primary transition-colors duration-400" href="/artists">
            Artists
          </a>
          <a className="font-headline tracking-tighter uppercase text-sm text-on-surface-variant hover:text-primary transition-colors duration-400" href="/collections">
            Collections
          </a>
          <a className="font-headline tracking-tighter uppercase text-sm text-on-surface-variant hover:text-primary transition-colors duration-400" href="/about">
            Journal
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <button className="scale-100 active:scale-95 transition-transform hover:opacity-70 transition-opacity duration-400">
            <span className="material-symbols-outlined text-primary">search</span>
          </button>
          <button className="scale-100 active:scale-95 transition-transform hover:opacity-70 transition-opacity duration-400">
            <span className="material-symbols-outlined text-primary">shopping_bag</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
