import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action,romance,horror,science_fiction,animation,comady} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix originals'/>  
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={romance} title='Romantic films' isSmall />
      <RowPost url={science_fiction} title='Popular sci-fi films' isSmall />
      <RowPost url={horror} title='Popular horror films' isSmall />
      <RowPost url={animation} title='Popular animated films' isSmall />
      <RowPost url={comady} title='Popular comedies' isSmall />
    </div>
  );
}
export default App;
