import { 
  imgHomeHeader,
  imgHomeHeader1,
  imgSearchHeader, 
  imgSearchHeader1,
  imgCreateNewPoastHeader,
  imgCreateNewPoastHeader1,
  imgSocialHeader,
  imgSocialHeader1,
  imgPerfilHeader,
  imgPerfilHeader1,
  imgInfoHeader,
  imgLogo,
  defaultLoggedinUser,
  imgAvatarDefault
} from '../data/index'

import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import ThemeContext from '../services/context'

export default function AsideNav() {
  const {loggedinUser, setLoggedinUser} = useContext(ThemeContext)
  const navigate = useNavigate()
  const location = useLocation()

  const [imgHome, setImgHome] = useState(imgHomeHeader)
  const [imgSearch, setImgSearch] = useState(imgSearchHeader)
  const [imgCreateNewPost, setImgCreateNewPost] = useState(imgCreateNewPoastHeader)
  const [imgSocial, setImgSocial] = useState(imgSocialHeader)
  const [imgPerfil, setImgPerfil] = useState(imgPerfilHeader)
  const [headerButtonText, setHeaderButtonText] = useState(localStorage.getItem('LoginToken') ? 'Sair' : 'Entrar')

  const headerButtonAction = () => {
    if (localStorage.getItem('LoginToken')) {
      localStorage.removeItem('LoginToken')
      setLoggedinUser(defaultLoggedinUser)
      setHeaderButtonText('Entrar') // Atualiza o texto do botão após sair
    } else {
      setHeaderButtonText('Sair') // Atualiza o texto do botão após entrar
      navigate('/authentication') // Navega para a página de login
    }
  };

  useEffect(() => {}, [headerButtonText]);
  //pb-2 border-b-[2px] border-[] rounded-[100%]

  return (
    <aside className='h-screen w-[25%] fixed top-0 left-0 flex flex-col justify-between	p-5 bg-[#141414] border-r border-gray-800'>
      <div className='h-[55%] flex flex-col justify-between'>
        <img className='w-[30px] h-[30px]' src={imgLogo} alt="" />
        <div>
          {!loggedinUser.expiredLogin  
            ? (
              <div className='flex flex-row mb-4'>
                <img src={imgAvatarDefault} className='w-[30px] h-[30px]' alt="" />
                <h1>{loggedinUser.fullName}</h1>
              </div>
            ) : ''}
          <nav className="flex flex-col gap-4">
            <div className='flex flex-row items-center mb-4'>
              {location.pathname === '/home' || location.pathname === '/' ? <div className="rounded-full w-1 h-1 bg-[#4169e1]"></div> : ''}
              <img 
                className='w-[30px] h-[30px] cursor-pointer hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827] mb-1' 
                src={imgHome} alt="" 
                onMouseEnter={() => setImgHome(imgHomeHeader1)}
                onMouseLeave={() => setImgHome(imgHomeHeader)}
                onClick={() => navigate('/home')}
              />
              <h1>Pagina inicial</h1>
            </div>
            <div className='flex flex-row items-center mb-4'>
              {location.pathname === '/search' ? <div className="rounded-full w-1 h-1 bg-[#4169e1]"></div> : ''}
              <img 
                className='w-[30px] h-[30px] cursor-pointer hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827] mb-1' 
                src={imgSearch} alt="" 
                onMouseEnter={() => setImgSearch(imgSearchHeader1)}
                onMouseLeave={() => setImgSearch(imgSearchHeader)}
                onClick={() => navigate('/search')}
              />
              <h1>Pesquisar</h1>
            </div>
            <div className='flex flex-row items-center mb-4'>
              {location.pathname === '/social' ? <div className="rounded-full w-1 h-1 bg-[#4169e1]"></div> : ''}
              <img 
                className='w-[30px] h-[30px] cursor-pointer hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827] mb-1' 
                src={imgSocial} alt="" 
                onMouseEnter={() => setImgSocial(imgSocialHeader1)}
                onMouseLeave={() => setImgSocial(imgSocialHeader)}
                onClick={() => navigate('/social')}
              />
              <h1>Social</h1>
            </div>
            <div className='flex flex-row items-center mb-4'>
              {location.pathname === '/profile' ? <div className="rounded-full w-1 h-1 bg-[#4169e1]"></div> : ''}
              <img 
                className='w-[30px] h-[30px] cursor-pointer hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827] mb-1' 
                src={imgPerfil} alt="" 
                onMouseEnter={() => setImgPerfil(imgPerfilHeader1)}
                onMouseLeave={() => setImgPerfil(imgPerfilHeader)}
                onClick={() => navigate('/profile')}
              />
              <h1>Perfil</h1>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <div className='flex flex-row items-center'>
          {location.pathname === '/about' ? <div className="rounded-full w-1 h-1 bg-[#4169e1]"></div> : ''}
          <img 
            className='w-[20px] h-[20px] cursor-pointer hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827] mb-1' 
            src={imgInfoHeader} 
            alt="" 
            onClick={() => navigate('/about')}
          />
          <h1>Sobre</h1>
        </div>
        <button onClick={headerButtonAction} className='rounded p-[7px] text-[16px] hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827]'>
          {headerButtonText}
        </button>
      </div>
    </aside>
  );
}
