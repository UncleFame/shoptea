import { supabase } from "../pages/loginsystem";

// This function will insert a new restaurant
export async function insertNewRestaurant(newRestaurant){
    try {
        const { error } = await supabase
        .from('restaurant_details')
        .insert(newRestaurant)

        if (error) throw new Error(error.message)

    } catch (error) {
        if (error) throw new Error(error.message)
    }
}

// get restaurant image url
export function getRestaurantImageUrl(restaurantName){
    
}