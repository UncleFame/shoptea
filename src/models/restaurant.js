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

export async function getRestaurantsByUserId(userId){
    try {
        const {data, error} = await supabase
        .from('restaurant_details')
        .select()
        .eq('user_id', userId)
        
        if (error) throw new Error(error.message)

        return data 
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function deleteRestaurantById(restaurantId){
    try {
        const {error} = await supabase
        .from('restaurant_details')
        .delete()
        .eq('id', restaurantId)

        if (error) throw new Error(error.message)
    } catch (error) {
        throw new Error(error.message)
    }
}