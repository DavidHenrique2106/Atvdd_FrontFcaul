
import './App.css'
import Aula from './components/Aula';

function App() {

  return (
    <>
      <div className="Aula" style={{textAlign: 'center'}}>
        <h1>Atividade Márcio - Estudo dirigido</h1>

        <div className="dvi1">
          <Aula/>
        </div> <hr />
        <div className="div2">
          <Aula/>
        </div> <hr />
        <div className="div3">
        <Aula/>
        </div>
      </div>
    </>
  )
}

export default App
