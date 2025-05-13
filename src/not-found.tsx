import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center p-6">
      <h1 className="text-5xl sm:text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mt-4">
        Página não encontrada
      </h2>
      <p className="text-gray-400 mt-2 max-w-md">
        O link que você tentou acessar não existe ou foi removido. Volte para a
        página inicial.
      </p>

      <Image
        src="/images/404-error-dark.avif"
        width={300}
        height={300}
        alt="Erro 404"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-6 object-contain"
      />

      <Link href="/">
        <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-500 transition-all">
          Voltar para a página inicial
        </button>
      </Link>
    </div>
  )
}
