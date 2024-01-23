import { createContext } from "react";

export const ResPreUploadContext = createContext(null);

export const ResPreUploadProvider = ({children}) => {
    const {user} = useUser();
    const [restaurants, setRestaurants] = useState(null);
  
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const fetchedRestaurants = await getRestaurantsByUserId(user.id);
          setRestaurants(fetchedRestaurants);
        } catch (error) {
          alert(error.message)
        }
      }
  
      fetchData();
    }, [])

    return (
        <ResPreUploadContext.Provider
            value={{
                restaurants,
                setRestaurants
            }}
        >
            {children}
        </ResPreUploadContext.Provider>
    )
}