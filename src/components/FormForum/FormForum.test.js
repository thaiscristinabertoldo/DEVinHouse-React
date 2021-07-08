import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { FormForum } from './FormForum'

const renderComponent = (props) => render(<FormForum {...props} />)

describe('FormForum Component', () => {
  it('Deve renderizar o formulário corretamente', () => {
    renderComponent()

    expect(screen.getByText('Cadastrar Fórum')).toBeInTheDocument()
  })

  it('Deve mostrar mensagem de erro no campo de título', async () => {
    renderComponent()

    const title = screen.getByPlaceholderText('Título')
    userEvent.click(title)

    userEvent.tab()
    await waitFor(() => expect(screen.getByText('Campo obrigatório')).toBeInTheDocument())
  })

  it('Deve desabilitar onSubmit do form quando houver erros no formulário', async () => {
    renderComponent()

    const title = screen.getByPlaceholderText('Título')
    userEvent.click(title)
    userEvent.tab()
    await waitFor(() => screen.getByText('Campo obrigatório'))

    expect(screen.getByRole('button', { name: 'Cadastrar' })).toBeDisabled()
  })

  it('Deve chamar a função de onSubmit do form quando clicar no botão cadastrar', async () => {
    const onSubmit = jest.fn()
    renderComponent({ onSubmit })

    const title = screen.getByPlaceholderText('Título')
    userEvent.type(title, 'título formulário')
    await waitFor(() => screen.getByDisplayValue('título formulário'))

    const details = screen.getByPlaceholderText('Detalhes')
    userEvent.type(details, 'detalhes formulário')
    await waitFor(() => screen.getByDisplayValue('detalhes formulário'))

    await waitFor(() => expect(screen.getByRole('button', { name: 'Cadastrar' })).not.toBeDisabled())
    const button = screen.getByRole('button', { name: 'Cadastrar' })
    userEvent.click(button)

    await waitFor(() => expect(screen.getByRole('button', { name: 'Cadastrar' })).toBeDisabled())
    expect(onSubmit).toBeCalledTimes(1)
  })

  it('Deve limpar o form quando clicar no botão limpar', async () => {
    renderComponent()

    const title = screen.getByPlaceholderText('Título')
    userEvent.type(title, 'título formulário')
    await waitFor(() => screen.getByDisplayValue('título formulário'))

    const button = screen.getByRole('button', { name: 'Limpar' })
    userEvent.click(button)

    await waitFor(() => expect(screen.queryByDisplayValue('título formulário')).toBeNull())
  })

  it('Deve validar mensagem de erro ao inserir uma tag', async () => {
    renderComponent()

    const button = screen.getByRole('button', { name: 'Adicionar' })
    userEvent.click(button)
    await waitFor(() => screen.getByPlaceholderText('Tecnologia'))

    const input = screen.getByPlaceholderText('Tecnologia')
    userEvent.click(input)
    userEvent.tab()

    await waitFor(() => expect(screen.getAllByText('Campo obrigatório')).toHaveLength(2))
  })

  it('Deve inserir uma tag', async () => {
    renderComponent()

    const button = screen.getByRole('button', { name: 'Adicionar' })
    userEvent.click(button)
    await waitFor(() => screen.getByPlaceholderText('Tecnologia'))

    const input = screen.getByPlaceholderText('Tecnologia')
    userEvent.type(input, 'tecnologia formulário')
    await waitFor(() => expect(screen.getByDisplayValue('tecnologia formulário')).toBeInTheDocument())
  })

  it('Deve remover uma tag', async () => {
    renderComponent()

    const button = screen.getByRole('button', { name: 'Adicionar' })
    userEvent.click(button)
    await waitFor(() => screen.getByPlaceholderText('Tecnologia'))

    const buttonRemover = screen.getByLabelText('Remover')
    userEvent.click(buttonRemover)
    await waitFor(() => expect(screen.queryByPlaceholderText('Tecnologia')).toBeNull())
  })
})
