import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import Header from '..'
import { store } from '../../../store'

describe('Teste para o componente header', () => {
  test('Deve renderizar corretamente', () => {
    const { debug } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    debug()
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
