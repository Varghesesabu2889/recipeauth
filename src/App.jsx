import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SplashScreen from './pages/Splashscreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationComplete = () => {
    setShowSplash(false); // Hide the splash screen when animation is complete
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            showSplash ? (
              <SplashScreen onAnimationComplete={handleAnimationComplete} />
            ) : (
              <Login />
            )
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
