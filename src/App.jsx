import { useState } from 'react'
import ListaTarefas from './components/ListaTarefas'
import './App.css'

function App() {
  const [texto, setTexto] = useState('')
  const [tarefas, setTarefas] = useState([])
  const [proximoId, setProximoId] = useState(1)

  function adicionarTarefa(evento) {
    evento.preventDefault()

    const novaTarefa = texto.trim()

    if (novaTarefa === '') {
      return
    }

    setTarefas([
      ...tarefas,
      {
        id: proximoId,
        texto: novaTarefa,
        concluida: false,
      },
    ])
    setProximoId(proximoId + 1)
    setTexto('')
  }

  function alternarConcluida(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa,
      ),
    )
  }

  function excluirTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return (
    <main className="app">
      <header className="cabecalho">
        <h1>Minha Lista de Tarefas</h1>
        <p>Organize estudos, trabalhos e revisões em um só lugar.</p>
      </header>

      <form className="formulario" onSubmit={adicionarTarefa}>
        <label htmlFor="campo-tarefa">Nova tarefa</label>
        <div className="linha-formulario">
          <input
            id="campo-tarefa"
            type="text"
            value={texto}
            onChange={(evento) => setTexto(evento.target.value)}
            placeholder="Ex.: Estudar para a prova de história"
          />
          <button type="submit">Adicionar</button>
        </div>
      </form>

      <ListaTarefas
        tarefas={tarefas}
        onAlternarConcluida={alternarConcluida}
        onExcluir={excluirTarefa}
      />
    </main>
  )
}

export default App
