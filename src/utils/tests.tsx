import carrinho from '../store/reducers/carrinho'

interface Pessoa {
  nome: string
  idade: number
}

interface ExtendedRenderOptions extends Omit<Pessoa, 'idade'>

export function rederizaComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = {},
    store,
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
)
