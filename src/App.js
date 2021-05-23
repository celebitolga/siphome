import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-mainHolder">
        <Hero />
      </main>
    </div>
  );
}

export default App;
