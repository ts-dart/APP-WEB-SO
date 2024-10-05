import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'
import Login from './pages/login/login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
