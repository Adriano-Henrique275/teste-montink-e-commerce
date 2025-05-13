import Image from 'next/image'

interface ProductImagesProps {
  images: string[]
  mainImage: string
  setMainImage: (img: string) => void
}

const ProductImages = ({
  images,
  mainImage,
  setMainImage,
}: ProductImagesProps) => {
  return (
    <div className="mt-4 flex flex-col items-center">
      <Image
        src={mainImage}
        width={512}
        height={512}
        alt="Produto"
        className="w-full max-w-xs sm:max-w-md md:max-w-lg object-contain"
      />
      <div className="flex gap-2 mt-2 flex-wrap justify-center">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            width={200}
            height={200}
            alt="Miniatura"
            className="w-16 cursor-pointer hover:opacity-75 object-contain"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImages
