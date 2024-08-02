import { screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { renderizaComProvider } from '../../../utils/tests'
import Produtos from '..'

const mocks = [
  {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windowns'],
    preco: 149.9,
    precoAntigo: 199.9,
    titulo: 'Elden Ring'
  },
  {
    id: 2,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windowns', 'PS5', 'Xbox Series S/X'],
    preco: 199.9,
    precoAntigo: 249.9,
    titulo: 'Hogwarts Legacy'
  },
  {
    id: 3,
    categoria: 'FPS',
    imagem: '',
    plataformas: ['Windowns'],
    preco: 19.9,
    precoAntigo: 39.9,
    titulo: 'Counter Strike Global'
  },
  {
    id: 4,
    categoria: 'Ação',
    imagem: '',
    plataformas: ['Windowns', 'PS5', 'Xbox Series S/X'],
    preco: 179.9,
    precoAntigo: 249.9,
    titulo: 'Gotham Knights'
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Testes para o container produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Deve renderizar corretamente com o texto de carregamento', () => {
    renderizaComProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('Deve renderizar corretamente com a listagem de jogos', async () => {
    const { debug } = renderizaComProvider(<Produtos />)
    await waitFor(() => {
      debug()
      expect(screen.getByText('Gotham Knights')).toBeInTheDocument()
    })
  })
})
