import { supabase } from "../pages/loginsystem"

// retrieve user information
export async function getCurrentUser(accessToken){
  try {
    const {data : {user}} = await supabase.auth.getUser(accessToken);

    return user

  } catch (error) {
    throw new Error(error.message)
  }
}

export async function getCurrentSession(){
  try {
    const {data, error} = await supabase.auth.getSession();

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}