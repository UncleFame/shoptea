export function signOut(){
   try {
    localStorage.removeItem('email')
    localStorage.removeItem('id')
   } catch (error) {
    throw new Error(error.message)
   }
}