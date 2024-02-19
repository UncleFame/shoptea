import { supabase } from "../pages/loginsystem"

export async function deleteRestaurantCover(restaurantName : string){
    try {
        const {error} = await supabase
        .storage
        .from('Shoplist')
        .remove([`restaurants/${restaurantName}/main.png`])

        if (error) throw new Error(error.message)
        

    } catch (error : any) {
        throw new Error(error.message)
    }
}

export async function uploadRestaurantSubImages(files : File[], restaurantName : string) {
    try {
        for (let index = 0; index < files.length; index++){
            console.log(`Uploading file ${index + 1} / ${files.length}`)
            const {error} = await supabase
            .storage
            .from('Shoplist')
            .upload(`restaurants/${restaurantName}/sub-image-${index + 1}.png`, files[index], {
                cacheControl : '3600',
                upsert : true
            })

            if (error) throw new Error(error.message)
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function listAllRestaurantImages(restaurantName : string){
    try {        
        const { data, error } = await supabase
        .storage
        .from('Shoplist')
        .list(`restaurants/${restaurantName}`, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
        })

        if (error) throw new Error(error.message)

        return data
    } catch (error : any) {
        throw new Error(error.message)
    }
}

export function getAllRestaurantSubImagesPublicUrl(restaurantName : string) : String[]{
    try {
        let imageUrlList : String[] = [];
        for (let index = 0; index < 3; index++){
            const {data} = supabase
            .storage
            .from("Shoplist")
            .getPublicUrl(`restaurants/${restaurantName}/sub-image-1.png`)

            imageUrlList.push(data.publicUrl)
        }
        return imageUrlList
    } catch (error : any) {
       throw new Error(error.message) 
    }
}