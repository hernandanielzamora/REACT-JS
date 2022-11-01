import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer saludo='Bienvenido a Zeta Store. Las mejores Skins, al mejor precio.'/>
      </header>
    </div>
  );
}

export default App;
