import './App.css';
import ContextProviderLord from './components/Contexts/ContextProviderLord';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      <ContextProviderLord>
        <AppRouter />
      </ContextProviderLord>
    </>
  );
}

export default App;
