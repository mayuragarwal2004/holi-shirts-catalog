
import { motion } from 'framer-motion';

interface ImageCardProps {
    image: string;
    onClick: () => void;
    index: number;
}

export function ImageCard({ image, onClick, index }: ImageCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative mb-4 cursor-pointer overflow-hidden rounded-xl shadow-lg group"
            onClick={onClick}
        >
            <img
                src={image}
                alt={`Holi T-Shirt ${index}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold flex items-center gap-2">
                        View Design
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
