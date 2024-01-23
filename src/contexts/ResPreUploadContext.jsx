import { createContext, useState, useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { getRestaurantsByUserId } from "../models/restaurant";

export const ResPreUploadContext = createContext(null);

export const ResPreUploadProvider = ({children}) => {
    const {user, loading} = useUser();
    const [restaurants, setRestaurants] = useState(null);
  
    useEffect(()=>{
      const fetchData = async () => {
        try {
          if (loading) return
          if (user) {
            const fetchedRestaurants = await getRestaurantsByUserId(user.id);
            setRestaurants(fetchedRestaurants);
          }
        } catch (error) {
          alert(error.message)
        }
      }
  
      fetchData();
    }, [loading])

    return (
        <ResPreUploadContext.Provider
            value={{
                restaurants,
                setRestaurants,
                user
            }}
        >
            {children}
        </ResPreUploadContext.Provider>
    )
}