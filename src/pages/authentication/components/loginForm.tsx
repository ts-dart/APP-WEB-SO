import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { makeLoginRequest } from '../services'
import SidePopup from "../../../components/sidePopup"

export default function LoginForm() {
  const navigate = useNavigate()

  const [loginType, setLoginType] = useState('userName') // Valor inicial correspondente ao primeiro tipo
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [loginButtonStatus, setLoginButtonStatus] = useState(true)
  const [popup, setPopup] = useState<boolean | undefined>(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const logIn = () => {
    makeLoginRequest(loginType, login, password)
    .then(async (data) => {
      if (data.status === 200) {
        localStorage.setItem('LoginToken', `${await data.json()}`)
        navigate('/')
      } else {
        setPopup(!popup)
        setFeedbackMessage(await data.json())
      }
    })
  }

  const checkInputs = () => {
    switch (loginType) {
      case 'userName':
        const regexUserName = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{3,}$/
        setLoginButtonStatus(!(login.match(regexUserName) && password.length > 3))
        break
      case 'email':
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        setLoginButtonStatus(!(login.match(regexEmail) && password.length > 3))
        break
      case 'phoneNumber':
        const regexPhoneNumber = /^\d{11}$/
        setLoginButtonStatus(!(login.match(regexPhoneNumber) && password.length > 3))
        break
      default:
        setLoginButtonStatus(true)
    }
  };

  useEffect(() => {checkInputs()}, [loginType, login, password])

  return (
    <>
      <form className="w-[30%] mx-auto flex flex-col items-center p-2.5" onSubmit={(event) => event.preventDefault()}>
        <h1 className="mb-4 text-[15px]">Entre com sua conta ou faca o cadastro</h1> 
        <div className="w-full mb-4 flex justify-evenly items-center">
          <p className="mb-1 text-[13px]">Selecione método de entrada</p>
          <div className="flex flex-row justify-end items-center">
            <label className="flex flex-row items-center mx-1">
              <input 
                checked={loginType === 'userName' ? true : false}
                type="radio" 
                name="loginType" 
                value="userName" 
                onChange={(event) => setLoginType(event.target.value)}
                className="mx-1"
              />
              <p className="text-[12px]">Nome de usuário</p>
            </label>
            <label className="flex flex-row items-center mx-1">
              <input 
                checked={loginType === 'email' ? true : false}
                type="radio" 
                name="loginType" 
                value="email" 
                onChange={(event) => setLoginType(event.target.value)}
                className="mx-1"
              />
              <p className="text-[12px]">E-mail</p>
            </label>
            <label className="flex flex-row items-center mx-1">
              <input 
                checked={loginType === 'phoneNumber' ? true : false}
                type="radio" 
                name="loginType" 
                value="phoneNumber" 
                onChange={(event) => setLoginType(event.target.value)}
                className="mx-1"
              />
              <p className="text-[12px]">Telefone</p>
            </label>
          </div>
        </div>
        <input 
          type="text" 
          placeholder={loginType === 'email' ? 'E-mail' : loginType === 'userName' ? 'Nome de usuário' : 'Telefone'} 
          className="w-full bg-[#1E1E1E] border-2 border-transparent focus:border-[#3E3E3F] rounded-[10px] p-3.5 text-white mb-4"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <input 
          type="password" 
          placeholder="Senha" 
          className="w-full bg-[#1E1E1E] border-2 border-transparent focus:border-[#3E3E3F] rounded-[10px] p-3.5 text-white mb-4"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button 
          className={loginButtonStatus 
            ? 'bg-white rounded-[10px] p-[7px] text-[11px] text-black w-full p-3.5 mb-4 text-[15px] font-bold cursor-not-allowed' 
            : 'bg-white rounded-[10px] p-[7px] text-[11px] text-black hover:bg-[#c8cacf] w-full p-3.5 mb-4 text-[15px] font-bold'}
          onClick={logIn} 
          disabled={loginButtonStatus}
        >
          <p className={loginButtonStatus ? 'opacity-50' : 'opacity-100'}>Entrar</p>
        </button>
        <button className="text-[#777777] text-[16px]">Esqueceu a senha?</button>
        <div className="mx-auto w-full flex flex-row items-center p-2.5 m-5">
          <hr className="border-t-1 border-[#333232] w-full"/>
          <h1 className='text-[#777777] text-[13px] mx-3'>OU</h1>
          <hr className="border-t-1 border-[#333232] w-full"/>
        </div>
      </form>
      {popup ? <SidePopup message={feedbackMessage} timeout={5000} popup setPopup={setPopup}/> : ''}
    </>
  );
}