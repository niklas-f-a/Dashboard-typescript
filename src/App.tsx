import Layout from './pages/Layout'
import './styles/App.scss'
import { OnlineContextProvider } from './contexts/OnlineContext'

function App() {
  return (
    <div className="App">
      <OnlineContextProvider>
        <Layout />
      </OnlineContextProvider>
    </div>
  );
}

export default App;
