import React from 'react';
import {Toaster} from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard/:id" element={<Leaderboard />} />
        </Routes>
      </Router>

      <Toaster 
        toastOptions={{
          className: '',
          style: {
            fontSize:"13px",
          },

        }}
      />
    </div>
  );
}

export default App;
