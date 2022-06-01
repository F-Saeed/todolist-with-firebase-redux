// React Router
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
