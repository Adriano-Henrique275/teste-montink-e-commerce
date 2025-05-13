'use client'
import { useEffect, useState } from 'react'
import ProductImages from './ProductImages'
import ProductVariants from './ProductVariants'
import ShippingChecker from './ShippingChecker'

const product = {
  title: 'Tênis Esportivo',
  price: 'R$ 299,90',
  images: [
    '/images/tenis-adidas.png',
    '/images/tenis-nike.png',
    '/images/tenis-recooh.png',
    '/images/tenis-verde.png',
  ],
  variants: {
    sizes: ['38', '39', '40', '41', '42'],
    colors: ['Preto', 'Branco', 'Azul', 'verde'],
  },
}

export default function ProductPage() {
  const [mainImage, setMainImage] = useState<string>(product.images[0])
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [cep, setCep] = useState<string>('')

  useEffect(() => {
    const savedData = JSON.parse(
      localStorage.getItem('productSelection') || '{}',
    )
    if (savedData && Date.now() - savedData.timestamp < 15 * 60 * 1000) {
      setSelectedSize(savedData.size)
      setSelectedColor(savedData.color)
    } else {
      localStorage.removeItem('productSelection')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'productSelection',
      JSON.stringify({
        size: selectedSize,
        color: selectedColor,
        timestamp: Date.now(),
      }),
    )
  }, [selectedSize, selectedColor])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-lg text-zinc-400 ">{product.price}</p>
      <ProductImages
        images={product.images}
        mainImage={mainImage}
        setMainImage={setMainImage}
      />
      <ProductVariants
        variants={product.variants}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <ShippingChecker cep={cep} setCep={setCep} />
    </div>
  )
}
