import { supabase } from "../pages/loginsystem"

export async function fetchAllReviewsByRestaurantId(restaurantId){
  try {
    const {data, error} = await supabase
    .from("reviews")
    .select()
    .eq('restaurant_id', restaurantId)

    if (error) throw new Error(error.message)

    return data
    
  } catch (error) {
    throw new Error(error.message)
  }
}