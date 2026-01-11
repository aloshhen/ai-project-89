import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    'https://source.unsplash.com/800x600/?cocktail,bar,interior1',
    'https://source.unsplash.com/800x600/?cocktail,bar,interior2',
    'https://source.unsplash.com/800x600/?cocktail,bar,interior3',
    'https://source.unsplash.com/800x600/?cocktail,bar,interior4'
  ]

  return (
    <section id="gallery" className="py-24 bg-bar-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Наша <span className="text-bar-accent">Атмосфера</span></h2>
        <div className="grid md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image} 
                alt={`Urban Bar Gallery ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <Expand className="text-white" size={48} />
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-w-[90%] max-h-[90%] rounded-xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GallerySection