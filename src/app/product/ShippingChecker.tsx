import { fetchAddress } from '@/lib/fetchAddress'
import { useEffect, useState } from 'react'

interface ShippingCheckerProps {
  cep: string
  setCep: (cep: string) => void
}

const ShippingChecker = ({ cep, setCep }: ShippingCheckerProps) => {
  const [address, setAddress] = useState<string>('')

  useEffect(() => {
    const getAddress = async () => {
      const result = await fetchAddress(cep)
      setAddress(result)
    }

    if (cep.length === 8) getAddress()
  }, [cep])

  return (
    <div className="mt-4">
      <label className="block font-semibold text-gray-300">CEP:</label>
      <input
        type="text"
        className="bg-gray-800 text-white border border-gray-700 p-3 w-full sm:w-auto rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 autofill:bg-gray-800 autofill:text-white"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        autoComplete="off"
      />
      {address && <p className="text-lg mt-3 text-gray-400">{address}</p>}
    </div>
  )
}

export default ShippingChecker
