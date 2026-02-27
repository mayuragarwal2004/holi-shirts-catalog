import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
    images: { id: number, image: string }[];
    currentIndex: number | null;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (currentIndex === null) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
            if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, images.length, onClose, onNavigate]);

    if (currentIndex === null) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-50 rounded-full bg-black/50 hover:bg-black/80"
                >
                    <X size={32} />
                </button>

                <button
                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); onNavigate((currentIndex - 1 + images.length) % images.length); }}
                    className="absolute left-6 p-3 text-white/70 hover:text-white transition-all hover:scale-110 z-50 rounded-full bg-black/50 hover:bg-black/80"
                >
                    <ChevronLeft size={48} />
                </button>

                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative max-w-5xl max-h-[90vh] w-full px-16"
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                    <img
                        src={images[currentIndex].image}
                        alt={`Design ${images[currentIndex].id}`}
                        className="w-full h-full object-contain mx-auto rounded-lg shadow-2xl"
                    />
                    <div className="absolute bottom-[-40px] left-0 right-0 text-center text-white/70 font-medium">
                        Design {currentIndex + 1} of {images.length}
                    </div>
                </motion.div>

                <button
                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); onNavigate((currentIndex + 1) % images.length); }}
                    className="absolute right-6 p-3 text-white/70 hover:text-white transition-all hover:scale-110 z-50 rounded-full bg-black/50 hover:bg-black/80"
                >
                    <ChevronRight size={48} />
                </button>
            </motion.div>
        </AnimatePresence>
    );
}
