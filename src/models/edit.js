
import { supabase } from "../pages/loginsystem";

export async function editrestarunt(id , edit){
    try {
        
    const { error } = await supabase
        .from('restarunt')
        .update({ name: edit })
        .eq('id', id)
  
    } catch (error) {
      throw new Error(error.message)
    }
}

