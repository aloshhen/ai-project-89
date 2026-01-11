import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Glass } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-bar-gradient">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            Вкус <span className="text-bar-accent">Совершенства</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Откройте для себя мир изысканных коктейлей и неповторимой атмосферы в Urban Bar
          </p>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-bar-accent text-white px-6 py-3 rounded-lg flex items-center"
            >
              Забронировать <ChevronRight className="ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-bar-accent text-bar-accent px-6 py-3 rounded-lg flex items-center"
            >
              Меню <Glass className="ml-2" />
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <img 
            src="https://source.unsplash.com/800x600/?cocktail,bar" 
            alt="Urban Bar" 
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero