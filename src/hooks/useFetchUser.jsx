import { useEffect } from "react";
import { useState } from "react";
import { getUserInfo } from "../models/users";

export function useFetchUser(userId){
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const fetchUser = async () => {
      if (!userId) return 
      const fetchedUser = await getUserInfo(userId);
      setUser(_ => fetchedUser)
      setLoading(_ => false)
    }

    fetchUser();
  }, [userId])

  return {user, loading}
}