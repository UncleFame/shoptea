import { useEffect, useState } from "react"
import { getCurrentSession } from "../models/users"

export const useUser = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchUser = async () => {
      const email = localStorage.getItem('email');
      const id = localStorage.getItem('id');
      setUser(_ => {
        return (!email || !id) ? null : {
          email,
          id
        }
      });
      setLoading(false)
    }

    fetchUser();
  }, [])

  return {user, setUser, loading}
}