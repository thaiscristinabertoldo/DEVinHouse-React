import { render, screen } from '@testing-library/react'

import { DivError } from './DivError'

const renderComponent = () => render(<DivError>mensagem de erro</DivError>)

describe('DivError Component', () => {
  it('Deve renderizar a mensagem de erro', () => {
    renderComponent()

    expect(screen.getByText('mensagem de erro')).toBeInTheDocument()
  })
})
