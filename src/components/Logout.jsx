import { useEffect } from "react"
import { logout } from '../services/authServices'
export default function Logout() {
    useEffect(() => {
      logout()
      window.location = 'https://jobz-steel.vercel.app/'  
    }, [])
  return (
    null
  )
}
