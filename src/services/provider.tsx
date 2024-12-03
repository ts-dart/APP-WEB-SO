import { useState } from 'react'
import ThemeContext from './context'
import { LoggedinUser } from '../types'
import { defaultLoggedinUser } from '../data'

export default function Provider({ children }: { children: JSX.Element }) {
  const [loggedinUser, setLoggedinUser] = useState<LoggedinUser>(defaultLoggedinUser)

  return (
    <ThemeContext.Provider value={{loggedinUser, setLoggedinUser}}>
      {children}
    </ThemeContext.Provider>
  )
}