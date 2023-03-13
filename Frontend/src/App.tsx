import React from 'react';
import './App.css';
import './custom-sass.scss';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { config } from './context/authentication';
import { Login } from './pages/login';
import { Home } from './pages/home';
function App() {
 
  return (
    <div className="App">
      {/* <Provider store={config}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route> 
          </Routes>
        </Router>
      </Provider> */}
      <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route> 
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
