import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import { originals,actions,comedy } from './urls';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals' clas='poster'/>
      <Rowpost url={actions} title='Actions' clas='smallPoster'/>
      <Rowpost url={comedy} title='Comedy' clas='smallPoster'/>
    </div>
  );
}

export default App;
