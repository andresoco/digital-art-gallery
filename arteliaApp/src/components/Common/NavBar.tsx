import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const NavBar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false)

  const handleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-surface-container-low shadow-sm shadow-on-surface/5">
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-none">
        <Link className="text-2xl font-headline font-bold tracking-tighter text-primary hover:opacity-70 transition-opacity" to="/">
          Artelía
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link className="font-headline tracking-tighter uppercase text-sm text-on-surface-variant hover:text-primary transition-colors duration-400" to="/gallery">
            Gallery
          </Link>
          <Link className="font-headline tracking-tighter uppercase text-sm text-on-surface-variant hover:text-primary transition-colors duration-400" to="/exhibitions">
            Exhibitions
          </Link>
          <Link className="font-headline tracking-tighter uppercase text-sm text-on-surface-variant hover:text-primary transition-colors duration-400" to="/profile">
            Artists
          </Link>
          <Link className="font-headline tracking-tighter uppercase text-sm text-on-surface-variant hover:text-primary transition-colors duration-400" to="/about">
            About
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <button 
            onClick={handleSearch}
            className="scale-100 active:scale-95 transition-transform hover:opacity-70 transition-opacity duration-400"
            aria-label="Search"
          >
            <span className="material-symbols-outlined text-primary">search</span>
          </button>
          <button 
            className="scale-100 active:scale-95 transition-transform hover:opacity-70 transition-opacity duration-400"
            aria-label="Shopping bag"
          >
            <span className="material-symbols-outlined text-primary">shopping_bag</span>
          </button>
        </div>
      </div>
      {showSearch && (
        <div className="px-8 py-4 border-t border-surface-container-low bg-surface/50">
          <input 
            type="text" 
            placeholder="Search artworks, artists..." 
            className="w-full bg-transparent border-0 border-b border-outline-variant text-primary font-body py-2 px-0 focus:ring-0 focus:border-secondary outline-none"
          />
        </div>
      )}
    </nav>
  )
}
