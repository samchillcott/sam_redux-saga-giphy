import Search from './Components/Search/index';
import { Provider } from 'react-redux';
import store from './Store/createStore';
import Results from './Components/Results';

function App() {
  return (
    <Provider store={store} >
      <div>
        <Search /> 
        <Results />
      </div>
    </Provider >
  );
}

export default App;
