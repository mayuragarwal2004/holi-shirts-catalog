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

        {/* logo in hero - positioned top left */}
        <div className="absolute top-4 left-4 z-20">
          <img src="/logo-anokhasa.png" alt="Anokhasa logo" className="h-20 md:h-28" />
        </div>

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
            Dialogue kadak. Style zabardast. Prices bilkul correct.
            <br />
            <span className="font-bold">Ab tee utha, Holi macha.</span>
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

      {/* Size Chart Section */}
      <section id="size-chart" className="relative z-10 bg-slate-900 border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Size Chart</h2>
            <p className="text-slate-400 mt-2">Choose the perfect fit — sizes for kids and adults.</p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
            {/* Kids sizes */}
            <div className="bg-slate-800/60 rounded-lg p-4 md:p-6 shadow-md border border-white/5">
              <h3 className="text-xl font-semibold mb-3">Kids</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="text-slate-300 font-medium py-2">Size</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-200">
                    {['18','20','22','24','26','28','30','32','34'].map((s) => (
                      <tr key={s} className="border-t border-white/5">
                        <td className="py-3">{s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Adults sizes */}
            <div className="bg-slate-800/60 rounded-lg p-4 md:p-6 shadow-md border border-white/5">
              <h3 className="text-xl font-semibold mb-3">Adults</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="text-slate-300 font-medium py-2">Chest Size</th>
                      <th className="text-slate-300 font-medium py-2">Label</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-200">
                    {[
                      ['36','Small'],
                      ['38','Medium'],
                      ['40','Large'],
                      ['42','XL'],
                      ['44','XXL'],
                    ].map(([size,label]) => (
                      <tr key={size} className="border-t border-white/5">
                        <td className="py-3">{size}</td>
                        <td className="py-3">{label}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-slate-500 bg-slate-950">
        {/* site logo placed at top of footer for branding */}
        <div className="mb-4 flex justify-center">
          <img
            src="/logo-anokhasa.png"
            alt="Anokhasa logo"
            className="h-12"
          />
        </div>

        <p className="font-medium tracking-wide">
          © 2026 Holi Designs. Made with colors.
        </p>

        {/* contact info added per request */}
        <div className="mt-6 space-y-1 text-slate-400">
          <p className="font-semibold">Reach Us Here:</p>
          <p>Sagar Agarwal</p>
          <p>+91 97307 99888</p>
          <p className="mt-2 italic">
            Before someone hits you with a kakdi balloon and steals your size… DM now! 😁💥
          </p>
        </div>
      </footer>

      <Lightbox
        images={catalogData.tshirts}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />

      {/* WhatsApp floating icon */}
      <a
        href="https://wa.me/919730799888?text=Hi!%0AI%27m%20interested%20in%20Holi%20T-Shirts%20%F0%9F%8E%A8"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="/WhatsApp.png"
          alt="WhatsApp"
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </a>
    </div>
  );
}

export default App;
