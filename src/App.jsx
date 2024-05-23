import ButtonNewtournament from './components/ButtonNewtournament'
import CuadroJugador from './components/CuadroJugador'
import FormularioJugadores from './components/FormularioJugadores'
import ButtonLoadTournament from "./components/ButtonLoadTournament"
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <CuadroJugador />
      <FormularioJugadores />
      <ButtonNewtournament title="NUEVO TORNEO" />
      <ButtonLoadTournament />
    </>
  )
}

export default App
