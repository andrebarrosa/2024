import Header from "../components/Header.jsx"

export default function App() {

  return (

    <div className="app">
        <img src="/react.png" style={{ width: '150px'}} />
        <h1>React</h1>
        <p1>A biblioteca para interface de usuário web e nativas</p1>
          <div>
            <button>Aprenda React</button>
            <button>Referência da API</button>
          </div>
          <hr/>
          <h2>Crie interfaces de usuários de componentes</h2>
          <p1>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes.</p1>
          <hr/>
          <h2>Escreva componentes com código e marcação</h2>
          <p2>Componentes React são funções JavaScript. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo React.</p2>]
          <hr/>
          <h2>Próximos passos</h2>
          <ul>
              <li>Uso de dados dinâmicos</li>
              <li>Criação de novos components</li>
              <li>Estilização de componentes</li>
              <li>Uso de props e children</li>
              <li>Uso de eventos do JavaScript</li>
          </ul>
    </div>
  )
}

