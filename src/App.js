import logo from './logo.svg';
import './App.css'
import Navbar from './Components/layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/layout/Dashboard'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
