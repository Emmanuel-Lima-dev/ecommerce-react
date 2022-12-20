
import './App.css';
import { ItemCarrusel } from './components/ItemCarrusel';
import { NavBar } from './components/NavBar';
import {Slider} from './components/slider/Slider';
import {TitleSection} from './components/TitleSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <TitleSection
        titulo='new products'
      />
      <ItemCarrusel />
    </div>
  );
}

export default App;
