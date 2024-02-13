
import { supabase } from "../pages/loginsystem";

export async function editrestarunt(id , edit){
    try {
        
    const {data , error} = await supabase
        .from('restarunt_details')
        .upsert({ name: edit })
        .select()
  
    } catch (error) {
      throw new Error(error.message)
    }
}
