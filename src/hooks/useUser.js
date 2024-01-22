import { useEffect, useState } from "react"
import { getCurrentSession } from "../models/users"

export const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const fetchUser = async () => {
      const email = localStorage.getItem('email');
      const id = localStorage.getItem('id');
      setUser(_ => ({
        email,
        id
      }));
    }

    fetchUser();
  }, [])

  return {user, setUser}
}