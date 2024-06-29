import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <h1>Learn React</h1>
      </div>
      <br/>
      <div>
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
