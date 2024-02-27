import { supabase } from "../pages/loginsystem"

export async function fetchAllReviewsByRestaurantId(restaurantId){
  try {
    const {data, error} = await supabase
    .from("reviews")
    .select()
    .eq("restaurant_id", restaurantId)

    if (error) throw new Error(error.message)
    
    return data
     
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function deleteReviewById(reviewId){
  try {
    const {error} = await supabase
    .from("reviews")
    .delete()
    .eq("id", reviewId)

    if (error) throw new Error(error.message)
    
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function addReview(newReview){
  try {
    const {error} = await supabase
    .from("reviews")
    .insert(newReview)

    if (error) throw new Error(error.message)
    
  } catch (error) {
    throw new Error(error.message)
  }
}