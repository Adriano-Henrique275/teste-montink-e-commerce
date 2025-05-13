import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">
        Bem-vindo ao Nosso E-commerce!
      </h1>
      <p className="text-md sm:text-lg text-gray-300 mt-4 max-w-md">
        Aqui você encontra os melhores produtos com qualidade garantida. Explore
        agora!
      </p>

      <Image
        src="/images/welcome.png"
        width={400}
        height={400}
        alt="Boas-vindas"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-6 object-contain"
      />

      <Link href="/product">
        <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-500 transition-all">
          Ver Produtos
        </button>
      </Link>
    </div>
  )
}
