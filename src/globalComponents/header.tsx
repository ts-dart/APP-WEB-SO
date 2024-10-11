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
  imgLogo
} from '../data/index'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [imgHome, setImgHome] = useState(imgHomeHeader)
  const [imgSearch, setImgSearch] = useState(imgSearchHeader);
  const [imgCreateNewPost, setImgCreateNewPost] = useState(imgCreateNewPoastHeader);
  const [imgSocial, setImgSocial] = useState(imgSocialHeader);
  const [imgPerfil, setImgPerfil] = useState(imgPerfilHeader);
  
  return (
    <header className="w-full h-20 flex justify-evenly items-center">
      <img className='w-[30px] h-[30px]' src={imgLogo} alt="" />
      <nav className="flex flex-row gap-8">
        <img 
          className='w-[27px] h-[27px] cursor-pointer hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827]' 
          src={imgHome} alt="" 
          onMouseEnter={() => setImgHome(imgHomeHeader1)}
          onMouseLeave={()=> setImgHome(imgHomeHeader)}
        />
         <img 
          className='w-[27px] h-[27px] cursor-pointer hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827]' 
          src={imgSearch} alt="" 
          onMouseEnter={() => setImgSearch(imgSearchHeader1)}
          onMouseLeave={() => setImgSearch(imgSearchHeader)}
        />
        <img 
          className='w-[27px] h-[27px] cursor-pointer hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827]' 
          src={imgCreateNewPost} alt="" 
          onMouseEnter={() => setImgCreateNewPost(imgCreateNewPoastHeader1)}
          onMouseLeave={() => setImgCreateNewPost(imgCreateNewPoastHeader)}
        />
        <img 
          className='w-[27px] h-[27px] cursor-pointer hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827]' 
          src={imgSocial} alt="" 
          onMouseEnter={() => setImgSocial(imgSocialHeader1)}
          onMouseLeave={() => setImgSocial(imgSocialHeader)}
        />
        <img 
          className='w-[27px] h-[27px] cursor-pointer hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827]' 
          src={imgPerfil} alt="" 
          onMouseEnter={() => setImgPerfil(imgPerfilHeader1)}
          onMouseLeave={() => setImgPerfil(imgPerfilHeader)}
        />
        <img 
          className='w-[20px] h-[25px] cursor-pointer hover:bg-[#111827] hover:bg-opacity-80 hover:rounded-full hover:shadow-[0_0_1px_5px_#111827]' 
          src={imgInfoHeader} 
          alt="" 
        />
      </nav>
      <Link to='/login'>
        <button className='bg-white rounded p-[7px] text-[11px] text-black hover:bg-[#c8cacf]'>
          {localStorage.getItem('token') == null ? 'Sign in' : 'Sign out'}
        </button>
      </Link>
    </header>
  )
}