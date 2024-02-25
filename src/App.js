import './App.css';
import Popular from './components/Popular';
import { useGlobalContext } from './context/global';

function App() {
  const global = useGlobalContext();
  console.log(global);
  return (
    <Popular />
  );
}

export default App;
