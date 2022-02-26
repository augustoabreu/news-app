import { Provider } from 'react-redux';
import { store } from './store/config';
import { Router } from './router/Router';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
