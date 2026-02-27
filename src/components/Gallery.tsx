
import Masonry from 'react-masonry-css';
import { ImageCard } from './ImageCard';

interface GalleryProps {
    images: { id: number, image: string }[];
    onImageClick: (index: number) => void;
}

export function Gallery({ images, onImageClick }: GalleryProps) {
    const breakpointColumnsObj = {
        default: 4,
        1536: 4,
        1280: 3,
        1024: 3,
        768: 2,
        640: 1
    };

    return (
        <div className="w-full px-4 md:px-8 py-12 bg-slate-900 min-h-screen">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto -ml-4"
                columnClassName="pl-4 bg-clip-padding"
            >
                {images.map((img, idx) => (
                    <ImageCard
                        key={img.id}
                        index={idx}
                        image={img.image}
                        onClick={() => onImageClick(idx)}
                    />
                ))}
            </Masonry>
        </div>
    );
}
