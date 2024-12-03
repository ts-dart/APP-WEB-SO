import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/home/homePage'
import AuthenticationPage from './pages/authentication/authenticationPage'
import SearchPage from './pages/search/searchPage'
import SocialPage from './pages/social/socialPage'
import ProfilePage from './pages/profile/profilePage'
import AboutPage from './pages/about/aboutPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/social' element={<SocialPage />}/>
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/authentication' element={<AuthenticationPage />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </>
  );
}

export default App;
