import { useEffect } from 'react'
import { JwtValidator } from '../../services'

import Feed from "./components/feed"
import Header from "../../globalComponents/header"

export default function Home() {
  useEffect(() => {
    const decoded = JwtValidator(localStorage.getItem('LoginToken'))
    console.log(decoded)
  }, [])

  return (
    <>
      <Header />
      <Feed />
    </>
  )
}