import { useState } from 'react';
import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm';

export default function Login() {
  const [formType, setFormType] = useState(true)

  return (
    <main className='flex flex-col items-center p-2.5'>
      {formType ? <LoginForm/> : <RegisterForm/>}
      <button 
        onClick={() => setFormType(!formType)}
        className='bg-white rounded-[10px] p-[7px] text-[11px] text-black hover:bg-[#c8cacf] w-[28.5%] p-3.5 text-[15px] font-bold mb-5'
      >
        {formType ? 'Criar uma nova conta' : 'Fazer login'}
      </button>
      <p className='text-[#777777] text-[10px]'>OBS. Utilize a conta de teste caso não queria se cadastrar. Nome de usuário teste, senha teste.</p>
    </main>
  );
}
