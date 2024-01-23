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

// get current session
export async function getCurrentSession(){
  try {
    const {data, error} = await supabase.auth.getSession();

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

// create new user to the database
export async function insertNewUser(user){
  try {
    const {data, error} = await supabase
    .from('users')
    .insert(user)
    .select()
    .single()

    if (error) throw new Error(error.message)
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function doesUserExist(email){
  try {
    const {data, error} = await supabase
    .from('users')
    .select()
    .eq('email', email)
    .single();

    return data !== null
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function getUserInfo(userId){
  try {
    const {data, error} = await supabase
    .from('users')
    .select()
    .eq('id', userId)
    .single();

    if (error) throw new Error(error.message)

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function updateUser(userId, updatedField){
  try {
    const {error} = await supabase
    .from('users')
    .update(updatedField)
    .eq('id', userId)

    if (error) throw new Error(error.message)
  } catch (error) {
    throw new Error(error.message)
  }
}