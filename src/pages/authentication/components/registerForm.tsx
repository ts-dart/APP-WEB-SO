import { useEffect, useState } from 'react'
import { makeRegisterRequest } from '../services'
import SidePopup from '../../../components/sidePopup'

export default function RegisterForm() {
  const [userName, setUserName] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [loginButtonStatus, setLoginButtonStatus] = useState(true)
  const [popup, setPopup] = useState<boolean | undefined>(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const register = () => {
    makeRegisterRequest(userName, fullName, email, phoneNumber, password)
    .then(async (data) => {
      if (data.status) {
        setPopup(!popup)
        setFeedbackMessage(await data.json())
      }
    })
  }

  const checkInputs = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPhoneNumber = /^\d{11}$/
    const regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/

    if (
      userName.length > 2 &&
      fullName.length > 2 &&
      email.match(regexEmail) &&
      phoneNumber.match(regexPhoneNumber) &&
      password.match(regexPassword)
    ) {
      setLoginButtonStatus(false)
    }
    else setLoginButtonStatus(true)
  };

  useEffect(() => {checkInputs()}, [userName, fullName, email, phoneNumber, password])

  return (
    <>
      <form className="w-[30%] mx-auto flex flex-col items-center p-2.5" onSubmit={(event) => event.preventDefault()}>
        <h1 className="mb-4 text-[15px]">Criar uma nova conta. É rápido e fácil.</h1> 
        <input 
            type="text" 
            placeholder="Nome completo" 
            className="w-full bg-[#1E1E1E] border-2 border-transparent focus:border-[#3E3E3F] rounded-[10px] p-3.5 text-white mb-4"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <input 
            type="text" 
            placeholder="E-mail" 
            className="w-full bg-[#1E1E1E] border-2 border-transparent focus:border-[#3E3E3F] rounded-[10px] p-3.5 text-white mb-4"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input 
            type="text" 
            placeholder="Telefone" 
            className="w-full bg-[#1E1E1E] border-2 border-transparent focus:border-[#3E3E3F] rounded-[10px] p-3.5 text-white mb-4"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        <input 
            type="text" 
            placeholder="Nome de usuário" 
            className="w-full bg-[#1E1E1E] border-2 border-transparent focus:border-[#3E3E3F] rounded-[10px] p-3.5 text-white mb-4"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <label className="w-full mb-5">
            <input 
              type="password" 
              placeholder="Senha" 
              className="w-full bg-[#1E1E1E] border-2 border-transparent focus:border-[#3E3E3F] rounded-[10px] p-3.5 text-white mb-1"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <p className='text-[#777777] text-[10px]'>**Insira uma combinação de pelo menos 6 dígitos: números, letras, sinais (! e @).</p>
          </label>
          <button 
            className={loginButtonStatus 
              ? 'bg-white rounded-[10px] p-[7px] text-[11px] text-black w-full p-3.5 mb-4 text-[15px] font-bold cursor-not-allowed' 
              : 'bg-white rounded-[10px] p-[7px] text-[11px] text-black hover:bg-[#c8cacf] w-full p-3.5 mb-4 text-[15px] font-bold'}
            onClick={register} 
            disabled={loginButtonStatus}
          >
            <p className={loginButtonStatus ? 'opacity-50' : 'opacity-100'}>Cadastre-se</p>
          </button>
          <div className="mx-auto w-full flex flex-row items-center p-2.5 m-5">
            <hr className="border-t-1 border-[#333232] w-full"/>
            <h1 className='text-[#777777] text-[13px] mx-3'>OU</h1>
            <hr className="border-t-1 border-[#333232] w-full"/>
          </div>
      </form>
      {popup ? <SidePopup message={feedbackMessage} timeout={5000} popup setPopup={setPopup}/> : ''}
    </>
  )
}