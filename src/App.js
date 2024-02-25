import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Popular from './components/Popular';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popular />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
