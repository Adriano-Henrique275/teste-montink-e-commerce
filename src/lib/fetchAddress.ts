export const fetchAddress = async (cep: string): Promise<string> => {
  if (!/^\d{8}$/.test(cep)) {
    return 'CEP inválido. Digite apenas números com 8 dígitos.'
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()

    if (data.erro) {
      return 'CEP não encontrado.'
    }

    return `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
  } catch {
    return 'Erro ao consultar o CEP. Tente novamente.'
  }
}
