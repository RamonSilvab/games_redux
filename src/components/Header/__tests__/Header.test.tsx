import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Teste para o componente header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
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
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
