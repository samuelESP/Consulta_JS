import logo from './logo.svg';
import './App.css';
import Cakecontainer from './components/Cakecontainer';
import { Provider } from 'react-redux';
import store from './redux/cake/Store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Cakecontainer/>
      <HooksCakeContainer />
      <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
