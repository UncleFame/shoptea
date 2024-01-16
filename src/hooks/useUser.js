import { useEffect, useState } from "react"
import { getCurrentSession } from "../models/users"

export const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const fetchUser = async () => {
      const session = await getCurrentSession();
      const extractedUser = session.session.user;
      setUser(extractedUser);
    }

    fetchUser();
  }, [])

  return {user, setUser}
}