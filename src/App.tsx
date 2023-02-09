import './App.css'
import ImageGrid from './components/ImageGrid'
import logo from './Images/Soulloop_logo.png'
import photo1 from './Images/photo1.jpg'
import photo2 from './Images/photo2.jpg'
import photo3 from './Images/photo3.jpg'
import photo4 from './Images/photo4.jpg'
import photo5 from './Images/photo5.jpg'
import photo6 from './Images/photo6.jpg'

function App() {
  return (
    <div className="background">
      <header className="App-header">
        <h2>Soulloop CMS</h2>
        <p>Selecione a opção desejada em nossa menu abaixo:</p>
      </header>
      <div className="div-photos">
        <img src={photo1} className="button-Photos" alt="logo" />
        <img src={photo2} className="button-Photos" alt="logo" />
        <img src={photo3} className="button-Photos" alt="logo" />
        <img src={photo4} className="button-Photos" alt="logo" />
        <img src={photo5} className="button-Photos" alt="logo" />
        <img src={photo6} className="button-Photos" alt="logo" />
      </div>
    </div>
  )
}

export default App
