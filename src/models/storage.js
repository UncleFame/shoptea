import { supabase } from "../pages/loginsystem"

export async function deleteRestaurantCover(restaurantName){
    try {
        const {error} = await supabase
        .storage
        .from('Shoplist')
        .remove([`restaurants/${restaurantName}/main.png`])

        if (error) throw new Error(error.message)


    } catch (error) {
        throw new Error(error.message)
    }
}