
import { supabase } from "../pages/loginsystem";
import { data } from "autoprefixer";

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

export async function insertname(name){
    try {
        const { error } = await supabase
        .from('restaurant_details')
        .select()
        .eq("name" , name )
        .insert(name)

        if (error) throw new Error(error.message)

    } catch (error) {
        if (error) throw new Error(error.message)
    }
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

export async function getRestaurantInfoById(restaurantId){
    try{
        const {data, error} = await supabase
        .from("restaurant_details")
        .select()
        .eq("id" ,restaurantId)
        .single()

        if (error) throw new Error(error.message)

        return data
    }catch (error){
        throw new Error(error.message)
    }
}

export async function updateRestaurant(restaurant){
    try {
        const {id} = restaurant;
        const {error} = await supabase
        .from('restaurant_details')
        .update({
            ...restaurant
        })
        .eq('id', id);

        if (error) throw new Error(error.message)

    } catch (error) {
        throw new Error(error.message)
    }
}
