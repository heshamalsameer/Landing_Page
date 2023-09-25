import './App.css';
import { Header } from './components/Header';
import { Landing } from './components/Landing';
import  {Slider} from './components/Slider';


function App() {
  return (
    <div className="App relative">
      <Header/>
      <Slider/>
      <Landing/>
    </div>
  );
}

export default App;
