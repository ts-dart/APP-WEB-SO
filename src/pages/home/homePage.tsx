import { useContext, useEffect } from 'react'
import { useJwt } from 'react-jwt'

import Feed from "./components/feed"
import AsideNav from "../../components/asideNav"
import ThemeContext from '../../services/context'
import { LoggedinUser } from '../../types'

export default function HomePage() {
  const {setLoggedinUser} = useContext(ThemeContext)

  const token = localStorage.getItem('LoginToken') || ''
  const { decodedToken, isExpired } = useJwt(token) as { decodedToken: LoggedinUser; isExpired: boolean }

  useEffect(() => {
    if (decodedToken && isExpired !== null) {
      setLoggedinUser({ ...decodedToken, expiredLogin: isExpired });
    }
  }, [decodedToken, isExpired])

  return (
    <>
      <AsideNav />
      <Feed />
    </>
  )
}