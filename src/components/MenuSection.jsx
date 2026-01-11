import React from 'react'
import { motion } from 'framer-motion'
import { Martini, Wine, Beer } from 'lucide-react'

function MenuSection() {
  const menuItems = [
    {
      icon: Martini,
      title: 'Коктейли',
      description: 'Авторские миксы от наших талантливых барменов'
    },
    {
      icon: Wine,
      title: 'Вина',
      description: 'Изысканная коллекция вин со всего мира'
    },
    {
      icon: Beer,
      title: 'Крафтовое Пиво',
      description: 'Лучшие сорта крафтового пива от локальных пивоварен'
    }
  ]

  return (
    <section id="menu" className="py-24 bg-bar-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Наше <span className="text-bar-accent">Меню</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-bar-primary p-6 rounded-xl text-center hover:shadow-2xl transition-all"
            >
              <item.icon className="mx-auto mb-4 text-bar-accent" size={64} />
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection