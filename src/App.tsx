import { useState } from 'react';
import { Gallery } from './components/Gallery';
import { Lightbox } from './components/Lightbox';
import { motion } from 'framer-motion';
import catalogData from './data/catalog.json';

function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Smooth scroll to catalog
  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-pink-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center z-10 space-y-8 max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide uppercase text-slate-300"
          >
            Exclusive Print Collection
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-gradient-animate">
              Holi 2026
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Discover a vibrant collection of {catalogData.tshirts.length} stunning t-shirt designs, crafted for the festival of colors.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCatalog}
            className="mt-12 px-8 py-4 bg-white text-slate-900 font-bold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-shadow duration-300 text-lg"
          >
            Explore the Catalog
          </motion.button>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="catalog" className="relative z-10 bg-slate-900 border-t border-white/5 pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
            The Collection
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-500 mt-4 rounded-full" />
        </div>

        <div className="max-w-[1600px] mx-auto">
          <Gallery
            images={catalogData.tshirts}
            onImageClick={(index) => setLightboxIndex(index)}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-slate-500 bg-slate-950">
        <p className="font-medium tracking-wide">
          © 2026 Holi Designs. Made with colors.
        </p>
      </footer>

      <Lightbox
        images={catalogData.tshirts}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </div>
  );
}

export default App;
