
import axios from 'axios';
import './App.css';

function App() {

  const handleClick = () => {
    axios.get('/trending')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  } // End handleClick

  return (
    <div className="App" onClick={handleClick}>
      <header className="App-header">
        <h1 className="App-title">APIS</h1>
        <h4><i>APIS</i></h4>
      </header>
      <br />
    </div>
  );

}

export default App;
