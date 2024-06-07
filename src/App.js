import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home1 from './Componet/Pages/Home1/Home1';
  // import AOS from 'aos';
  // import 'aos/dist/aos.css';
  // AOS.init();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <img className='loading_img'
            src="https://themexriver.com/wp/goyto/wp-content/uploads/2024/05/loader.svg"
            alt="Loading..."
          />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home1 />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
