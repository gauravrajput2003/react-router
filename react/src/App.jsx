import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Stopwatch from './components/Stopwatch';
import Calculator from './components/Calculator';
import Refex from './components/Refex';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<h1>Counter App</h1>} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/refex" element={<Refex/>} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </div>
  );
};

export default App;
