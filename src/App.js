import Search from './Components/Search/index';
import { Provider } from 'react-redux';
import store from './Store/createStore';

function App() {
  return (
    <Provider store={store} >
    <div>
      <Search /> 
    </div>
    </Provider >
  );
}

export default App;
