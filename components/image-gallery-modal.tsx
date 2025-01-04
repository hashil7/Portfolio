import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight,} from 'lucide-react'

interface ImageGalleryModalProps {
  images: string[]
  alt: string
}

export function ImageGalleryModal({ images, alt }: ImageGalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">View Screenshots</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-full flex justify-center items-center">
        
          <Image
            src={images[currentImageIndex]}
            alt={`${alt} - Screenshot ${currentImageIndex + 1}`}
            width={400}
            height={50}
            objectFit='contain'
            className="rounded shadow-md"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next image</span>
          </Button>
        
        <div className="mt-2 text-center">
          {currentImageIndex + 1} / {images.length}
        </div>
      </DialogContent>
    </Dialog>
  )
}

