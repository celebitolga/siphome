import './App.scss'
import Features from './components/features/Features'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Update from './components/update/Update'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Update />
      <Services />
    </div>
  )
}

export default App
