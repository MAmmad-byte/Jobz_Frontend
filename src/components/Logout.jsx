import { useEffect } from "react"
import { logout } from '../services/authServices'
export default function Logout() {
    useEffect(() => {
      logout()
      window.location = '/'  
    }, [])
  return (
    null
  )
}
