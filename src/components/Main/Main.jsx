import './Main.css'

function Main({
  texto,
  onTextoChange,
  tarefas,
  onAlternarConcluida,
  onExcluir,
  onAdicionarTarefa,
}) {
  return (
    <main className="main-content">
      <form className="task-form" onSubmit={onAdicionarTarefa}>
        <label htmlFor="campo-tarefa">Nova tarefa</label>
        <div className="task-form__row">
          <input
            id="campo-tarefa"
            type="text"
            value={texto}
            onChange={(evento) => onTextoChange(evento.target.value)}
            placeholder="Ex.: Estudar para a prova de história"
          />
          <button type="submit">Adicionar</button>
        </div>
      </form>

      <section className="task-area" id="tarefas" aria-live="polite">
        <h2>Tarefas</h2>

        {tarefas.length === 0 ? (
          <p className="task-empty">
            Sua lista está vazia. Digite uma tarefa e clique em Adicionar.
          </p>
        ) : (
          <ul className="task-list">
            {tarefas.map((tarefa) => (
              <li
                key={tarefa.id}
                className={
                  tarefa.concluida
                    ? 'task-list__item is-complete'
                    : 'task-list__item'
                }
              >
                <label className="task-list__label">
                  <input
                    type="checkbox"
                    checked={tarefa.concluida}
                    onChange={() => onAlternarConcluida(tarefa.id)}
                  />
                  <span>{tarefa.texto}</span>
                </label>
                <button
                  type="button"
                  className="task-list__delete"
                  onClick={() => onExcluir(tarefa.id)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default Main
