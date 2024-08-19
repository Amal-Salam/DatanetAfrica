
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import HomePage from './pages/HomePage';
 import ContactPage from './pages/ContactPage';

function App() {
  
  return (
    
    <Router>
      <div >
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} /> 
          </Routes>
      </div>
    </Router>
  );
}

export default App;
