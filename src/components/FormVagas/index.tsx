import { FormEvent, useState } from 'react'

import { FormularioPesquisa, BotaoPesquisa, CampoDePreencher } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormularioPesquisa as="form" onSubmit={aoEnviarForm}>
      <CampoDePreencher
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisa as="button" type="submit">
        Pesquisar
      </BotaoPesquisa>
    </FormularioPesquisa>
  )
}
export default FormVagas
