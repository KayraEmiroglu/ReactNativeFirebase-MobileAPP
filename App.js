import { StatusBar } from 'expo-status-bar';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import store from './src/util/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Navigation />
    </Provider>
  );
}




