import './App.css';
import Mensaje from './Mensaje.js';


const App = () => {
  const msg = 'Hello World';
  return (
    <div className="App">
      <h1>{msg + ' eval'}</h1>
      {1 + 2}
      <Mensaje bg='red' msg='hola' />
      <Mensaje bg='greenyellow' msg='porque'/>
      <Mensaje bg='green' msg='hace'/>
    </div>
  );
};

export default App;
