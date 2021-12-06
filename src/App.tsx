import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './Home';
import User from './User';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;