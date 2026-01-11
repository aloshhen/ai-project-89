import React from 'react'
import { Martini, Facebook, Instagram, Twitter } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-bar-primary py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Martini className="text-bar-accent" size={32} />
            <span className="text-2xl font-bold">Urban Bar</span>
          </div>
          <p className="text-gray-300">Место, где каждый коктейль - это искусство, а каждый вечер - незабываемое приключение.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Контакты</h3>
          <ul className="space-y-2 text-gray-300">
            <li>📍 ул. Барная, 42</li>
            <li>📞 +7 (999) 123-45-67</li>
            <li>✉️ hello@urbanbar.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Мы в соцсетях</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-bar-accent hover:text-white transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-bar-accent hover:text-white transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-bar-accent hover:text-white transition">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        © 2024 Urban Bar. Все права защищены.
      </div>
    </footer>
  )
}

export default Footer