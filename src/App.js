import './App.scss'
import AppHeader from './components/appHeader/AppHeader'
import AppHero from './components/appHero/AppHero'
import AppFeatures from './components/appFeatures/AppFeatures'
import AppUpdate from './components/appUpdate/AppUpdate'
import AppServices from './components/appServices/AppServices'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <AppHero />
        <AppFeatures />
        <AppUpdate />
        <AppServices />
      </main>
    </div>
  )
}

export default App
