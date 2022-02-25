import { BrowserRouter } from 'react-router-dom';
import RouteElement from './router/element';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <RouteElement />
      </BrowserRouter>
    </div>
  );
}

export default App;
