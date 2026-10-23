function ListaTarefas({ tarefas, onAlternarConcluida, onExcluir }) {
  return (
    <section className="area-tarefas" aria-live="polite">
      <h2>Tarefas</h2>

      {tarefas.length === 0 ? (
        <p className="lista-vazia">
          Sua lista está vazia. Digite uma tarefa e clique em Adicionar.
        </p>
      ) : (
        <ul className="lista">
          {tarefas.map((tarefa) => (
            <li
              key={tarefa.id}
              className={tarefa.concluida ? 'concluida' : ''}
            >
              <label>
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => onAlternarConcluida(tarefa.id)}
                />
                <span>{tarefa.texto}</span>
              </label>
              <button
                type="button"
                className="botao-excluir"
                onClick={() => onExcluir(tarefa.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaTarefas
