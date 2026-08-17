import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary dark:bg-tertiary-container text-on-primary dark:text-primary-fixed-dim w-full relative mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-20 w-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-between">
          <span className="font-headline text-3xl italic text-secondary-fixed">Artelía</span>
          <p className="font-body text-sm tracking-normal text-on-primary-container mt-12 md:mt-0">
            © 2024 Artelía Digital Gallery. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a className="font-body text-sm tracking-normal text-on-primary-container hover:text-secondary-fixed transition-colors duration-400 opacity-100 hover:opacity-80" href="#">
            Newsletter Signup
          </a>
          <a className="font-body text-sm tracking-normal text-on-primary-container hover:text-secondary-fixed transition-colors duration-400 opacity-100 hover:opacity-80" href="#">
            Press Kit
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <a className="font-body text-sm tracking-normal text-on-primary-container hover:text-secondary-fixed transition-colors duration-400 opacity-100 hover:opacity-80" href="#">
            Terms of Service
          </a>
          <a className="font-body text-sm tracking-normal text-on-primary-container hover:text-secondary-fixed transition-colors duration-400 opacity-100 hover:opacity-80" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
