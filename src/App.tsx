import { BrowserRouter } from 'react-router-dom';
import RouteElement from './router/element';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <BrowserRouter>
          <RouteElement />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
