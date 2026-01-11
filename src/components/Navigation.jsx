import React from 'react'
import { Menu, Martini } from 'lucide-react'

function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-bar-secondary/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Martini className="text-bar-accent" size={32} />
          <span className="text-2xl font-bold">Urban Bar</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#menu" className="hover:text-bar-accent transition">Меню</a>
          <a href="#gallery" className="hover:text-bar-accent transition">Галерея</a>
          <a href="#reservation" className="hover:text-bar-accent transition">Бронирование</a>
        </div>
        <button className="md:hidden">
          <Menu className="text-bar-accent" size={24} />
        </button>
      </div>
    </nav>
  )
}

export default Navigation