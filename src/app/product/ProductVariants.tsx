interface ProductVariantsProps {
  variants: { sizes: string[]; colors: string[] }
  selectedSize: string
  setSelectedSize: (size: string) => void
  selectedColor: string
  setSelectedColor: (color: string) => void
}

const ProductVariants = ({
  variants,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
}: ProductVariantsProps) => {
  return (
    <div className="mt-4">
      <label className="block font-semibold">Tamanho:</label>
      <select
        className="border p-2 w-full sm:w-auto"
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        <option value="">Selecione</option>
        {variants.sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <label className="block font-semibold mt-4">Cor:</label>
      <select
        className="border p-2 w-full sm:w-auto"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="">Selecione</option>
        {variants.colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ProductVariants
