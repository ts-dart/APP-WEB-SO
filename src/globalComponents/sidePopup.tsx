import { useEffect } from 'react'

interface TypeProps { message: string, timeout: number, popup: boolean, setPopup(value: React.SetStateAction<boolean>): void }

export default function SidePopup({ message, timeout, popup, setPopup }: TypeProps) {
  useEffect(() => {
    const timer = setInterval(() => setPopup(!popup), timeout)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='fixed bottom-5 right-5 p-8 bg-gray-800 text-white rounded-lg shadow-[1px_1px_5px_3px_#111827]'>
      {message}
    </div>
  )
}