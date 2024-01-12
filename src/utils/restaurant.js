import { supabase } from "../pages/loginsystem";

// upload image to the bucket for a restaurant
export async function uploadRestaurantImage(file, restaurantName, filename){
  try {
    // upload to the bucket
    const {error} = await supabase
    .storage
    .from("Shoplist")
    .upload(`restaurants/${restaurantName}/${filename}.png`, file, {
      cacheControl: '3600',
      upsert: false
    })

    if (error) throw new Error(error.message)
    
  } catch (error ) {
    throw new Error(error.message)
  }
}

// upload sub-image to the bucket for a restaurant
export async function uploadRestaurantSubImage(event, restaurantName, filename){
  try {
    const file = event.target.files[0]
    // upload to the file to the bucket
    const {error} = await supabase
    .storage
    .from("Shoplist")
    .upload(`restaurants/${restaurantName}/sub/${filename.png}`, file, {
      cacheControl: '3600',
      upsert: false
    })

    if (error) throw new Error(error.message)
  } catch (error) {
    throw new Error(error.message)
  }
}